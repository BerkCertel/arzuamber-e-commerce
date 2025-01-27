"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface RichTextBoxProps {
  id: string;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
  errors: FieldErrors;
  register: UseFormRegister<FieldValues>;
}

function RichTextBox({
  id,
  placeholder,
  disabled,
  required,
  errors,
  register,
}: RichTextBoxProps) {
  return (
    <div className="flex flex-col">
      <textarea
        id={id}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        {...register(id, {
          required: required && `${placeholder} is required`,
        })}
        className={`h-20 my-3 p-3 border outline-none rounded-md text-xs resize-none  ${
          errors[id] ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors[id] && typeof errors[id]?.message === "string" && (
        <span className="text-red-500 text-sm mt-1">{errors[id]?.message}</span>
      )}
    </div>
  );
}

export default RichTextBox;
