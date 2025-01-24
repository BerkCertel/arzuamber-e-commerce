"use client";

import { FieldValues, SubmitErrorHandler, useForm } from "react-hook-form";
import Heading from "../general/Heading";
import Input from "../general/Input";
import CheckBox from "../general/CheckBox";
import Button from "../general/Button";
import { toast } from "react-toastify";
import { useState } from "react";
import FileInput from "../general/FileInput";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
// import ChoiceInput from "../general/ChoiceInput";
import Dropdown from "../general/DropDown";

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

  const [images, setImages] = useState<string[]>([]);

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
    <div className="w-full  h-full md:h-screen  flex flex-col items-center justify-center  shadow-lx ">
      <form
        className="w-[90%] h-full  my-1 shadow-xl  px-7 py-4 space-y-5   bg-gray-200 rounded-lg overflow-hidden flex items-center justify-start flex-col "
        onSubmit={handleSubmit(onSubmit)}
      >
        <Heading
          center
          text="Create Product"
          textSize="4xl"
          color="black"
          font="semibold"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center w-full">
          <Input
            placeholder="Product Name"
            id="name"
            type=""
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
            min={0}
            max={100000}
            errors={errors}
            register={register}
          />

          <Dropdown
            options={categories}
            selectedOption={category}
            onSelect={(option) => setCustomValue("category", option)}
            placeholder="Select Category"
          />
        </div>

        <div className="flex justify-around items-center space-x-4 w-full">
          {/* Checkbox Section  */}
          <CheckBox
            label="Is the product active?"
            id="isActive"
            register={register}
          />
          <CheckBox label="New season?" id="isNewSeason" register={register} />
        </div>

        {/* File Upload Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-4 w-full ">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow w-full "
            >
              <FileInput
                id={`image-${index}`}
                label={`Image ${index + 1}`}
                onChange={(e) => handleImageChange(index, e)}
                errors={errors}
              />
            </div>
          ))}
        </div>
        {/* Category Section */}
        {/* <div className="w-full flex flex-wrap gap-4 justify-center">
          {categories.map((cat) => (
            <ChoiceInput
              key={cat.id}
              text={cat.name}
              selected={category === cat.name}
              onClick={() => setCustomValue("category", cat.name)}
            />
          ))}
        </div> */}

        {/* Submit Button */}

        <Button
          animation
          primary
          size="large"
          text="Ürünü Oluştur"
          onClick={handleSubmit(onSubmit)}
          className=" w-5/6 "
        />
      </form>
    </div>
  );
}

export default CreateForm;
