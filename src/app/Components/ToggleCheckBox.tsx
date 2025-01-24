import React, { useState } from 'react';

// Define the ListItem type with customer fields
type ListItem = {
  id: string;
  label: string;
  checked: boolean;
};

const ToggleCheckbox = () => {
  const [customers, setCustomers] = useState<ListItem[]>([
    { id: '1', label: 'Customer ID', checked: false },
  { id: '2', label: 'Customer (Image, Name, Designation)', checked: false },
  { id: '3', label: 'Company', checked: false },
  { id: '4', label: 'Designation', checked: false },
  { id: '5', label: 'Department', checked: false },
  { id: '6', label: 'Industry', checked: false },
  { id: '7', label: 'Email', checked: false },
  { id: '8', label: 'Mobile', checked: false },
  { id: '9', label: 'Phone', checked: false },
  { id: '10', label: 'Fax', checked: false },
  { id: '11', label: 'Country:-', checked: false },
  { id: '12', label: 'Address:-', checked: false },
  { id: '13', label: 'City:-', checked: false },
  { id: '14', label: 'State:-', checked: false },
  { id: '15', label: 'ZIP Code:-', checked: false },
  { id: '16', label: 'Tax Number:-', checked: false },
  { id: '17', label: 'GST Number:-', checked: false },
  { id: '18', label: 'Customer Type', checked: false },
  { id: '19', label: 'Sell Type', checked: false },
  { id: '20', label: 'Total', checked: false },
  { id: '21', label: 'Paid', checked: false },
  { id: '22', label: 'Due', checked: false },
  { id: '23', label: 'Create By', checked: false },
  { id: '24', label: 'Create Date', checked: false },
  { id: '25', label: 'Website', checked: false },
  { id: '26', label: 'Billing Address', checked: false },
  { id: '27', label: 'Shipping Address', checked: false },
  { id: '28', label: 'Status', checked: false },
  { id: '29', label: 'Action', checked: false },
  ]);

  const handleItemChange = (id: string, checked: boolean) => {
    setCustomers((prev) =>
      prev.map((customer) =>
        customer.id === id ? { ...customer, checked } : customer
      )
    );
  };

  return (
    <ul className="w-full flex gap-2 mb-10 flex-col">
      {customers.map((item) => (
        <li key={item.id}>
          <label
            htmlFor={`checkbox-${item.id}`}
            className="flex items-center p-3 w-full bg-white border border-gray-200 rounded-lg text-sm focus-within:border-orange-400 focus-within:ring-1 focus-within:ring-orange-400 hover:ring-1 hover:ring-orange-300 hover:border-orange-300 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
          >
            <div className="relative flex items-center">
              <input
                type="checkbox"
                id={`checkbox-${item.id}`}
                className="appearance-none h-5 w-5 rounded-full border-gray-300 bg-gray-100 checked:bg-orange-500 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:bg-neutral-800 dark:border-neutral-700"
                checked={item.checked}
                onChange={(e) => handleItemChange(item.id, e.target.checked)}
              />
              {item.checked && (
                <svg
                  className="absolute inset-0 w-5 h-5 text-white m-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </div>
            <span className="ml-3 text-sm text-gray-500 dark:text-neutral-400">
              {item.label}
            </span>
          </label>
        </li>
      ))}
    </ul>
  );
};

export default ToggleCheckbox;
