"use client";

import { FieldValues, SubmitErrorHandler, useForm } from "react-hook-form";
import Heading from "../general/Heading";
import Input from "../general/Input";
import CheckBox from "../general/CheckBox";
import ChoiceInput from "../general/ChoiceInput";
import {
  GiDress,
  GiTankTop,
  GiTShirt,
  GiAmpleDress,
  GiPoloShirt,
} from "react-icons/gi";
import Button from "../general/Button";
import { toast } from "react-toastify";
import { useState } from "react";
import FileBase from "react-file-base64";
import Image from "next/image";

function CreateForm() {
  const categoryList = [
    {
      name: "Dress",
      icon: GiDress,
    },
    {
      name: "T-Shirt",
      icon: GiTShirt,
    },
    {
      name: "Long Dress",
      icon: GiAmpleDress,
    },
    {
      name: "Polo Shirt",
      icon: GiPoloShirt,
    },
    {
      name: "Tank Top",
      icon: GiTankTop,
    },
  ];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      category: "",
      images: [],
      stock: 1,
      isActive: false,
      discountPercent: 0,
      price: 0,
    },
  });

  const [images, setImages] = useState<string[]>([]);

  const onSubmit: SubmitErrorHandler<FieldValues> = (data) => {
    try {
      const formData = { ...data, images };
      console.log("Form Data", formData);

      toast.success("Product Created", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
      console.error(error);
      toast.error("Product Not Created!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  const category = watch("category");

  const setCustomValue = (
    id: string,
    value: string | number | boolean | FileList
  ) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50 p-6 rounded-md">
      <Heading center text="Create Product" />
      <form
        className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          placeholder="Product Name"
          id="name"
          type="text"
          errors={errors}
          register={register}
        />
        <Input
          placeholder="Product Description"
          id="description"
          type="text"
          errors={errors}
          register={register}
        />
        <Input
          placeholder="Product Price"
          id="price"
          type="number"
          errors={errors}
          register={register}
        />
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">
            Product Images
          </label>
          <FileBase
            multiple={true}
            onDone={(files: { base64: string }[]) =>
              setImages(files.map((file) => file.base64))
            }
          />
          <div className="mt-4 flex gap-4 flex-wrap">
            {images.map((img, index) => (
              <div key={index} className="w-20 h-20 relative">
                <Image
                  src={img}
                  alt={`preview-${index}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md border"
                />
              </div>
            ))}
          </div>
        </div>
        <CheckBox
          label="Is the product active?"
          id="isActive"
          register={register}
        />
        <div className="w-full flex flex-wrap gap-4 justify-center">
          {categoryList.map((cat) => (
            <ChoiceInput
              key={cat.name}
              text={cat.name}
              icon={cat.icon}
              selected={category === cat.name}
              onClick={(category) => setCustomValue("category", category)}
            />
          ))}
        </div>
        <Button text="Create Product" onClick={handleSubmit(onSubmit)} />
      </form>
    </div>
  );
}

export default CreateForm;
