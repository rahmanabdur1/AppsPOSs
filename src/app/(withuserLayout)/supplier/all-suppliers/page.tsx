
"use client";



import Image from "next/image";

import React, { useState } from "react";



interface Customer {

    id: number;
    supplierId: string;

    image: string;

    name: string;


    phone: string;

    email: string;

    paid: string;

    due: string;

    status: string;

}



const SuppliersTable: React.FC = () => {





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

            status: "Pending",

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

            status: "Cancel",

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

            status: "Cancel",

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

            status: "active",

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

            status: "Pending",

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

            status: "active",

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

            status: "Pending",

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

            status: "active",

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

            status: "Cancel",

        },

        // Add more customer entries here...

    ];

    const [isOpenFilter, setIsOpenFilter] = useState(false);

    const [isOpen, setIsOpen] = useState(false);



    const toggleOffcanvas = () => {

        setIsOpen(!isOpen);

    };







    const filterOffcanvas = () => {

        setIsOpenFilter(!isOpenFilter);

    };





    return (

        <>


            {/* Toggle Button */}


            {isOpenFilter && (

                <div

                    className="fixed inset-0 bg-black bg-opacity-50 z-[79]"

                    onClick={filterOffcanvas}

                ></div>

            )}

            <div
                id="offcanvas-right"
                className={`hs-overlay fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-l dark:bg-neutral-800 dark:border-neutral-700 ${isOpenFilter ? "translate-x-0" : "translate-x-full"}`}
                role="dialog"
                aria-labelledby="offcanvas-right-label"
            >
                <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                    <h3
                        id="offcanvas-right-label"
                        className="font-bold text-gray-800 dark:text-white"
                    >
                        Filter Supplier
                    </h3>
                    <button
                        type="button"
                        className="inline-flex items-center rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none dark:bg-neutral-700 dark:text-neutral-400"
                        aria-label="Close"
                        onClick={filterOffcanvas}
                    >
                        <span className="sr-only">Close</span>
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="p-4 overflow-y-auto max-h-[calc(100vh-4rem)]">
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
                </div>

            </div>

            {isOpen && (

                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-[79]"
                    onClick={toggleOffcanvas}
                ></div>
            )}
            {/* Offcanvas */}
            <div
                id="offcanvas-right"
                className={`hs-overlay fixed top-0 end-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-l dark:bg-neutral-800 dark:border-neutral-700 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
                role="dialog"
                aria-labelledby="offcanvas-right-label"
            >
                <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                    <h3
                        id="offcanvas-right-label"
                        className="font-bold text-gray-800 dark:text-white"
                    >
                        Toggle Supplier
                    </h3>
                    <button
                        type="button"
                        className="inline-flex items-center rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none dark:bg-neutral-700 dark:text-neutral-400"
                        aria-label="Close"
                        onClick={toggleOffcanvas}
                    >
                        <span className="sr-only">Close</span>
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18"></path>
                            <path d="m6 6 12 12"></path>
                        </svg>
                    </button>
                </div>
                <div className="p-4">
                    <ul className="p-3 overflow-x-auto space-y-3 text-sm text-gray-700">
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
                                    Supplier ID
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
                                    Supplier (Image, Name, Designation)
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
                            <input id="checkbox-phone" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                            <label htmlFor="checkbox-phone" className="ml-2 text-sm font-medium text-gray-900">Phone</label>
                        </div>

                        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
                            <input id="checkbox-fax" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                            <label htmlFor="checkbox-fax" className="ml-2 text-sm font-medium text-gray-900">Fax</label>
                        </div>
                        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
                            <input id="checkbox-country" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                            <label htmlFor="checkbox-country" className="ml-2 text-sm font-medium text-gray-900">Country</label>
                        </div>

                        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
                            <input id="checkbox-address" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                            <label htmlFor="checkbox-address" className="ml-2 text-sm font-medium text-gray-900">Address</label>
                        </div>

                        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
                            <input id="checkbox-city" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                            <label htmlFor="checkbox-city" className="ml-2 text-sm font-medium text-gray-900">City</label>
                        </div>

                        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
                            <input id="checkbox-state" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                            <label htmlFor="checkbox-state" className="ml-2 text-sm font-medium text-gray-900">State</label>
                        </div>

                        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
                            <input id="checkbox-zip-code" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                            <label htmlFor="checkbox-zip-code" className="ml-2 text-sm font-medium text-gray-900">ZIP Code</label>
                        </div>

                        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
                            <input id="checkbox-tax-number" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                            <label htmlFor="checkbox-tax-number" className="ml-2 text-sm font-medium text-gray-900">Tax Number</label>
                        </div>

                        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
                            <input id="checkbox-gst-number" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                            <label htmlFor="checkbox-gst-number" className="ml-2 text-sm font-medium text-gray-900">GST Number</label>
                        </div>

                        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
                            <input id="checkbox-total" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                            <label htmlFor="checkbox-total" className="ml-2 text-sm font-medium text-gray-900">Total</label>
                        </div>

                        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
                            <input id="checkbox-paid" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                            <label htmlFor="checkbox-paid" className="ml-2 text-sm font-medium text-gray-900">Paid</label>
                        </div>

                        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
                            <input id="checkbox-due" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                            <label htmlFor="checkbox-due" className="ml-2 text-sm font-medium text-gray-900">Due</label>
                        </div>

                        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
                            <input id="checkbox-created-by" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                            <label htmlFor="checkbox-created-by" className="ml-2 text-sm font-medium text-gray-900">Created By</label>
                        </div>

                        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
                            <input id="checkbox-created-date" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                            <label htmlFor="checkbox-created-date" className="ml-2 text-sm font-medium text-gray-900">Created Date</label>
                        </div>

                        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
                            <input id="checkbox-website" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                            <label htmlFor="checkbox-website" className="ml-2 text-sm font-medium text-gray-900">Website</label>
                        </div>

                        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
                            <input id="checkbox-billing-address" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                            <label htmlFor="checkbox-billing-address" className="ml-2 text-sm font-medium text-gray-900">Billing Address</label>
                        </div>

                        <div className="flex items-center hover:bg-gray-100 p-2 rounded-lg">
                            <input id="checkbox-shipping-address" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded" />
                            <label htmlFor="checkbox-shipping-address" className="ml-2 text-sm font-medium text-gray-900">Shipping Address</label>
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
            </div>





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
                    <button
                        type="button"
                        className="py-2 mr-4 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
                        aria-haspopup="dialog"
                        aria-expanded={isOpenFilter}
                        aria-controls="offcanvas-right"
                        onClick={filterOffcanvas}
                    >
                        Filter
                    </button>
                    <button
                        type="button"
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
                        aria-haspopup="dialog"
                        aria-expanded={isOpen}
                        aria-controls="offcanvas-right"
                        onClick={toggleOffcanvas}
                    >
                        Toggle
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
                                <th className="px-6 py-3">Action</th>
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
                                    <td className="p-5 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                        <div
                                            className={`py-1.5 px-2.5 rounded-full flex justify-center w-20 items-center gap-1 ${customer.status === "Active"
                                                ? "bg-emerald-50"
                                                : customer.status === "Pending"
                                                    ? "bg-amber-50"
                                                    : "bg-red-50"
                                                }`}
                                        >
                                            <svg
                                                width="5"
                                                height="6"
                                                viewBox="0 0 5 6"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                    cx="2.5"
                                                    cy="3"
                                                    r="2.5"
                                                    fill={
                                                        customer.status === "Active"
                                                            ? "#059669"
                                                            : customer.status === "Pending"
                                                                ? "#D97706"
                                                                : "#DC2626"
                                                    }
                                                ></circle>
                                            </svg>
                                            <span
                                                className={`font-medium text-xs ${customer.status === "Active"
                                                    ? "text-emerald-600"
                                                    : customer.status === "Pending"
                                                        ? "text-amber-600"
                                                        : "text-red-600"
                                                    }`}
                                            >
                                                {customer.status}
                                            </span>
                                        </div>
                                    </td>


                                    <td className="flex p-5 items-center gap-0.5">
                                        <button className="p-2  rounded-full bg-white group transition-all duration-500 hover:bg-indigo-600 flex item-center">
                                            <svg className="cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="fill-indigo-500 group-hover:fill-white" d="M9.53414 8.15675L8.96459 7.59496L8.96459 7.59496L9.53414 8.15675ZM13.8911 3.73968L13.3215 3.17789V3.17789L13.8911 3.73968ZM16.3154 3.75892L15.7367 4.31126L15.7367 4.31127L16.3154 3.75892ZM16.38 3.82658L16.9587 3.27423L16.9587 3.27423L16.38 3.82658ZM16.3401 6.13595L15.7803 5.56438L16.3401 6.13595ZM11.9186 10.4658L12.4784 11.0374L11.9186 10.4658ZM11.1223 10.9017L10.9404 10.1226V10.1226L11.1223 10.9017ZM9.07259 10.9951L8.52556 11.5788L8.52556 11.5788L9.07259 10.9951ZM9.09713 8.9664L9.87963 9.1328V9.1328L9.09713 8.9664ZM9.05721 10.9803L8.49542 11.5498H8.49542L9.05721 10.9803ZM17.1679 4.99458L16.368 4.98075V4.98075L17.1679 4.99458ZM15.1107 2.8693L15.1171 2.06932L15.1107 2.8693ZM9.22851 8.51246L8.52589 8.12992L8.52452 8.13247L9.22851 8.51246ZM9.22567 8.51772L8.52168 8.13773L8.5203 8.1403L9.22567 8.51772ZM11.5684 10.7654L11.9531 11.4668L11.9536 11.4666L11.5684 10.7654ZM11.5669 10.7662L11.9507 11.4681L11.9516 11.4676L11.5669 10.7662ZM11.3235 3.30005C11.7654 3.30005 12.1235 2.94188 12.1235 2.50005C12.1235 2.05822 11.7654 1.70005 11.3235 1.70005V3.30005ZM18.3 9.55887C18.3 9.11705 17.9418 8.75887 17.5 8.75887C17.0582 8.75887 16.7 9.11705 16.7 9.55887H18.3ZM3.47631 16.5237L4.042 15.9581H4.042L3.47631 16.5237ZM16.5237 16.5237L15.958 15.9581L15.958 15.9581L16.5237 16.5237ZM10.1037 8.71855L14.4606 4.30148L13.3215 3.17789L8.96459 7.59496L10.1037 8.71855ZM15.7367 4.31127L15.8013 4.37893L16.9587 3.27423L16.8941 3.20657L15.7367 4.31127ZM15.7803 5.56438L11.3589 9.89426L12.4784 11.0374L16.8998 6.70753L15.7803 5.56438ZM10.9404 10.1226C10.3417 10.2624 9.97854 10.3452 9.72166 10.3675C9.47476 10.3888 9.53559 10.3326 9.61962 10.4113L8.52556 11.5788C8.9387 11.966 9.45086 11.9969 9.85978 11.9615C10.2587 11.9269 10.7558 11.8088 11.3042 11.6807L10.9404 10.1226ZM8.31462 8.8C8.19986 9.33969 8.09269 9.83345 8.0681 10.2293C8.04264 10.6393 8.08994 11.1499 8.49542 11.5498L9.619 10.4107C9.70348 10.494 9.65043 10.5635 9.66503 10.3285C9.6805 10.0795 9.75378 9.72461 9.87963 9.1328L8.31462 8.8ZM9.61962 10.4113C9.61941 10.4111 9.6192 10.4109 9.619 10.4107L8.49542 11.5498C8.50534 11.5596 8.51539 11.5693 8.52556 11.5788L9.61962 10.4113ZM15.8013 4.37892C16.0813 4.67236 16.2351 4.83583 16.3279 4.96331C16.4073 5.07234 16.3667 5.05597 16.368 4.98075L17.9678 5.00841C17.9749 4.59682 17.805 4.27366 17.6213 4.02139C17.451 3.78756 17.2078 3.53522 16.9587 3.27423L15.8013 4.37892ZM16.8998 6.70753C17.1578 6.45486 17.4095 6.21077 17.5876 5.98281C17.7798 5.73698 17.9607 5.41987 17.9678 5.00841L16.368 4.98075C16.3693 4.90565 16.4103 4.8909 16.327 4.99749C16.2297 5.12196 16.0703 5.28038 15.7803 5.56438L16.8998 6.70753ZM14.4606 4.30148C14.7639 3.99402 14.9352 3.82285 15.0703 3.71873C15.1866 3.62905 15.1757 3.66984 15.1044 3.66927L15.1171 2.06932C14.6874 2.06591 14.3538 2.25081 14.0935 2.45151C13.8518 2.63775 13.5925 2.9032 13.3215 3.17789L14.4606 4.30148ZM16.8941 3.20657C16.6279 2.92765 16.373 2.65804 16.1345 2.46792C15.8774 2.26298 15.5468 2.07273 15.1171 2.06932L15.1044 3.66927C15.033 3.66871 15.0226 3.62768 15.1372 3.71904C15.2704 3.82522 15.4387 3.999 15.7367 4.31126L16.8941 3.20657ZM8.96459 7.59496C8.82923 7.73218 8.64795 7.90575 8.5259 8.12993L9.93113 8.895C9.92075 8.91406 9.91465 8.91711 9.93926 8.88927C9.97002 8.85445 10.0145 8.80893 10.1037 8.71854L8.96459 7.59496ZM9.87963 9.1328C9.9059 9.00925 9.91925 8.94785 9.93124 8.90366C9.94073 8.86868 9.94137 8.87585 9.93104 8.89515L8.5203 8.1403C8.39951 8.36605 8.35444 8.61274 8.31462 8.8L9.87963 9.1328ZM8.52452 8.13247L8.52168 8.13773L9.92967 8.89772L9.9325 8.89246L8.52452 8.13247ZM11.3589 9.89426C11.27 9.98132 11.2252 10.0248 11.1909 10.055C11.1635 10.0791 11.1658 10.0738 11.1832 10.0642L11.9536 11.4666C12.1727 11.3462 12.3427 11.1703 12.4784 11.0374L11.3589 9.89426ZM11.3042 11.6807C11.4912 11.6371 11.7319 11.5878 11.9507 11.4681L11.1831 10.0643C11.2007 10.0547 11.206 10.0557 11.1697 10.0663C11.1248 10.0793 11.0628 10.0941 10.9404 10.1226L11.3042 11.6807ZM11.1837 10.064L11.1822 10.0648L11.9516 11.4676L11.9531 11.4668L11.1837 10.064ZM16.399 6.10097L13.8984 3.60094L12.7672 4.73243L15.2677 7.23246L16.399 6.10097ZM10.8333 16.7001H9.16667V18.3001H10.8333V16.7001ZM3.3 10.8334V9.16672H1.7V10.8334H3.3ZM9.16667 3.30005H11.3235V1.70005H9.16667V3.30005ZM16.7 9.55887V10.8334H18.3V9.55887H16.7ZM9.16667 16.7001C7.5727 16.7001 6.45771 16.6984 5.61569 16.5851C4.79669 16.475 4.35674 16.2728 4.042 15.9581L2.91063 17.0894C3.5722 17.751 4.40607 18.0369 5.4025 18.1709C6.37591 18.3018 7.61793 18.3001 9.16667 18.3001V16.7001ZM1.7 10.8334C1.7 12.3821 1.6983 13.6241 1.82917 14.5976C1.96314 15.594 2.24905 16.4279 2.91063 17.0894L4.042 15.9581C3.72726 15.6433 3.52502 15.2034 3.41491 14.3844C3.3017 13.5423 3.3 12.4273 3.3 10.8334H1.7ZM10.8333 18.3001C12.3821 18.3001 13.6241 18.3018 14.5975 18.1709C15.5939 18.0369 16.4278 17.751 17.0894 17.0894L15.958 15.9581C15.6433 16.2728 15.2033 16.475 14.3843 16.5851C13.5423 16.6984 12.4273 16.7001 10.8333 16.7001V18.3001ZM16.7 10.8334C16.7 12.4274 16.6983 13.5423 16.5851 14.3844C16.475 15.2034 16.2727 15.6433 15.958 15.9581L17.0894 17.0894C17.7509 16.4279 18.0369 15.594 18.1708 14.5976C18.3017 13.6241 18.3 12.3821 18.3 10.8334H16.7ZM3.3 9.16672C3.3 7.57275 3.3017 6.45776 3.41491 5.61574C3.52502 4.79674 3.72726 4.35679 4.042 4.04205L2.91063 2.91068C2.24905 3.57225 1.96314 4.40612 1.82917 5.40255C1.6983 6.37596 1.7 7.61798 1.7 9.16672H3.3ZM9.16667 1.70005C7.61793 1.70005 6.37591 1.69835 5.4025 1.82922C4.40607 1.96319 3.5722 2.24911 2.91063 2.91068L4.042 4.04205C4.35674 3.72731 4.79669 3.52507 5.61569 3.41496C6.45771 3.30175 7.5727 3.30005 9.16667 3.30005V1.70005Z" fill="#818CF8"></path>
                                            </svg>
                                        </button>
                                        <button className="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-red-600 flex item-center">
                                            <svg className="" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="fill-red-600 group-hover:fill-white" d="M4.00031 5.49999V4.69999H3.20031V5.49999H4.00031ZM16.0003 5.49999H16.8003V4.69999H16.0003V5.49999ZM17.5003 5.49999L17.5003 6.29999C17.9421 6.29999 18.3003 5.94183 18.3003 5.5C18.3003 5.05817 17.9421 4.7 17.5003 4.69999L17.5003 5.49999ZM9.30029 9.24997C9.30029 8.80814 8.94212 8.44997 8.50029 8.44997C8.05847 8.44997 7.70029 8.80814 7.70029 9.24997H9.30029ZM7.70029 13.75C7.70029 14.1918 8.05847 14.55 8.50029 14.55C8.94212 14.55 9.30029 14.1918 9.30029 13.75H7.70029ZM12.3004 9.24997C12.3004 8.80814 11.9422 8.44997 11.5004 8.44997C11.0585 8.44997 10.7004 8.80814 10.7004 9.24997H12.3004ZM10.7004 13.75C10.7004 14.1918 11.0585 14.55 11.5004 14.55C11.9422 14.55 12.3004 14.1918 12.3004 13.75H10.7004ZM4.00031 6.29999H16.0003V4.69999H4.00031V6.29999ZM15.2003 5.49999V12.5H16.8003V5.49999H15.2003ZM11.0003 16.7H9.00031V18.3H11.0003V16.7ZM4.80031 12.5V5.49999H3.20031V12.5H4.80031ZM9.00031 16.7C7.79918 16.7 6.97882 16.6983 6.36373 16.6156C5.77165 16.536 5.49093 16.3948 5.29823 16.2021L4.16686 17.3334C4.70639 17.873 5.38104 18.0979 6.15053 18.2013C6.89702 18.3017 7.84442 18.3 9.00031 18.3V16.7ZM3.20031 12.5C3.20031 13.6559 3.19861 14.6033 3.29897 15.3498C3.40243 16.1193 3.62733 16.7939 4.16686 17.3334L5.29823 16.2021C5.10553 16.0094 4.96431 15.7286 4.88471 15.1366C4.80201 14.5215 4.80031 13.7011 4.80031 12.5H3.20031ZM15.2003 12.5C15.2003 13.7011 15.1986 14.5215 15.1159 15.1366C15.0363 15.7286 14.8951 16.0094 14.7024 16.2021L15.8338 17.3334C16.3733 16.7939 16.5982 16.1193 16.7016 15.3498C16.802 14.6033 16.8003 13.6559 16.8003 12.5H15.2003ZM11.0003 18.3C12.1562 18.3 13.1036 18.3017 13.8501 18.2013C14.6196 18.0979 15.2942 17.873 15.8338 17.3334L14.7024 16.2021C14.5097 16.3948 14.229 16.536 13.6369 16.6156C13.0218 16.6983 12.2014 16.7 11.0003 16.7V18.3ZM2.50031 4.69999C2.22572 4.7 2.04405 4.7 1.94475 4.7C1.89511 4.7 1.86604 4.7 1.85624 4.7C1.85471 4.7 1.85206 4.7 1.851 4.7C1.05253 5.50059 1.85233 6.3 1.85256 6.3C1.85273 6.3 1.85297 6.3 1.85327 6.3C1.85385 6.3 1.85472 6.3 1.85587 6.3C1.86047 6.3 1.86972 6.3 1.88345 6.3C1.99328 6.3 2.39045 6.3 2.9906 6.3C4.19091 6.3 6.2032 6.3 8.35279 6.3C10.5024 6.3 12.7893 6.3 14.5387 6.3C15.4135 6.3 16.1539 6.3 16.6756 6.3C16.9364 6.3 17.1426 6.29999 17.2836 6.29999C17.3541 6.29999 17.4083 6.29999 17.4448 6.29999C17.4631 6.29999 17.477 6.29999 17.4863 6.29999C17.4909 6.29999 17.4944 6.29999 17.4968 6.29999C17.498 6.29999 17.4988 6.29999 17.4994 6.29999C17.4997 6.29999 17.4999 6.29999 17.5001 6.29999C17.5002 6.29999 17.5003 6.29999 17.5003 5.49999C17.5003 4.69999 17.5002 4.69999 17.5001 4.69999C17.4999 4.69999 17.4997 4.69999 17.4994 4.69999C17.4988 4.69999 17.498 4.69999 17.4968 4.69999C17.4944 4.69999 17.4909 4.69999 17.4863 4.69999C17.477 4.69999 17.4631 4.69999 17.4448 4.69999C17.4083 4.69999 17.3541 4.69999 17.2836 4.69999C17.1426 4.7 16.9364 4.7 16.6756 4.7C16.1539 4.7 15.4135 4.7 14.5387 4.7C12.7893 4.7 10.5024 4.7 8.35279 4.7C6.2032 4.7 4.19091 4.7 2.9906 4.7C2.39044 4.7 1.99329 4.7 1.88347 4.7C1.86974 4.7 1.86051 4.7 1.85594 4.7C1.8548 4.7 1.85396 4.7 1.85342 4.7C1.85315 4.7 1.85298 4.7 1.85288 4.7C1.85284 4.7 2.65253 5.49941 1.85408 6.3C1.85314 6.3 1.85296 6.3 1.85632 6.3C1.86608 6.3 1.89511 6.3 1.94477 6.3C2.04406 6.3 2.22573 6.3 2.50031 6.29999L2.50031 4.69999ZM7.05028 5.49994V4.16661H5.45028V5.49994H7.05028ZM7.91695 3.29994H12.0836V1.69994H7.91695V3.29994ZM12.9503 4.16661V5.49994H14.5503V4.16661H12.9503ZM12.0836 3.29994C12.5623 3.29994 12.9503 3.68796 12.9503 4.16661H14.5503C14.5503 2.8043 13.4459 1.69994 12.0836 1.69994V3.29994ZM7.05028 4.16661C7.05028 3.68796 7.4383 3.29994 7.91695 3.29994V1.69994C6.55465 1.69994 5.45028 2.8043 5.45028 4.16661H7.05028ZM2.50031 6.29999C4.70481 6.29998 6.40335 6.29998 8.1253 6.29997C9.84725 6.29996 11.5458 6.29995 13.7503 6.29994L13.7503 4.69994C11.5458 4.69995 9.84724 4.69996 8.12529 4.69997C6.40335 4.69998 4.7048 4.69998 2.50031 4.69999L2.50031 6.29999ZM13.7503 6.29994L17.5003 6.29999L17.5003 4.69999L13.7503 4.69994L13.7503 6.29994ZM7.70029 9.24997V13.75H9.30029V9.24997H7.70029ZM10.7004 9.24997V13.75H12.3004V9.24997H10.7004Z" fill="#F87171"></path>
                                            </svg>
                                        </button>
                                        <button className="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-black flex item-center">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="stroke-black group-hover:stroke-white" d="M10.0161 14.9897V15.0397M10.0161 9.97598V10.026M10.0161 4.96231V5.01231" stroke="black" stroke-width="2.5" stroke-linecap="round"></path>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>



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

export default SuppliersTable;
