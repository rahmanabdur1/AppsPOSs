"use client"

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler, } from "react-hook-form";
import { Text, Box, Button, } from "rizzui"; // Removed Input, using CustomInput
import { Trash2, Plus } from "lucide-react";
import CustomInput from "@/components/CustomInput";
// Schema for form validation
const schema = z.object({
  customerId: z.string().min(1, { message: "Customer ID is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  firstName: z.string().min(1, { message: "First Name is required" }),
  lastName: z.string().min(1, { message: "Last Name is required" }),
  amount: z.number().min(1, { message: "Amount is required" }),
  company: z.string().min(1, { message: "Company is required" }),
  mobileNumber: z.string().min(10, { message: "Mobile Number is required" }),
  phoneNumber: z.string().min(10, { message: "Phone Number is required" }),
  additionalEmails: z.array(z.string().email({ message: "Invalid email" })).optional(),
  additionalMobileNumbers: z.array(z.string().min(10, { message: "Invalid Mobile Number" })).optional(),
  additionalPhoneNumbers: z.array(z.string().min(10, { message: "Invalid Phone Number" })).optional(),
  faxNumber: z.string().min(10, { message: "Fax Number is required" }).optional(),
});

type SchemaType = z.infer<typeof schema>;

export default function RizzUIForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<SchemaType>({
    defaultValues: { company: "", additionalEmails: [], additionalMobileNumbers: [], additionalPhoneNumbers: [] },
    resolver: zodResolver(schema),
  });

  // State for additional fields
  const [additionalEmails, setAdditionalEmails] = useState<string[]>([]);
  const [additionalMobileNumbers, setAdditionalMobileNumbers] = useState<string[]>([]);
  const [additionalPhoneNumbers, setAdditionalPhoneNumbers] = useState<string[]>([]);

  // Functions to add/remove fields
  const addEmailField = () => {
    if (additionalEmails.length < 3) setAdditionalEmails([...additionalEmails, ""]);
  };

  const removeEmailField = (index: number) => {
    setAdditionalEmails(additionalEmails.filter((_, i) => i !== index));
  };

  const addMobileField = () => {
    if (additionalMobileNumbers.length < 3) setAdditionalMobileNumbers([...additionalMobileNumbers, ""]);
  };

  const removeMobileField = (index: number) => {
    setAdditionalMobileNumbers(additionalMobileNumbers.filter((_, i) => i !== index));
  };

  const addPhoneField = () => {
    if (additionalPhoneNumbers.length < 3) setAdditionalPhoneNumbers([...additionalPhoneNumbers, ""]);
  };

  const removePhoneField = (index: number) => {
    setAdditionalPhoneNumbers(additionalPhoneNumbers.filter((_, i) => i !== index));
  };

  const onSubmit: SubmitHandler<SchemaType> = (data) => {
    console.log("Submitted data", {
      ...data,
      additionalEmails,
      additionalMobileNumbers,
      additionalPhoneNumbers,
    });
  };

  return (
    <div className="w-full mb-10 ">
      <form noValidate onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-y-6 items-end">
        <Text className="font-semibold mb-4">New Customer</Text>
        <div>
          <Box className="border border-muted rounded-md size-24 shadow" />
        </div>
        {/* Customer ID Input */}
        <div>
          <CustomInput
            label="Customer ID"
            type="text"
            placeholder="Enter Customer ID"
            {...register("customerId")}
            error={errors.customerId?.message}
          />
        </div>

        {/* First and Last Name */}
        <div className="grid grid-cols-2 gap-6">
          <CustomInput
            label="First Name"
            type="text"
            placeholder="John"
            {...register("firstName")}
            error={errors.firstName?.message}
          />
          <CustomInput
            label="Last Name"
            type="text"
            {...register("lastName")}
            placeholder="Doe"
            error={errors.lastName?.message}
          />
        </div>

        {/* Email Field */}
        <div className="flex items-center space-x-2">
          <CustomInput
            type="email"
            label="E-mail Address"
            {...register("email")}
            placeholder="john.doe@example.com"
            error={errors.email?.message}
          />
          {additionalEmails.length < 3 && (
            <button onClick={addEmailField} type="button">
              <Plus size={18} />
            </button>
          )}
        </div>

        {/* Additional Emails */}
        {additionalEmails.map((_, index) => (
          <div key={index} className="flex items-center w-full space-x-2">
            <CustomInput
              type="email"
              label="E-mail Address"
              placeholder="Additional email"
              value={additionalEmails[index]}
              onChange={(e) => {
                const newEmails = [...additionalEmails];
                newEmails[index] = e.target.value;
                setAdditionalEmails(newEmails);
              }}

            />
            <button onClick={() => removeEmailField(index)} type="button">
              <Trash2 size={18} />
            </button>
          </div>
        ))}

        {/* Mobile Number Field */}
        <div className="flex items-center space-x-2">
          <CustomInput
            type="text"
            label="Mobile Number"
            placeholder="Enter mobile number"
            {...register("mobileNumber")}
            error={errors.mobileNumber?.message}
          />
          {additionalMobileNumbers.length < 3 && (
            <button onClick={addMobileField} type="button" className="group border rounded px-[7px] py-[7px] flex items-center bg-orange-500 hover:bg-orange-400">
              <Plus className='text-white' size={18} />
            </button>
          )}
        </div>

        {/* Additional Mobile Numbers */}
        {additionalMobileNumbers.map((_, index) => (
          <div key={index} className="flex items-center w-full space-x-2">
            <CustomInput
              type="text" label="E-mail Address"

              placeholder="Additional mobile number"
              value={additionalMobileNumbers[index]}
              onChange={(e) => {
                const newNumbers = [...additionalMobileNumbers];
                newNumbers[index] = e.target.value;
                setAdditionalMobileNumbers(newNumbers);
              }}

            />
            <button onClick={() => removeMobileField(index)} type="button">
              <Trash2 size={18} />
            </button>
          </div>
        ))}

        {/* Phone Number Field */}
        <div className="flex items-center space-x-2">
          <CustomInput
            type="text"
            label="Phone Number"
            placeholder="Enter phone number"
            {...register("phoneNumber")}
            error={errors.phoneNumber?.message}
          />
          {additionalPhoneNumbers.length < 3 && (
            <button onClick={addPhoneField} type="button" className="group border rounded px-[7px] py-[7px] flex items-center bg-orange-500 hover:bg-orange-400">
              <Plus className='text-white font-bold' size={18} />
            </button>
          )}
        </div>

        {/* Additional Phone Numbers */}
        {additionalPhoneNumbers.map((_, index) => (
          <div key={index} className="flex items-center w-full space-x-2">
            {/* Input Field (90%) */}
            <div className="w-[90%]">
              <CustomInput
                type="text"
                placeholder="Additional phone number"
                label="Phone Number"
                value={additionalPhoneNumbers[index]}
                onChange={(e) => {
                  const newNumbers = [...additionalPhoneNumbers];
                  newNumbers[index] = e.target.value;
                  setAdditionalPhoneNumbers(newNumbers);
                }}
              />
            </div>

            {/* Buttons (10%) */}
            <div className="flex w-[10%] space-x-1">
              {/* Add Button */}
              <button
                onClick={addPhoneField}
                type="button"
                className="border rounded px-[7px] py-[7px] flex items-center bg-orange-500 hover:bg-orange-400 transition-all"
              >
                <Plus className="text-white font-bold" size={18} />
              </button>

              {/* Remove Button */}
              <button
                onClick={() => removePhoneField(index)}
                className="border rounded px-[7px] py-[7px] flex items-center bg-orange-500 hover:bg-orange-400 transition-all"
              >
                <Trash2 className="w-4 h-auto text-gray-50" />
              </button>
            </div>
          </div>
        ))}

        {/* Fax Number */}
        <div>
          <CustomInput
            type="text"
            label="Fax Number"
            placeholder="Fax Number"
            {...register("faxNumber")}
            error={errors.faxNumber?.message}
          />
        </div>

        <Button type="submit" className="w-full mt-2">
          Submit
        </Button>
      </form>
    </div>
  );
}
