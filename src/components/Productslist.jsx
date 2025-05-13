
import { Button } from "@heroui/button";
import { supabase } from "../config/supabase";

import { useState } from "react";

const rows = [
    {
      key: "1",
      name: "Tony Reichert",
      role: "CEO",
      status: "Active",
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
    },
  ];
  
  const columns = [
    {
      key: "name",
      label: "NAME",
    },
    {
      key: "role",
      label: "ROLE",
    },
    {
      key: "status",
      label: "STATUS",
    },
  ];

export default function Productlist() {
  const [updatedata, setUpdatedata] = useState();
  const getdata = async () => {
    const { data, error } = await supabase.from("car").select();
    setUpdatedata(data);
  };
  console.log(updatedata);

  return (
    <div>
      <Button onPress={getdata}>Add List</Button>
      <ul className="w-[60%] gap-5">
        {updatedata?.map((value) => (
          <li  key={value.id}>{value.name}{value.model}{value.price}{value.description}</li>
        ))}
      </ul>
      {/* <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell
            
            
            >{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table> */}
    </div>
  );
}
