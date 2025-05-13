import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { logo } from "../images";
import { supabase } from "../config/supabase";

export default function MyCard({data}) {
const role = localStorage.getItem('Role')
const handledetail=()=>{
    console.log('detail');
    
}
const deletecard=async()=>{
    console.log(data.id);
    const response = await supabase
  .from('car')
  .delete()
  .eq('id', data.id)
  if(response){
    alert('card delete successfully')
  }else{
    alert('delete failed')
  }
}  
  
  const header = (
    <img
      alt="Card"
      src={`https://ypzjiqjrqsagqkvkczow.supabase.co/storage/v1/object/${data.image}`}
      style={{ height: '300px', objectFit: 'cover' }}
    />
  );
  const footer = (
    <div className="flex gap-2 ">
      {role==="Vendor"?
      (<>
       <Button className="bg-green-500 w-[120px] outline-none text-white text-center p-2" label="Edit" icon="pi pi-check" />
       <Button onClick={deletecard} className="bg-red-500 outline-none w-[120px] text-white text-center p-2" label="Delete" severity="secondary" icon="pi pi-times" /></>)
       :(<>
        <Button className="bg-orange-500 w-[120px] text-white outline-none text-center p-2" label="Buy Now" icon="pi pi-shopping-cart" />
        <Button onClick={handledetail} className="bg-blue-500 w-[130px] outline-none text-white text-center p-2 " label="ViewDetail" severity="secondary" icon="pi pi-tag" /></>)} 
    </div>
  );
  

  return (
    <div className="card flex justify-content-center">
      <Card
        title={data.name}
        subTitle={data.price}
        footer={footer}
        header={header}
        className="md:w-25rem"
      >
        <p className="m-0">
         {data.description}
        </p>
      </Card>
    </div>
  );
}
