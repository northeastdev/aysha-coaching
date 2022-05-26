import React from "react";
import Heading from "./Heading";

function Fees() {
  return (
    <div className="my-16">
      <Heading heading={"Fee Structure 2022-2023"} />
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mx-auto max-w-3xl mt-10">
        <h2 className="text-center mb-3 font-bold">Class 11 (Science)</h2>
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Courses
              </th>
              <th scope="col" class="px-6 py-3">
                Fees
              </th>
              <th scope="col" class="px-6 py-3">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Physics
              </th>
              <td class="px-6 py-4">Rs.6000</td>
              <td class="px-6 py-4">
                Includes DPP sheets, doubt clearing session, chapterwise & full
                length tests.
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Chemistry
              </th>
              <td class="px-6 py-4">Rs.6000</td>
              <td class="px-6 py-4">
                Includes DPP sheets, doubt clearing session, chapterwise & full
                length tests.
              </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Maths
              </th>
              <td class="px-6 py-4">Rs.6000</td>
              <td class="px-6 py-4">
                Includes DPP sheets, doubt clearing session, chapterwise & full
                length tests.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Fees;
