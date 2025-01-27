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
  min?: number;
  max?: number;
  value?: string;
}

function Input({
  id,
  placeholder,
  disabled,
  type,
  required,
  errors,
  value,
  register,

  min = 0,
  max,
}: InputProps) {
  return (
    <div className="flex flex-col">
      {errors[id] && typeof errors[id]?.message === "string" && (
        <span className="text-red-500 text-xs mt-1">{errors[id]?.message}</span>
      )}
      <input
        id={id}
        placeholder={placeholder}
        min={min}
        max={max}
        disabled={disabled}
        value={value}
        type={type}
        {...register(id, {
          required: required && `${placeholder} is required`,
        })}
        className={`w-full h-12 my-3 p-3 border outline-none rounded-md text-xs  ${
          errors[id] ? "border-red-500" : "border-gray-300"
        }`}
      />
    </div>
  );
}

export default Input;
