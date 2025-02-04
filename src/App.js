import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  selectAmount,
  selectData,
  selectName,
  selectType,
  setName,
  setAmount,
  setType,
  setData, // Add these imports
} from "./redux/mainSlice";

function App() {
  document.title = "Udhaar Book";
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  const amount = useSelector(selectAmount);
  const type = useSelector(selectType);
  const data = useSelector(selectData);

  // console.log(name);
  // console.log(amount);
  // console.log(type);
  // console.log(data);

  const saveData = (e) => {
    e.preventDefault();
    if (type === "Lia hy") {
      dispatch(
        setData({
          name: name,
          amount: "+" + amount,
          type: type,
        })
      );
    } else {
      dispatch(
        setData({
          name: name,
          amount: "-" + amount,
          type: type,
        })
      );
    }
  };

  return (
    <div className="h-screen w-screen flex bg-gray-900">
      <div className="container  bg-gray-800 w-1/2 flex ">
        <div className="form flex container bg-gray-900 h-[80%] rounded-3xl shadow-lg w-3/4 m-auto ">
          <div className="container m-auto ">
            <h1 className="text-white font-semibold text-2xl text-center mb-8">
              Udhaar Book
            </h1>

            {/* Form */}

            <form
              className="max-w-sm mx-auto md:px-5 sm:px-6"
              onSubmit={saveData}
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Your Name!"
                  required=""
                  onChange={(e) => {
                    dispatch(setName(e.target.value));
                  }}
                />
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Amount"
                  required=""
                  onChange={(e) => {
                    dispatch(setAmount(e.target.value));
                  }}
                />
              </div>
              <div classname="mb-5">
                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select Type
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 mb-7 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  onChange={(e) => {
                    dispatch(setType(e.target.value));
                  }}
                >
                  <option>- Select option -</option>
                  <option>Lia hy</option>
                  <option>Dia hy</option>
                </select>
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
      <div className="container relative  bg-gray-900 w-1/2  py-5 ">
        <div className="relative overflow-x-auto px-10 h-[80%] overflow-y-scroll rounded-lg">
          <div className="flex items-center rounded-lg justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
            <div>
              <button
                id="dropdownActionButton"
                data-dropdown-toggle="dropdownAction"
                className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                type="button"
              >
                <span className="sr-only">Action button</span>
                Action
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              {/* Dropdown menu */}
              <div
                id="dropdownAction"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-44 dark:bg-gray-700 dark:divide-gray-600 "
              >
                <ul
                  className="p-1  text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownActionButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Lia hy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 rounded-lg py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dia hy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="table-search-users"
                className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search for users"
              />
            </div>
          </div>
          <table className="w-full text-sm text-left   rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700   uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr className="">
                <th scope="col" className="px-6 py-3 ">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => {
                return (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="ps-3">
                        <div className="text-base font-semibold">
                          {user.name}
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">{user.amount}</td>
                    <td className="px-6 py-4">
                      <h2
                        className={`flex items-center text-lg font-bold ${
                          user.type === "Dia hy"
                            ? "text-red-600"
                            : "text-green-600"
                        }  `}
                      >
                        {user.type}
                      </h2>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="bg-gray-700 py-4 px-10 md:px-6 rounded-t-2xl items-center flex justify-between w-full absolute bottom-0 ">
          <h1 className="text-2xl font-semibold text-white  ">
            Total Balance:
          </h1>
          <h2 className="text-2xl font-bold text-gray-400 ">
            $ {data.reduce((sum, item) => sum + Number(item.amount), 0)}
            
          </h2>
        </div>
      </div>
    </div>
  );
}

export default App;
