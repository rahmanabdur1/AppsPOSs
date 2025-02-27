"use client"

import Link from "next/link";
import React, { useState } from "react";
interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isCustomerOpen, setCustomerOpen] = useState(false);
  const [isSalesOpen, setSalesOpen] = useState(false);
  const [isExpenseOpen, setExpenseOpen] = useState(false);
  const [isSupplierOpen, setSupplierOpen] = useState(false); // State for Supplier dropdown

  const toggleDropdown = (type: string) => {
    if (type === "customer") {
      setCustomerOpen(!isCustomerOpen);
    } else if (type === "sales") {
      setSalesOpen(!isSalesOpen);
    } else if (type === "expense") {
      setExpenseOpen(!isExpenseOpen);
    } else if (type === "supplier") {
      setSupplierOpen(!isSupplierOpen); // Toggle Supplier dropdown
    }
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={` your-default-styles ${className || ''}`}>
      {/* Mobile Toggle Button */}
      <button
        className="xl:hidden fixed top-4 left-4 z-50 bg-gray-800 text-white p-2 rounded-full"
        onClick={toggleSidebar}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 z-40 w-[270px] h-full bg-gray-50 dark:bg-gray-800 transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } xl:translate-x-0`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                href="/"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>

            {/* Customer Dropdown */}
            <li>
              <button
                type="button"
                onClick={() => toggleDropdown("customer")}
                className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Customer</span>
                <svg
                  className={`w-3 h-3 transform transition-transform ${
                    isCustomerOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                className={`overflow-hidden transition-all duration-300 ${
                  isCustomerOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                <li>
                  <Link
                    href="/customer/add-customers"
                    className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Add Customer
                  </Link>
                </li>
                <li>
                  <Link
                    href="/customer/all-customers"
                    className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    All Customers
                  </Link>
                </li>
              </ul>
            </li>

            {/* Expense Dropdown */}
            <li>
              <button
                type="button"
                onClick={() => toggleDropdown("expense")}
                className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Expense</span>
                <svg
                  className={`w-3 h-3 transform transition-transform ${
                    isExpenseOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                className={`overflow-hidden transition-all duration-300 ${
                  isExpenseOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                <li>
                  <Link
                    href="/expense/add-expense"
                    className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    New Expense
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expense/all-expenses"
                    className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    All Expenses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/expense/expenseCategory"
                    className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    All Categories
                  </Link>
                </li>
              </ul>
            </li>

            {/* Sales Dropdown */}
            <li>
              <button
                type="button"
                onClick={() => toggleDropdown("sales")}
                className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L10 6H6L8 10H10L8 14L10 18H12L14 14L12 10H14L16 6H12Z" />
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Sales</span>
                <svg
                  className={`w-3 h-3 transform transition-transform ${
                    isSalesOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                className={`overflow-hidden transition-all duration-300 ${
                  isSalesOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                <li>
                  <Link
                    href="/Sales/new-sale"
                    className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    New Sale
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Sales/all-sales"
                    className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    All Sales
                  </Link>
                </li>
              </ul>
            </li>

            {/* Supplier Dropdown */}
            <li>
              <button
                type="button"
                onClick={() => toggleDropdown("supplier")}
                className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L10 6H6L8 10H10L8 14L10 18H12L14 14L12 10H14L16 6H12Z" />
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Supplier</span>
                <svg
                  className={`w-3 h-3 transform transition-transform ${
                    isSupplierOpen ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                className={`overflow-hidden transition-all duration-300 ${
                  isSupplierOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                <li>
                  <Link
                    href="/supplier/add-supplier"
                    className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Add Supplier
                  </Link>
                </li>
                <li>
                  <Link
                    href="/supplier/all-suppliers"
                    className="flex items-center w-full p-2 pl-11 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    All Suppliers
                  </Link>
                </li>
              </ul>
            </li>

              {/* Login and Register Links */}
              <li>
              <Link
                href="/login"
                className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                  <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Login</span>
              </Link>
            </li>

            <li>
              <Link
                href="/register"
                className="flex items-center w-full p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                  <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Register</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
