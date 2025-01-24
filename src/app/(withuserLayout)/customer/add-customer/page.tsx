"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "@/lib/hooks";
import { addCustomer } from "@/lib/features/customerSlice";

interface FormFields {
  createdDate: string;
  customerID: string;
  firstName: string;
  lastName: string;
  companyName: string;
  designation: string;
  department: string;
  industry: string;
  email: string[];
  mobileNumber: string[];
  phoneNumber: string[];
  fax?: string;
  country: string;
  id: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  taxNumber?: string;
  gstNumber?: string;
  previousDue?: string;
  customerType: string;
  sellType: string;
  image: string;
  paymentTerms: string;
  website?: string;
  alternativeContact?: {
    name?: string;
    phone?: string;
    email?: string;
  };
  bankDetails?: {
    bankName?: string;
    accountName?: string;
    accountNumber?: string;
    routingNumber?: string;
    branchName?: string;
    swiftCode?: string;
  };
  billingAddress?: string;
  shippingAddress?: string;
}

const AddCustomer: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    setValue, 
    formState: { errors },
  } = useForm<FormFields>();
  const [emailFields, setEmailFields] = useState<string[]>([""]);
  const [mobileNumberFields, setMobileNumberFields] = useState<string[]>([""]);
  const [phoneNumberFields, setPhoneNumberFields] = useState<string[]>([""]);

  const resetForm = () => {
    reset();
    setEmailFields([""]);
    setMobileNumberFields([""]);
    setPhoneNumberFields([""]);
  };

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    const customerData = {
      ...data,
      createdDate: data.createdDate || new Date().toISOString(),
    };

  
    dispatch(addCustomer(customerData));
 
    resetForm();
    router.push("/customer/all-customers");
  };

  const handleAddEmailField = () => {
    setEmailFields([...emailFields, ""]);
  };

  const handleRemoveEmailField = (index: number) => {
    const updatedFields = emailFields.filter((_, i) => i !== index);
    setEmailFields(updatedFields);
    setValue("email", updatedFields); // Update the value in react-hook-form
  };

  const handleEmailChange = (index: number, value: string) => {
    const updatedFields = [...emailFields];
    updatedFields[index] = value;
    setEmailFields(updatedFields);
    setValue("email", updatedFields); // Update the value in react-hook-form
  };

  const handleAddMobileField = () => {
    setMobileNumberFields([...mobileNumberFields, ""]);
  };

  const handleRemoveMobileField = (index: number) => {
    const updatedFields = mobileNumberFields.filter((_, i) => i !== index);
    setMobileNumberFields(updatedFields);
    setValue("mobileNumber", updatedFields); // Update the value in react-hook-form
  };

  const handleMobileChange = (index: number, value: string) => {
    const updatedFields = [...mobileNumberFields];
    updatedFields[index] = value;
    setMobileNumberFields(updatedFields);
    setValue("mobileNumber", updatedFields); // Update the value in react-hook-form
  };

  const handleAddPhoneField = () => {
    setPhoneNumberFields([...phoneNumberFields, ""]);
  };

  const handleRemovePhoneField = (index: number) => {
    const updatedFields = phoneNumberFields.filter((_, i) => i !== index);
    setPhoneNumberFields(updatedFields);
    setValue("phoneNumber", updatedFields); // Update the value in react-hook-form
  };

  const handlePhoneChange = (index: number, value: string) => {
    const updatedFields = [...phoneNumberFields];
    updatedFields[index] = value;
    setPhoneNumberFields(updatedFields);
    setValue("phoneNumber", updatedFields); // Update the value in react-hook-form
  };


  return (
    <div className="w-full p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Customer Information Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-12">
          {/* Customer ID */}
          <div className=" flex flex-col gap-4">
            <div>
              <label htmlFor="customerID" className="block mb-2 text-sm font-medium">Customer ID</label>
              <input
                type="text"
                id="customerID"
                {...register("customerID", { required: "Customer ID is required" })}
                className={`bg-gray-50 border ${errors.customerID ? "border-red-500" : "border-gray-300"} rounded-lg text-sm w-full p-2.5`}
                placeholder="Enter Customer ID"
              />
              {errors.customerID && <p className="text-red-500 text-sm mt-1">{errors.customerID.message}</p>}
            </div>

            <div>
              <label htmlFor="lastName" className="block mb-2 text-sm font-medium">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter Last Name"
                {...register("lastName")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>

            <div>
              <label htmlFor="designation" className="block mb-2 font-medium text-sm">Designation</label>
              <input
                type="text"
                id="designation"
                placeholder="Enter Designation"
                {...register("designation")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>
            <div>
              <label htmlFor="industry" className="block mb-2 font-medium text-sm">Industry</label>
              <input
                type="text"
                id="industry"
                placeholder="Enter Industry"
                {...register("industry")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>


            <div>
              <label htmlFor="country" className="block mb-2 font-medium text-sm">Country</label>
              <input
                type="text"
                id="country"
                placeholder="Enter Country"
                {...register("country")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>

            <div>
              <label htmlFor="fax" className="block mb-2 font-medium text-sm">Fax</label>
              <input
                type="text"
                id="fax"
                placeholder="Enter Fax"
                {...register("fax")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>

            <div>
              <label htmlFor="address" className="block mb-2 font-medium text-sm">Address</label>
              <input
                type="text"
                id="address"
                placeholder="Enter Address"
                {...register("address")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>

            <div>
              <label htmlFor="city" className="block mb-2 font-medium text-sm">City</label>
              <input
                type="text"
                id="city"
                placeholder="Enter City"
                {...register("city")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>

            <div>
              <label htmlFor="state" className="block mb-2 font-medium text-sm">State</label>
              <input
                type="text"
                id="state"
                placeholder="Enter State"
                {...register("state")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>

            <div>
              <label htmlFor="zipCode" className="block mb-2 font-medium text-sm">ZIP Code</label>
              <input
                type="text"
                id="zipCode"
                placeholder="Enter ZIP Code"
                {...register("zipCode")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>

            <div>
              <label htmlFor="sellType" className="block mb-2 text-sm font-medium">
                Sell Type
              </label>
              <select
                id="sellType"
                {...register("sellType")}
                className={`bg-gray-50 border ${errors.sellType ? "border-red-500" : "border-gray-300"} rounded-lg text-sm w-full p-2.5`}
              >
                <option value="">Select Sell Type...</option>
                <option value="Retailer">Retailer</option>
                <option value="Wholesaler">Wholesaler</option>
                <option value="Dealer">Dealer</option>
              </select>
              {errors.sellType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.sellType?.message as string}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900">
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                {...register("image")}
                className="block w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
              />
            </div>
            <div >
              <label htmlFor="website" className="block mb-2 font-medium text-sm">Website</label>
              <input
                type="text"
                id="website"
                placeholder="Enter Website URL"
                {...register("website")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>

          </div>


          <div className=" flex flex-col  gap-4">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block mb-2 text-sm font-medium">First Name</label>
              <input
                type="text"
                id="firstName"
                {...register("firstName", { required: "First Name is required" })}
                className={`bg-gray-50 border ${errors.firstName ? "border-red-500" : "border-gray-300"} rounded-lg text-sm w-full p-2.5`}
                placeholder="Enter First Name"
              />
              {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
            </div>


            <div>
              <label htmlFor="companyName" className="block mb-2 text-sm font-medium">Company Name</label>
              <input
                type="text"
                id="companyName"
                placeholder="Enter Company Name"
                {...register("companyName")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>


            <div>
              <label htmlFor="department" className="block mb-2 font-medium text-sm">Department</label>
              <input
                type="text"
                id="department"
                placeholder="Enter Department"
                {...register("department")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>
            <div>
              <label htmlFor="department" className="block mb-2 font-medium text-sm">Department</label>
              <input
                type="text"
                id="department"
                placeholder="Enter Department"
                {...register("department")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>

            <div className="">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              {emailFields.map((email, index) => (
                <div
                  key={index}
                  className={`flex gap-2 items-center ${emailFields.length >= 2 ? "mt-3" : ""}`}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => handleEmailChange(index, e.target.value)}
                    className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-[84%] p-2.5"
                    placeholder={`Enter Email ${index + 1}`}
                  />

                  {emailFields.length > 1 && index !== 0 &&(
                    <button
                      type="button"
                      onClick={() => handleRemoveEmailField(index)}
                      className="bg-red-500 text-white rounded-lg hover:bg-red-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                      </svg>
                    </button>
                  )}

                  {index === emailFields.length - 1 && (
                    <button
                      type="button"
                      onClick={handleAddEmailField}
                      className="bg-blue-500 text-white py-2 px-2.5 rounded-lg hover:bg-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>



            <div className="">
              <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium">Phone Number</label>
              {phoneNumberFields.map((phone, index) => (
                    <div
                    key={index}
                    className={`flex gap-2 items-center ${phoneNumberFields.length >= 2 ? "mb-2" : ""}`}
                  >
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => handlePhoneChange(index, e.target.value)}
                    className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-[84%]  p-2.5"
                    placeholder={`Enter Phone Number ${index + 1}`}
                  />

                  {phoneNumberFields.length > 1 && index !== 0 && (
                    <button
                      type="button"
                      onClick={() => handleRemovePhoneField(index)}
                      className="bg-red-500 text-white  rounded-lg hover:bg-red-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                      </svg>
                    </button>
                  )}

                  {index === phoneNumberFields.length - 1 && (
                    <button
                      type="button"
                      onClick={handleAddPhoneField}
                      className="bg-blue-500 text-white py-2 px-2.5 rounded-lg hover:bg-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>







            <div className="">
              <label htmlFor="mobileNumber" className="block mb-2 text-sm font-medium">Mobile Number</label>
              {mobileNumberFields.map((mobile, index) => (
                <div
                key={index}
                className={`flex gap-2 items-center ${mobileNumberFields.length >= 2 ? "mb-2" : ""}`}
              >
                  <input
                    type="text"
                    value={mobile}
                    onChange={(e) => handleMobileChange(index, e.target.value)}
                    className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-[84%]  p-2.5"
                    placeholder={`Enter Mobile Number ${index + 1}`}
                  />

                  {mobileNumberFields.length > 1 && index !== 0 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveMobileField(index)}
                      className="bg-red-500 text-white  rounded-lg hover:bg-red-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                      </svg>
                    </button>
                  )}

                  {index === mobileNumberFields.length - 1 && (
                    <button
                      type="button"
                      onClick={handleAddMobileField}
                      className="bg-blue-500 text-white py-2 px-2.5 rounded-lg hover:bg-blue-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div>
              <label htmlFor="taxNumber" className="block mb-2 font-medium text-sm">Tax Number</label>
              <input
                type="text"
                id="taxNumber"
                placeholder="Enter Tax Number"
                {...register("taxNumber")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>

            <div>
              <label htmlFor="gstNumber" className="block mb-2 font-medium text-sm">GST Number</label>
              <input
                type="text"
                id="gstNumber"
                placeholder="Enter GST Number"
                {...register("gstNumber")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>

            <div>
              <label htmlFor="previousDue" className="block mb-2 font-medium text-sm">Previous Due</label>
              <input
                type="text"
                id="previousDue"
                placeholder="Enter Previous Due"
                {...register("previousDue")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>



            <div>
              <label htmlFor="customerType" className="block mb-2 text-sm font-medium">
                Customer Type
              </label>
              <select
                id="customerType"
                {...register("customerType")}
                className={`bg-gray-50 border ${errors.customerType ? "border-red-500" : "border-gray-300"} rounded-lg text-sm w-full p-2.5`}
              >
                <option value="">Select Customer Type...</option>
                <option value="Individual">Individual</option>
                <option value="Business">Business</option>
              </select>
              {errors.customerType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.customerType?.message as string}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="paymentTerms" className="block mb-2 font-medium text-sm">Payment Terms</label>
              <input
                type="text"
                id="paymentTerms"
                placeholder="Enter Payment Terms"
                {...register("paymentTerms")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>



          </div>

        </div>


        <div className=" mt-6">
          <h2 className="text-xl font-semibold mb-4">Optional Fields</h2>

          {/* Alternative Contact */}
          <div className="">
            <div>
              <h3 className="font-medium text-sm mb-2">Alternative Contact</h3>
              <label htmlFor="alternativeContact.name" className="block mb-2 font-medium text-sm">Name</label>
              <input
                type="text"
                id="alternativeContact.name"
                {...register("alternativeContact.name")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label htmlFor="alternativeContact.phone" className="block mb-2 font-medium text-sm mt-4">Phone</label>
              <input
                type="text"
                id="alternativeContact.phone"
                {...register("alternativeContact.phone")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
                placeholder="Enter Phone"
              />
            </div>
            <div>
              <label htmlFor="alternativeContact.email" className="block mb-2 font-medium text-sm mt-4">Email</label>
              <input
                type="email"
                id="alternativeContact.email"
                {...register("alternativeContact.email")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
                placeholder="Enter Email"
              />
            </div>
          </div>

          {/* Bank Account Details in 2-Column Grid */}
          <h3 className="font-medium text-sm mt-6">Bank Details</h3>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="bankDetails.bankName" className="block mb-2 font-medium text-sm">Bank Name</label>
              <input
                type="text"
                placeholder="Enter Bank Name"
                id="bankDetails.bankName"
                {...register("bankDetails.bankName")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>
            <div>
              <label htmlFor="bankDetails.accountName" className="block mb-2 font-medium text-sm">Account Name</label>
              <input
                type="text"
                id="bankDetails.accountName"
                placeholder="Enter Account Name"
                {...register("bankDetails.accountName")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>
            <div>
              <label htmlFor="bankDetails.accountNumber" className="block mb-2 font-medium text-sm">Account Number</label>
              <input
                type="text"
                id="bankDetails.accountNumber"
                placeholder="Enter Account Number"
                {...register("bankDetails.accountNumber")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>
            <div>
              <label htmlFor="bankDetails.routingNumber" className="block mb-2 font-medium text-sm">Routing Number</label>
              <input
                type="text"
                id="bankDetails.routingNumber"
                placeholder="Enter Routing Number"
                {...register("bankDetails.routingNumber")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>
            <div>
              <label htmlFor="bankDetails.branchName" className="block mb-2 font-medium text-sm">Branch Name</label>
              <input
                type="text"
                id="bankDetails.BranchName"
                placeholder="Enter Branch Name"
                {...register("bankDetails.branchName")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>
            <div>
              <label htmlFor="swiftCode" className="block mb-2 font-medium text-sm">SWIFT Code</label>
              <input
                type="text"
                id="bankDetails.swiftCode"
                placeholder="Enter SWIFT Code"
                {...register("bankDetails.swiftCode")}
                className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
              />
            </div>

          </div>

          <div className='mt-5'>
            <label htmlFor="billingAddress" className="block mb-2 font-medium text-sm">Billing Address</label>
            <input
              type="text"
              id="billingAddress"
              placeholder="Enter Billing Address"
              {...register("billingAddress")}
              className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
            />
          </div>

          <div>
            <label htmlFor="shippingAddress" className="block mb-2 mt-4 font-medium text-sm">Shipping Address</label>
            <input
              type="text"
              id="shippingAddress"
              placeholder="Enter Shipping Address"
              {...register("shippingAddress")}
              className="bg-gray-50 border border-gray-300 rounded-lg text-sm w-full p-2.5"
            />
          </div>

        </div>


        {/* Submit Button */}
        <div className="col-span-2 mt-4">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 w-full"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCustomer;
