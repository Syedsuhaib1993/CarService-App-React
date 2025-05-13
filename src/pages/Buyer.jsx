import React, { useEffect, useState } from "react";
import MyCard from "../components/MyCard";
import { supabase } from "../config/supabase";

const Buyer = () => {
  const [cardata, setCardata] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      const { data, error } = await supabase.from("car").select();
      if (error) {
        alert("error");
      } else {
        setCardata(data);
      }
    };
    fetchdata();
  }, []);


  return (
    <div>
  
      <div className="grid  grid-cols-3 gap-8 w-[80%] mx-auto mt-[40px] p-4">
        {
            cardata && (
                cardata.map((data,value)=>{
                    return(
                        <div key={value}>
                            <MyCard data={data}/>
                        </div>
                    )
                })
            )
        }
      </div>
    </div>
  );
};

export default Buyer;
