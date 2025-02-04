import "./App.css";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import TableComponent from "./components/TableComponent";

function App() {
  document.title = "Udhaar Book";
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");

  // Fetch All Data / Records
  useEffect(() => {
    fetch("http://localhost:3001/udhaar_book/records")
      .then((response) => {
        if (!response.ok) throw new Error("Network error");
        return response.json();
      })
      .then((data) => {
        setRecords(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isSubmitted },
  } = useForm();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const onSubmit = async (data) => {
    try {
      const api = await fetch("http://localhost:3001/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!api.ok) throw new Error("Failed to submit");
      const res = await api.json();
      setRecords([...records, res]);
    } catch (err) {
      console.error(err);
    }

    // refreshing records

    fetch("http://localhost:3001/udhaar_book/records") //
      .then((response) => {
        if (!response.ok) throw new Error("Network error");
        return response.json();
      })
      .then((data) => {
        setRecords(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
      
      // window.location.reload();
  };

  // Filtering Lia hy.

  const findLia = () => {
    fetch("http://localhost:3001/udhaar_book/records/lia_hy")
      .then((response) => {
        if (!response.ok) throw new Error("Network error");
        return response.json();
      })
      .then((data) => {
        setRecords(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  // Filtering Dia hy.
  const findDia = () => {
    fetch("http://localhost:3001/udhaar_book/records/dia_hy")
      .then((response) => {
        if (!response.ok) throw new Error("Network error");
        return response.json();
      })
      .then((data) => {
        setRecords(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  // Find All

  const findAll = () => {
    fetch("http://localhost:3001/udhaar_book/records")
      .then((response) => {
        if (!response.ok) throw new Error("Network error");
        return response.json();
      })
      .then((data) => {
        setRecords(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const delay = (d) => new Promise((resolve) => setTimeout(resolve, d * 1000));

  // Find By Name
  const findByName = async (e) => {
    const searchName = e.target.value;
    setName(searchName);

    if (!searchName) {
      findAll();
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3001/udhaar_book/records/by_name/${searchName}`
      );
      if (!response.ok) throw new Error("Search failed");
      const data = await response.json();
      setRecords(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  };

  return (
    <div className="h-screen w-screen flex bg-gray-900">
      {/* {isSubmitted && (
        <div className="alert absolute p-5 border-2 border-gray-400 bg-gray-600 rounded-lg  text-green-500 top-10 left-[40%] z-50  text-lg font-semibold ">
          <h1>Data Submitted Successfully</h1>
        </div>
      )}

      {isSubmitting && <div className="alert absolute p-5 border-2 border-gray-400 bg-gray-600 rounded-lg  text-sky-500 top-10 left-[40%] z-50  text-lg font-semibold ">
            <h1>Sending Data</h1>
        </div>} */}

      <div className="container  bg-gray-800 w-1/2 flex ">
        <div className="form flex container bg-gray-900 h-[80%] rounded-3xl shadow-lg w-3/4 m-auto ">
          <div className="container m-auto ">
            <h1 className="text-white font-semibold text-2xl text-center mb-8">
              Udhaar Book
            </h1>

            {/* Form */}

            <form
              className="max-w-sm mx-auto md:px-5 sm:px-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: { value: true, message: "Name is required" },
                    minLength: {
                      value: 3,
                      message: "Enter at least three characters.",
                    },
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Name!"
                />
                {errors.name && <span>{errors.name.message}🔴</span>}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="Amount"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Amount
                </label>
                <input
                  type="number"
                  id="Amount"
                  {...register("amount", {
                    required: { value: true, message: "Amount is Required." },
                  })}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Amount"
                />
                {errors.amount && <span>{errors.amount.message}</span>}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="type"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Type
                </label>
                <select
                  id="type"
                  {...register("type", {
                    required: {
                      value: true,
                      message: "Please Select Any Type",
                    },
                    validate: (value) =>
                      value !== "- Select option -" ||
                      "Please select a valid type",
                  })}
                  className="bg-gray-50 mb-7 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="">- Select option -</option>
                  <option>Lia hy</option>
                  <option>Dia hy</option>
                </select>
                {errors.type && <span>{errors.type.message}🔴</span>}
              </div>
              <button
                type="submit"
                className="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Right Side Table */}

      <TableComponent
        records={records}
        findLia={findLia}
        findDia={findDia}
        findAll={findAll}
        findByName={findByName}
        register={register}
      />
    </div>
  );
}

export default App;
