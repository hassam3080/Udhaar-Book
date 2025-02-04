import React from "react";

const TableComponent = ({
  records = [],
  findLia,
  findDia,
  findAll,
  findByName,
  register,
}) => {
  return (
    <div className="container relative bg-gray-900 w-1/2 py-5">
      <div className="relative  overflow-hidden px-10  h-[90%] rounded-lg">
        <div className="flex items-center rounded-lg justify-between flex-col flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
          <div className="btn cursor-pointer relative group transition duration-1000 ease-in-out">
            <h1 className=" inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-md px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ">{`Action > `}</h1>

            <div className="options hidden z-50 shadow-md absolute   group-hover:flex  transition  duration-1000  ease-in-out items-center text-gray-500 bg-white border border-gray-300   font-medium rounded-lg text-md px-1 py-1.5 dark:bg-gray-800 dark:text-gray-400 w-max justify-center">
              <ul className="">
                <li
                  className="px-4  py-1 rounded-md
                             dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 focus:outline-none  focus:ring-4 focus:ring-gray-100 "
                  onClick={findLia}
                >
                  Lia Hy
                </li>
                <li
                  className="px-4  py-1 rounded-md
                             dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 focus:outline-none  focus:ring-4 focus:ring-gray-100 "
                  onClick={findDia}
                >
                  Dia Hy
                </li>
                <li
                  className="px-4  py-1 rounded-md
                             dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 focus:outline-none  focus:ring-4 focus:ring-gray-100 "
                  onClick={findAll}
                >
                  Show All
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
              onChange={findByName}
            />
          </div>
        </div>
        <div className="max-h-[calc(100%-2rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 hover:scrollbar-thumb-gray-500">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sticky top-0">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-tl-lg">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 rounded-tr-lg">
                  Type
                </th>
              </tr>
            </thead>
            <tbody>
              {records.map((rec, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <div className="ps-3">
                      <div className="text-base font-semibold">{rec.name}</div>
                    </div>
                  </th>
                  <td className="px-6 py-4">{rec.amount}</td>
                  <td className="px-6 py-4">
                    <h2
                      className={`flex items-center text-lg font-bold ${
                        rec.type === "Dia hy"
                          ? "text-red-600"
                          : "text-green-600"
                      }`}
                    >
                      {rec.type}
                    </h2>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-gray-700 py-4 px-10 md:px-6 rounded-t-2xl items-center flex justify-between w-full absolute bottom-0">
        <h1 className="text-2xl font-semibold text-white">Total Balance:</h1>
        <h2 className="text-2xl font-bold text-gray-400">
          $ {records.reduce((sum, item) => sum + Number(item.amount), 0)}
        </h2>
      </div>
    </div>
  );
};

export default TableComponent;
