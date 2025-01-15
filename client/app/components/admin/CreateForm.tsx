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
      images: "",
      stock: 1,
      isActive: false,
      discountPercent: 0,
      price: 0,
    },
  });

  const onSubmit: SubmitErrorHandler<FieldValues> = (data) => {
    console.log("data", data);
  };

  const category = watch("category");

  const setCustomValue = (id: string, value: string | number | boolean) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <Heading center text="Create Product" />
      <div>
        <Input
          placeholder="product name"
          id="name"
          type="text"
          errors={errors}
          register={register}
        />
        <Input
          placeholder="product description"
          id="description"
          type="text"
          errors={errors}
          register={register}
        />
        <Input
          placeholder="product price"
          id="price"
          type="number"
          errors={errors}
          register={register}
        />
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
      </div>
      <Button text="Create Product" onClick={handleSubmit(onSubmit)} />
    </div>
  );
}

export default CreateForm;
