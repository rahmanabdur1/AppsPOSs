"use client";

import Image from "next/image";
import React, { useState } from "react";

interface Customer {
  id: number;
  image: string;
  name: string;
  supplierId: string;
  phone: string;
  email: string;
  paid: string;
  due: string;
  status: string;
}

const CustomerTable: React.FC = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };


  const customers: Customer[] = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      name: "John Doe",
      supplierId: "SUP-001",
      phone: "1234567890",
      email: "john@example.com",
      paid: "$500",
      due: "$200",
      status: "Active",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150",
      name: "Jane Smith",
      supplierId: "SUP-002",
      phone: "9876543210",
      email: "jane@example.com",
      paid: "$300",
      due: "$100",
      status: "Inactive",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150",
      name: "Jane Smith",
      supplierId: "SUP-002",
      phone: "9876543210",
      email: "jane@example.com",
      paid: "$300",
      due: "$100",
      status: "Inactive",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/150",
      name: "Jane Smith",
      supplierId: "SUP-002",
      phone: "9876543210",
      email: "jane@example.com",
      paid: "$300",
      due: "$100",
      status: "Inactive",
    },
    {
      id: 5,
      image: "https://via.placeholder.com/150",
      name: "Jane Smith",
      supplierId: "SUP-002",
      phone: "9876543210",
      email: "jane@example.com",
      paid: "$300",
      due: "$100",
      status: "Inactive",
    },
    {
      id: 6,
      image: "https://via.placeholder.com/150",
      name: "Jane Smith",
      supplierId: "SUP-002",
      phone: "9876543210",
      email: "jane@example.com",
      paid: "$300",
      due: "$100",
      status: "Inactive",
    },
    {
      id: 7,
      image: "https://via.placeholder.com/150",
      name: "Jane Smith",
      supplierId: "SUP-002",
      phone: "9876543210",
      email: "jane@example.com",
      paid: "$300",
      due: "$100",
      status: "Inactive",
    },

    {
      id: 8,
      image: "https://via.placeholder.com/150",
      name: "Jane Smith",
      supplierId: "SUP-002",
      phone: "9876543210",
      email: "jane@example.com",
      paid: "$300",
      due: "$100",
      status: "Inactive",
    },
    {
      id: 9,
      image: "https://via.placeholder.com/150",
      name: "Jane Smith",
      supplierId: "SUP-002",
      phone: "9876543210",
      email: "jane@example.com",
      paid: "$300",
      due: "$100",
      status: "Inactive",
    },

    {
      id: 10,
      image: "https://via.placeholder.com/150",
      name: "Jane Smith",
      supplierId: "SUP-002",
      phone: "9876543210",
      email: "jane@example.com",
      paid: "$300",
      due: "$100",
      status: "Inactive",
    },




    // Add more customer entries here...
  ];

  return (
    <>
      {isDrawerOpen && (
        <div
          id="drawer-contact"
          className="fixed insert-0   bg-white  top-0 right-0 z-50 h-screen p-4 overflow-y-auto transition-transform w-80"
          aria-labelledby="drawer-contact-label"
        >
          {/* Drawer Content */}
          <h5
            id="drawer-label"
            className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
          >

            Filter customer
          </h5>

          {/* Close Button */}
          <button
            type="button"
            onClick={toggleDrawer}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          {/* Form */}
          <form className="mb-6">
            <div className="mb-6">
              <label
                htmlFor="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Company Name"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="designation"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Designation
              </label>
              <input
                type="text"
                id="designation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Designation"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="department"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Department
              </label>
              <input
                type="text"
                id="department"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Department"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="industry"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Industry
              </label>
              <input
                type="text"
                id="industry"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Industry"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="country"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Country"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="city"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="City"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="state"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="State"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="customerType"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Customer Type
              </label>
              <select
                id="customerType"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="individual">Individual</option>
                <option value="business">Business</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="sellType"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Sell Type
              </label>
              <select
                id="sellType"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="retailer">Retailer</option>
                <option value="wholesaler">Wholesaler</option>
                <option value="dealer">Dealer</option>
              </select>
            </div>

            <div className="mb-6">
              <label
                htmlFor="createdBy"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Created By
              </label>
              <input
                type="text"
                id="createdBy"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Creator Name"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="createdDate"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Created Date
              </label>
              <input
                type="date"
                id="createdDate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="status"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Status
              </label>
              <select
                id="status"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </form>

          {/* Contact Info */}
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <a href="#" className="hover:underline">
              info@company.com
            </a>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <a href="#" className="hover:underline">
              212-456-7890
            </a>
          </p>
        </div>
      )}


      {/* Search and Dropdown Toggle Section */}
      <div className="flex flex-wrap items-center justify-between pb-4  ">
        <div className="">
          <input
            type="text"
            id="table-search"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-[270] bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search for items"
          />
        </div>

        <div className=" flex mr-[8px] ">
          <div>
            <button type="button" onClick={toggleDrawer} className="py-1.5 px-3 me-2  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Filters</button>
          </div>
          <button
            id="dropdownRadioButton"
            onClick={toggleDropdown}
            className="inline-flex items-center text-gray-500 hover:text-blue-700 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5"
          >
            Toggle
            <svg
              className="w-2.5 h-2.5 ml-2.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1l4 4 4-4"
              />
            </svg>
          </button>

        </div>

      </div>

      {/* Customer Table */}
      <div className="relative">
        <div className=" overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="p-4">
                  <input type="checkbox" className="w-4 h-4" />
                </th>
                <th className="px-6 py-3">Image</th>
                <th className="px-6 py-3">Supplier Name</th>
                <th className="px-6 py-3">Supplier ID</th>
                <th className="px-6 py-3">Phone</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Paid</th>
                <th className="px-6 py-3">Due</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Action</th>
                <th className="px-6 py-3">More</th>
                <th className="px-6 py-3">More</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="p-4">
                    <input type="checkbox" className="w-4 h-4" />
                  </td>
                  <td className="px-6 py-4">
                    <Image
                      src={customer.image}
                      alt={customer.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  </td>
                  <td className="px-6 py-4">{customer.name}</td>
                  <td className="px-6 py-4">{customer.supplierId}</td>
                  <td className="px-6 py-4">{customer.phone}</td>
                  <td className="px-6 py-4">{customer.email}</td>
                  <td className="px-6 py-4">{customer.paid}</td>
                  <td className="px-6 py-4">{customer.due}</td>
                  <td className="px-6 py-4">{customer.status}</td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:underline">Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>


             {/* Dropdown */}
{isDropdownVisible && (
  <div className="absolute top-[-8px] right-0 z-10 w-[320px] bg-white divide-y divide-gray-100 rounded-lg shadow">
    <ul className="p-3 space-y-3 text-sm text-gray-700">
      {/* First two items (single column layout) */}
      <li>
        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
          <input
            id="checkbox-customer-id"
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
          />
          <label
            htmlFor="checkbox-customer-id"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Customer ID
          </label>
        </div>
      </li>
      <li>
        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
          <input
            id="checkbox-customer-details"
            type="checkbox"
            className="w-4 h-4 text-blue-600 border-gray-300 rounded"
          />
          <label
            htmlFor="checkbox-customer-details"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            Customer (Image, Name, Designation)
          </label>
        </div>
      </li>
    </ul>

    {/* Rest of the items (two-column layout) */}
    <div className="grid grid-cols-2 gap-3 p-3">
      <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
        <input
          id="checkbox-company"
          type="checkbox"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded"
        />
        <label
          htmlFor="checkbox-company"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          Company
        </label>
      </div>
      <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
        <input
          id="checkbox-designation"
          type="checkbox"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded"
        />
        <label
          htmlFor="checkbox-designation"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          Designation
        </label>
      </div>
      <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
        <input
          id="checkbox-department"
          type="checkbox"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded"
        />
        <label
          htmlFor="checkbox-department"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          Department
        </label>
      </div>
      <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
        <input
          id="checkbox-industry"
          type="checkbox"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded"
        />
        <label
          htmlFor="checkbox-industry"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          Industry
        </label>
      </div>
      <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
        <input
          id="checkbox-email"
          type="checkbox"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded"
        />
        <label
          htmlFor="checkbox-email"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          Email
        </label>
      </div>
      <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
        <input
          id="checkbox-mobile"
          type="checkbox"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded"
        />
        <label
          htmlFor="checkbox-mobile"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          Mobile
        </label>
      </div>
      <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
        <input
          id="checkbox-status"
          type="checkbox"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded"
        />
        <label
          htmlFor="checkbox-status"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          Status
        </label>
      </div>
      <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
        <input
          id="checkbox-action"
          type="checkbox"
          className="w-4 h-4 text-blue-600 border-gray-300 rounded"
        />
        <label
          htmlFor="checkbox-action"
          className="ml-2 text-sm font-medium text-gray-900"
        >
          Action
        </label>
      </div>
    </div>
  </div>
)}
  

        </div>
      </div>
      {/* Pagination */}
      <nav className="flex items-center justify-between pt-4">
        <span className="text-sm font-normal text-gray-500">
          Showing <span className="font-semibold text-gray-900">1-10</span> of{" "}
          <span className="font-semibold text-gray-900">100</span>
        </span>
        <ul className="inline-flex items-center space-x-2">
          <li>
            <a href="#" className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200">
              Previous
            </a>
          </li>
          <li>
            <a href="#" className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200">
              1
            </a>
          </li>
          <li>
            <a href="#" className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200">
              2
            </a>
          </li>
          <li>
            <a href="#" className="px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200">
              Next
            </a>
          </li>
        </ul>
      </nav>


    </>
  );
};

export default CustomerTable;
