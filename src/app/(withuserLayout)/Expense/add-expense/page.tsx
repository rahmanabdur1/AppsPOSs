"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

// Define the form data type
interface ExpenseFormData {
  expenseId: string;
  expenseDate: string;
  expenseFor: string;
  expenseAmount: number;
  expenseBy: string;
  expenseCategory: string;
  expenseReferenceNo: string;
  expenseNote: string;
}

const ExpenseForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>();

  const onSubmit: SubmitHandler<ExpenseFormData> = (data) => {
    console.log("Expense Data Submitted:", data);
    reset();
  };

  return (
    <div className="w-full  p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4">Add Expense</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Expense ID */}
        <div className="mb-4">
          <label htmlFor="expenseId" className="block text-sm font-medium">
            Expense ID
          </label>
          <input
            type="text"
            id="expenseId"
            {...register("expenseId", { required: "Expense ID is required" })}
            className="mt-1 block w-full p-2 border rounded-md"
          />
          {errors.expenseId && (
            <p className="text-red-500 text-sm">{errors.expenseId.message}</p>
          )}
        </div>

        {/* Expense Date */}
        <div className="mb-4">
          <label htmlFor="expenseDate" className="block text-sm font-medium">
            Expense Date
          </label>
          <input
            type="date"
            id="expenseDate"
            {...register("expenseDate", { required: "Expense Date is required" })}
            className="mt-1 block w-full p-2 border rounded-md"
          />
          {errors.expenseDate && (
            <p className="text-red-500 text-sm">{errors.expenseDate.message}</p>
          )}
        </div>

        {/* Expense For */}
        <div className="mb-4">
          <label htmlFor="expenseFor" className="block text-sm font-medium">
            Expense For
          </label>
          <input
            type="text"
            id="expenseFor"
            {...register("expenseFor", { required: "Expense For is required" })}
            className="mt-1 block w-full p-2 border rounded-md"
          />
          {errors.expenseFor && (
            <p className="text-red-500 text-sm">{errors.expenseFor.message}</p>
          )}
        </div>

        {/* Expense Amount */}
        <div className="mb-4">
          <label htmlFor="expenseAmount" className="block text-sm font-medium">
            Expense Amount
          </label>
          <input
            type="number"
            id="expenseAmount"
            {...register("expenseAmount", {
              required: "Expense Amount is required",
              valueAsNumber: true,
            })}
            className="mt-1 block w-full p-2 border rounded-md"
          />
          {errors.expenseAmount && (
            <p className="text-red-500 text-sm">{errors.expenseAmount.message}</p>
          )}
        </div>

        {/* Expense By */}
        <div className="mb-4">
          <label htmlFor="expenseBy" className="block text-sm font-medium">
            Expense By
          </label>
          <input
            type="text"
            id="expenseBy"
            {...register("expenseBy", { required: "Expense By is required" })}
            className="mt-1 block w-full p-2 border rounded-md"
          />
          {errors.expenseBy && (
            <p className="text-red-500 text-sm">{errors.expenseBy.message}</p>
          )}
        </div>

        {/* Expense Category */}
        <div className="mb-4">
          <label htmlFor="expenseCategory" className="block text-sm font-medium">
            Expense Category
          </label>
          <input
            type="text"
            id="expenseCategory"
            {...register("expenseCategory", {
              required: "Expense Category is required",
            })}
            className="mt-1 block w-full p-2 border rounded-md"
          />
          {errors.expenseCategory && (
            <p className="text-red-500 text-sm">
              {errors.expenseCategory.message}
            </p>
          )}
        </div>

        {/* Expense Reference No. */}
        <div className="mb-4">
          <label htmlFor="expenseReferenceNo" className="block text-sm font-medium">
            Expense Reference No.
          </label>
          <input
            type="text"
            id="expenseReferenceNo"
            {...register("expenseReferenceNo", {
              required: "Expense Reference No. is required",
            })}
            className="mt-1 block w-full p-2 border rounded-md"
          />
          {errors.expenseReferenceNo && (
            <p className="text-red-500 text-sm">
              {errors.expenseReferenceNo.message}
            </p>
          )}
        </div>

        {/* Expense Note */}
        <div className="mb-4">
          <label htmlFor="expenseNote" className="block text-sm font-medium">
            Expense Note
          </label>
          <textarea
            id="expenseNote"
            {...register("expenseNote")}
            className="mt-1 block w-full p-2 border rounded-md"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
