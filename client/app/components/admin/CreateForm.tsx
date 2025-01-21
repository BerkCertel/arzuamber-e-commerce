"use client";

import { FieldValues, SubmitErrorHandler, useForm } from "react-hook-form";
import Heading from "../general/Heading";
import Input from "../general/Input";
import CheckBox from "../general/CheckBox";
import ChoiceInput from "../general/ChoiceInput";
import Button from "../general/Button";
import { toast } from "react-toastify";
import { useState } from "react";
import FileInput from "../general/FileInput";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";

function CreateForm() {
  const { categories } = useSelector((state: RootState) => state.categories);

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
      inStock: false,
      isNewSeason: false,
      discountPercent: 0,
      price: null,
    },
  });

  const [images, setImages] = useState<string[]>(["", "", "", ""]);

  const handleImageChange = async (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const base64 = await convertBase64(file);
    const newImages = [...images];
    newImages[index] = base64 as string;
    setImages(newImages);

    setValue("images", newImages, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const convertBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (err) => reject(err);
    });
  };

  const onSubmit: SubmitErrorHandler<FieldValues> = (data) => {
    if (images.filter(Boolean).length < 2) {
      toast.error("Please upload at least 2 images!!");
      return;
    }

    try {
      const formData = { ...data, images };
      console.log("Form Data", formData);

      toast.success("Product Created Successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Product Could Not Be Created!");
    }
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
    <div className="w-full min-h-screen flex flex-col items-center bg-gray-50 p-6 rounded-md">
      <Heading center text="Create Product" />
      <form
        className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 space-y-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          placeholder="Ürün İsmi"
          id="name"
          type="text"
          errors={errors}
          register={register}
        />
        <Input
          placeholder="Ürün Açıklaması"
          id="description"
          type="text"
          errors={errors}
          register={register}
        />
        <Input
          placeholder="Ürün Fiyatı"
          id="price"
          type="number"
          errors={errors}
          register={register}
        />
        <div className="flex justify-around items-center space-x-4">
          <CheckBox
            label="Is the product active?"
            id="isActive"
            register={register}
          />
          <CheckBox label="New season?" id="isNewSeason" register={register} />
        </div>
        {/* File Upload Section */}
        <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index}>
              <FileInput
                id={`image-${index}`}
                label={`image ${index + 1}`}
                onChange={(e) => handleImageChange(index, e)}
                errors={errors}
              />
              {images[index] && (
                <div className="mt-2 flex justify-center">
                  <Image
                    src={images[index]}
                    alt={`Preview ${index + 1}`}
                    width={128}
                    height={128}
                    className="object-cover rounded-md"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Category Section */}
        <div className="w-full flex flex-wrap gap-4 justify-center">
          {categories.map((cat) => (
            <ChoiceInput
              key={cat.id}
              text={cat.name}
              selected={category === cat.name}
              onClick={() => setCustomValue("category", cat.name)}
            />
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button
            animation
            text="Ürünü Oluştur"
            onClick={handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </div>
  );
}

export default CreateForm;
