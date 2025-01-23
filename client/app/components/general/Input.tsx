"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  placeholder: string;
  disabled?: boolean;
  type: string;
  required?: boolean;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
}

function Input({
  id,
  placeholder,
  disabled,
  type,
  required,
  errors,
  register,
}: InputProps) {
  return (
    <div className="flex flex-col">
      <input
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        required={required}
        {...register(id, { required })}
        className={`h-12 my-3 p-3 border outline-none rounded-md text-xs ${
          errors[id] ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors[id] && typeof errors[id]?.message === "string" && (
        <span className="text-red-500 text-sm mt-1">{errors[id]?.message}</span>
      )}
    </div>
  );
}

export default Input;
