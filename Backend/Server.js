const express = require("express");
const bodyParser = require("body-parser"); // Note: This is redundant with express.json()
const cors = require("cors");
const { MongoClient } = require("mongodb");
const app = express();
const port = 3001;
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

// Mongo Setup
const DataBase = "udhaar_book";
const Collection = "records";

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(DataBase);
    const collection = db.collection(Collection);
    return { db, collection }; // Return the database and collection instances
  } catch (error) {
    console.error("Failed to connect to database:", error);
    throw error;
  }
}

connectToDatabase().catch(console.error);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// Remove redundant bodyParser.json() as express.json() is already used

app.get("/udhaar_book/records", async (req, res) => {
  try {
    const collection = client.db(DataBase).collection(Collection);
    const foundrec = await collection.find({}).toArray();
    res.json(foundrec);
  } catch (err) {
    console.error("Error fetching records:", err);
    res.status(500).json({ error: "Failed to fetch Records" });
  }
});

app.get("/udhaar_book/records/lia_hy", async (req, res) => {
  try {
    const collection = client.db(DataBase).collection(Collection);
    const foundrec = await collection.find({ type: "Lia hy" }).toArray();
    res.json(foundrec);
  } catch (err) {
    console.error("Error fetching records:", err);
    res.status(500).json({ error: "Failed to fetch Records" });
  }

  console.log("Showing Lia hy....");
});

app.get("/udhaar_book/records/dia_hy", async (req, res) => {
  try {
    const collection = client.db(DataBase).collection(Collection);
    const foundrec = await collection.find({ type: "Dia hy" }).toArray();
    res.json(foundrec);
  } catch (err) {
    console.error("Error fetching records:", err);
    res.status(500).json({ error: "Failed to fetch Records" });
  }

  console.log("Showing Dia hy....");
});

  
// handel search by name   GET
app.get("/udhaar_book/records/by_name/:name", async (req, res) => {
  try {
    const { name } = req.params;
    const collection = client.db(DataBase).collection(Collection);
    const foundrec = await collection.find({ 
      name: { $regex: name, $options: 'i' } 
    }).toArray();
    res.json(foundrec);
  } catch (err) {
    console.error("Error fetching records:", err);
    res.status(500).json({ error: "Failed to fetch Records" });
  }
});

app.post("/", async (req, res) => {
  try {
    const { name, amount, type } = req.body;
    console.log(req.body);

    const collection = client.db(DataBase).collection(Collection);
    let result;

    if (type === "Lia hy") {
      result = await collection.insertOne({
        name,
        amount: `+${amount}`,
        type,
      });
    } else if (type === "Dia hy") {
      result = await collection.insertOne({
        name,
        amount: `-${amount}`,
        type,
      });
    } else {
      return res.status(400).json({ error: "Invalid type provided" });
    }

    console.log("Result:", result);
    res.status(201).json({ message: "Record created successfully", result });
  } catch (error) {
    console.error("Error creating record:", error);
    res.status(500).json({ error: "Failed to create record" });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something broke!" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
