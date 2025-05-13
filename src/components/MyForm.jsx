import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import React, { useState } from "react";
import Mytoast from "./Mytoast";
import { Bounce, toast } from "react-toastify";
import { supabase } from "../config/supabase";

export default function MyForm() {
  const [action, setAction] = React.useState(null);
  const [name, setName] = useState("");
  const [models, setModels] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [fileurl, setFileurl] = useState("");

  const handleimage = async (e) => {
    setImage(e.target.files[0]);
    console.log(image);
    
    const { data, errorimg } = await supabase.storage
      .from("images")
      .upload(`${Date.now()}.png`, e.target.files[0],
       {
        cacheControl: "3600",
        upsert: false,
      });

    console.log(data);
    if (errorimg) {
      alert(errorimg);
    } else {
      setFileurl(data.fullPath);
      console.log(fileurl);
    }
  };

  const addproduct = async (e) => {
    console.log(name, models, price, description, fileurl);
    e.preventDefault();
    const { error } = await supabase.from("car").insert({
      name: name,
      model: models,
      price: price,
      description: description,
      image: fileurl,
    });

    error
      ? toast.error("Failed", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
      : toast.success("Success", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
    setFileurl("");
  };

  return (
    <Form
      className="w-full max-w-xs flex flex-col gap-4 mx-auto mt-2"
      onReset={() => setAction("reset")}
      onSubmit={addproduct}
    >
      <Input
        onChange={(e) => setName(e.target.value)}
        isRequired
        errorMessage="Fill up this field"
        label="Car name"
        labelPlacement="outside"
        name="name"
        placeholder="Enter Car name"
        type="text"
      />

      <Input
        onChange={(e) => setModels(e.target.value)}
        isRequired
        errorMessage="Fill up this field"
        label="Car model"
        labelPlacement="outside"
        name="modle"
        placeholder="Enter Car modle"
        type="text"
      />
      <Input
        onChange={(e) => setPrice(e.target.value)}
        isRequired
        errorMessage="Fill up this field"
        label="Price"
        labelPlacement="outside"
        name="price"
        placeholder="Enter Car price"
        type="text"
      />
      <Textarea
        onChange={(e) => setDescription(e.target.value)}
        isRequired
        label="Description"
        labelPlacement="outside"
        className="max-w-xs"
        name="description"
        placeholder="Enter Car description"
      />
      <Input
        type="file"
        accept="/*"
        isRequired
        labelPlacement="outside"
        label="Upload Image"
        onChange={handleimage}
      />

      <div className="flex gap-2 mt-2">
        {fileurl && (
          <Button className="bg-orange-500 text-white" type="submit">
            Add Product
          </Button>
        )}
        <Button type="reset" variant="flat">
          Reset
        </Button>
      </div>
      <Mytoast />
    </Form>
  );
}
