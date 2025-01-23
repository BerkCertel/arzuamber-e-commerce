"use client";

import { FieldErrors, FieldValues } from "react-hook-form";

interface FileInputProps {
  id: string;
  label: string;
  disabled?: boolean;
  required?: boolean;
  errors: FieldErrors<FieldValues>;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FileInput({
  id,
  label,
  disabled,
  required,
  errors,
  onChange,
}: FileInputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-2 font-semibold">
        {label}
      </label>
      <input
        id={id}
        type="file"
        disabled={disabled}
        required={required}
        onChange={onChange}
        className={` w-full h-12 my-3 p-2 border outline-none rounded-md ${
          errors[id] ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors[id] && typeof errors[id]?.message === "string" && (
        <span className="text-red-500 text-sm mt-1">{errors[id]?.message}</span>
      )}
    </div>
  );
}

export default FileInput;
