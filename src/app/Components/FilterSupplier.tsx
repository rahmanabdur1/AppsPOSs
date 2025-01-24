import React from 'react';

const FilterCustomer = () => {
    return (
        <>
            <form className="mb-6">


                {/* Company */}
                <div className="mb-6 relative">
                    <label
                        htmlFor="company"
                        className="block mb-[6px] text-[15px] font-medium text-gray-700 dark:text-white"
                    >
                        Company
                    </label>

                    <input
                        type="text"
                        id="company"
                        className="text-sm h-11  border text-gray-500  rounded px-10 outline-none py-2 w-full focus:ring-1 focus:ring-orange-400 hover:ring-1 hover:ring-orange-300 focus:border-orange-400 hover:border-orange-300 pl-10"
                        placeholder="Company Name"
                    />
                </div>

                {/* Designation */}
                <div className="mb-6 relative">
                    <label
                        htmlFor="designation"
                        className="block mb-[6px] text-[15px] font-medium text-gray-700 dark:text-white"
                    >
                        Designation
                    </label>
                    <input
                        type="text"
                        id="designation"
                        className="text-sm h-11 text-gray-500  border rounded px-10 outline-none py-2 w-full focus:ring-1 focus:ring-orange-400 hover:ring-1 hover:ring-orange-300 focus:border-orange-400 hover:border-orange-300 pl-10"
                        placeholder="Designation"
                    />
                </div>

                {/* Department */}
                <div className="mb-6 relative">
                    <label
                        htmlFor="department"
                        className="block mb-[6px] text-[15px] font-medium text-gray-700 dark:text-white"
                    >
                        Department
                    </label>
                    <input
                        type="text"
                        id="department"
                        className="text-sm h-11 text-gray-500 border rounded px-10 outline-none py-2 w-full focus:ring-1 focus:ring-orange-400 hover:ring-1 hover:ring-orange-300 focus:border-orange-400 hover:border-orange-300 pl-10"
                        placeholder="Department"
                    />
                </div>

                {/* Industry */}
                <div className="mb-6 relative">
                    <label
                        htmlFor="industry"
                        className="block mb-[6px] text-[15px] font-medium text-gray-700 dark:text-white"
                    >
                        Industry
                    </label>
                    <input
                        type="text"
                        id="industry"
                        className="text-sm h-11 text-gray-500 border rounded px-10 outline-none py-2 w-full focus:ring-1 focus:ring-orange-400 hover:ring-1 hover:ring-orange-300 focus:border-orange-400 hover:border-orange-300 pl-10"
                        placeholder="Industry"
                    />
                </div>

                {/* Country */}
                <div className="mb-6 relative">
                    <label
                        htmlFor="country"
                        className="block mb-[6px] text-[15px] font-medium text-gray-700 dark:text-white"
                    >
                        Country
                    </label>
                    <input
                        type="text"
                        id="country"
                        className="text-sm h-11 text-gray-500 border rounded px-10 outline-none py-2 w-full focus:ring-1 focus:ring-orange-400 hover:ring-1 hover:ring-orange-300 focus:border-orange-400 hover:border-orange-300 pl-10"
                        placeholder="Country"
                    />
                </div>

                {/* City */}
                <div className="mb-6 relative">
                    <label
                        htmlFor="city"
                        className="block mb-[6px] text-[15px] font-medium text-gray-700 dark:text-white"
                    >
                        City
                    </label>
                    <input
                        type="text"
                        id="city"
                        className="text-sm h-11 text-gray-500 border rounded px-10 outline-none py-2 w-full focus:ring-1 focus:ring-orange-400 hover:ring-1 hover:ring-orange-300 focus:border-orange-400 hover:border-orange-300 pl-10"
                        placeholder="City"
                    />
                </div>

                {/* State */}
                <div className="mb-6 relative">
                    <label
                        htmlFor="state"
                        className="block mb-[6px] text-[15px] font-medium text-gray-700 dark:text-white"
                    >
                        State
                    </label>
                    <input
                        type="text"
                        id="state"
                        className="text-sm h-11 text-gray-500 border rounded px-10 outline-none py-2 w-full focus:ring-1 focus:ring-orange-400 hover:ring-1 hover:ring-orange-300 focus:border-orange-400 hover:border-orange-300 pl-10"
                        placeholder="State"
                    />
                </div>

     
                {/* Create By */}
                <div className="mb-6 relative">
                    <label
                        htmlFor="createBy"
                        className="block mb-[6px] text-[15px] font-medium text-gray-700 dark:text-white"
                    >
                        Create By
                    </label>
                    <input
                        type="text"
                        id="createBy"
                        className="text-sm h-11 text-gray-500 border rounded px-10 outline-none py-2 w-full focus:ring-1 focus:ring-orange-400 hover:ring-1 hover:ring-orange-300 focus:border-orange-400 hover:border-orange-300 pl-10"
                        placeholder="Create By"
                    />
                </div>
                {/* Create Date */}
                {/* Create Date */}
                <div className="mb-6 relative">
                    <label
                        htmlFor="createDate"
                        className="block mb-[6px] text-[15px] font-medium text-gray-700 dark:text-white"
                    >
                        Create Date
                    </label>

                    <div id="date-range-picker"  className="flex items-center">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input
                                id="datepicker-range-start"
                                name="start"
                                type="date"
                                className="text-sm h-11 text-gray-900 border rounded px-10 outline-none py-2 w-full focus:ring-1 focus:ring-orange-400 hover:ring-1 hover:ring-orange-300 focus:border-orange-400 hover:border-orange-300 pl-10"
                                placeholder="Select start date"
                            />
                        </div>

                        <span className="mx-4 text-gray-500">to</span>

                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </div>
                            <input
                                id="datepicker-range-end"
                                name="end"
                                type="date"
                                className="text-sm h-11 text-gray-900 border rounded px-10 outline-none py-2 w-full focus:ring-1 focus:ring-orange-400 hover:ring-1 hover:ring-orange-300 focus:border-orange-400 hover:border-orange-300 pl-10"
                                placeholder="Select end date"
                            />
                        </div>
                    </div>
                </div>



                {/* Status */}
                <div className="mb-6 relative">
                    <label
                        htmlFor="status"
                        className="block mb-[6px] text-[15px] font-medium text-gray-700 dark:text-white"
                    >
                        Status
                    </label>
                    <select
                        id="status"
                        data-hs-select='{
            "placeholder": "Select status",
            "toggleTag": "<button type=\"button\" aria-expanded=\"false\"><span class=\"me-2\" data-icon></span><span class=\"text-gray-800 dark:text-neutral-200\" data-title></span></button>",
            "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 ps-4 pe-9 flex gap-x-2 text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600",
            "dropdownClasses": "mt-2 max-h-72 p-1 space-y-0.5 z-20 w-full bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
            "optionClasses": "py-2 px-3 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
            "optionTemplate": "<div class=\"flex items-center\"><div class=\"me-2\" data-icon></div><div><div class=\"hs-selected:font-semibold text-sm text-gray-800 dark:text-neutral-200\" data-title></div></div><div class=\"ms-auto\"><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-4 text-blue-600\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M12.736 3.97a.733.733 0 0 1 1.047 0c..\"></svg></span></div></div>"
        }'
                        className="text-sm h-11 text-gray-500 border rounded-md px-10 outline-none py-2 w-full focus:ring-1 focus:ring-orange-400 hover:ring-1 hover:ring-orange-300 focus:border-orange-400 hover:border-orange-300 pl-10"
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>

                    </select>
                </div>

                {/* Clear Button */}
                <div className="mb-6 text-center">
                    <button
                        type="button"
                        className="bg-gray-500 text-white py-2 px-4 rounded-lg flex items-center w-full justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="mr-2"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.293 4.293a1 1 0 0 0-1.414 0L8 6.586 5.121 3.707a1 1 0 0 0-1.414 1.414L6.586 8 3.707 10.879a1 1 0 0 0 1.414 1.414L8 9.414l2.879 2.879a1 1 0 0 0 1.414-1.414L9.414 8l2.879-2.879a1 1 0 0 0 0-1.414z"
                            />
                        </svg>
                        Clear
                    </button>
                </div>

                {/* Show Result Button */}
                <div className="mb-6 text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center justify-center w-full"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="mr-2"
                            viewBox="0 0 16 16"
                        >
                            <path d="M7 8V3.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V8h4a.5.5 0 0 1 .354.854l-3 3a.5.5 0 0 1-.708 0l-3-3A.5.5 0 0 1 7 8z" />
                        </svg>
                        Show Result
                    </button>
                </div>
            </form>
        </>
    );
};

export default FilterCustomer;
