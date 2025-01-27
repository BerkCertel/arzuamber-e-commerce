"use client";

import { FieldValues, SubmitErrorHandler, useForm } from "react-hook-form";
import Heading from "../../general/Heading";
import Input from "../../general/Input";
import CheckBox from "../../general/CheckBox";
import Button from "../../general/Button";
import { toast } from "react-toastify";
import { useState } from "react";
import FileInput from "../../general/FileInput";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Dropdown from "../../general/DropDown";
import Image from "next/image";

function ProductCreateForm() {
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
      price: 1,
    },
  });

  const [images, setImages] = useState<string[]>([]);

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newImages = [...images];
    for (let i = 0; i < files.length; i++) {
      const base64 = await convertBase64(files[i]);
      newImages.push(base64 as string);
    }
    setImages(newImages);

    setValue("images", newImages, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const handleImageRemove = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
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
    if (images.length < 2) {
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
    <div className="w-full h-full flex flex-col items-center justify-center shadow-lx">
      <form
        className="w-[90%] my-1 shadow-xl px-7 py-4 space-y-5 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-start flex-col"
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
          <Input
            placeholder="Discount Percent"
            id="discountPercent"
            type="number"
            min={0}
            max={99}
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
          <CheckBox
            label="Is the product active?"
            id="isActive"
            register={register}
          />
          <CheckBox label="New season?" id="isNewSeason" register={register} />
        </div>

        <div className="flex flex-col items-start   w-full ">
          <FileInput
            id="image-upload"
            label="Upload Images"
            onChange={handleImageChange}
            multiple
            errors={errors}
            register={register}
            FileButton={false}
            Filespan={false}
            required
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 w-full ">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-3 space-x-2 border border-secondary rounded-lg p-2"
              >
                <div>{index == 1 ? <p></p> : <p></p>}</div>
                <Image
                  src={image}
                  alt={`Image ${index + 1}`}
                  width={100} // Define width for better control
                  height={100} // Define height for better control
                  className="w-full h-[70px] object-contain bg-center bg-cover " // Small size for previews
                />
                <Button
                  onClick={() => handleImageRemove(index)}
                  animation
                  text="Delete"
                  size="small"
                  className=" h-10 bg-red-500 text-white"
                />
              </div>
            ))}
          </div>
        </div>
        <Button
          animation
          color="secondary"
          size="small"
          text="Ürünü Oluştur"
          onClick={handleSubmit(onSubmit)}
          className="w-5/6"
        />
      </form>
    </div>
  );
}

export default ProductCreateForm;
