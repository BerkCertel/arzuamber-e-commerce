"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Input from "../general/Input";
import Button from "../general/Button";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Login Data:", data);
    // Giriş işlemleri burada yapılabilir
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-4 w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-semibold text-center">Login</h2>
      <Input
        id="email"
        placeholder="Email Address"
        type="email"
        errors={errors}
        register={register}
        required
      />
      <Input
        id="password"
        placeholder="Password"
        type="password"
        errors={errors}
        register={register}
        required
      />
      <Button
        type=""
        primary
        text="Login"
        size="large"
        animation
        className="w-full"
      />
    </form>
  );
}

export default LoginForm;
