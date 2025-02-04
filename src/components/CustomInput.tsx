// import React from 'react';
// import { UseFormRegister, FieldValues, Path } from 'react-hook-form';

// interface CustomInputProps<T extends FieldValues> {
//   label: string;
//   type: string;
//   placeholder: string;
//   labelClassName?: string;
//   inputClassName?: string;
//   register: UseFormRegister<T>;
//   error?: string; // Error message to be shown if validation fails
//   name: Path<T>; // Name of the field to register the input
// }

// const CustomInput = <T extends FieldValues>({
//   label,
//   type,
//   placeholder,
//   labelClassName,
//   inputClassName,
//   register,
//   error,
//   name,
//   ...rest
// }: CustomInputProps<T>) => {
//   return (
//     <div className="mb-4">
//       {/* Label */}
//       {label && <label className={`${labelClassName} block text-sm font-medium`}>{label}</label>}

//       {/* Input Field */}
//       <input
//         type={type}
//         placeholder={placeholder}
//         className={`${inputClassName} mt-1 w-full px-3 py-2 rounded-md text-sm focus:outline-none`}
//         {...register(name)}
//         {...rest} // spread other props like validation rules
//       />

//       {/* Error Message */}
//       {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
//     </div>
//   );
// };

// export default CustomInput;


import React from 'react';

interface CustomInputProps {
  label: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="w-full">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}  
        className="w-full px-3 py-2 mt-1 text-sm border-2 rounded-md focus:outline-none   focus:border-orange-300"
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
};

export default CustomInput;
