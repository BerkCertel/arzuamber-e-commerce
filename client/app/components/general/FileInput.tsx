import React, { useState } from "react";
import { FieldErrors, FieldValues } from "react-hook-form";
import Button from "../general/Button"; // Adjust the import path as needed
// import { RiDeleteBin2Line } from "react-icons/ri";

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
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setFileName(file?.name || null);
      onChange(event);
    }
  };

  const handleFileRemove = () => {
    setFileName(null);
    // Reset the file input
    const input = document.getElementById(id) as HTMLInputElement;
    input.value = ""; // This will clear the file input field
  };

  return (
    <div className="flex flex-col w-full">
      <label
        htmlFor={id}
        className="mb-2 font-semibold text-sm md:text-base text-secondary"
      >
        {label}
      </label>
      <input
        id={id}
        type="file"
        disabled={disabled}
        required={required}
        onChange={handleFileChange}
        className={`w-full h-full my-3 p-2 border outline-none rounded-md text-xs text-center bg-secondary text-mywhite ${
          errors[id] ? "border-red-500" : "border-gray-300"
        }`}
      />
      {fileName && (
        <div className="flex flex-col md:flex-row items-center justify-around my-2 w-full gap-3 ">
          <span className=" text-xs bg-secondary rounded-md  text-mywhite w-full p-3">
            {fileName}
          </span>
          <Button
            onClick={handleFileRemove}
            animation
            text="Delete"
            className="bg-secondary w-5/6 md:w-1/3 h-10"
          />
        </div>
      )}
      {errors[id] && typeof errors[id]?.message === "string" && (
        <span className="text-red-500 text-sm mt-1">{errors[id]?.message}</span>
      )}
    </div>
  );
}

export default FileInput;
