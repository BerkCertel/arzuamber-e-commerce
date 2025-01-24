"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Input from "../general/Input";
import Button from "../general/Button";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Register Data:", data);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-primary">Register</h2>
      <form>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary"
          />
        </div>
        <Button text="Register" size="large" primary />
      </form>
    </div>
  );
}

export default RegisterForm;
