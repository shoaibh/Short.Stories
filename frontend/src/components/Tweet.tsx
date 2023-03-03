import React from "react";
import { Avatar } from "antd";
import Styles from "../styles";

export default function Tweet() {
  const date = new Date().toDateString().split("GMT");
  return (
    <div className="bg-gray-200 rounded-xl flex items-stretch space-x-4 p-4">
      <div className="">
        <Avatar>t</Avatar>
      </div>
      <div className="flex flex-col">
        <p
          className={
              Styles.input_type_1+
            " w-full text-sm font-medium pb-8 bg-transparent" 
          }
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          veritatis quia maxime maiores aut commodi perspiciatis dolore aliquam,
          quae est. Quisquam, nemo expedita!
        </p>
        <p className="text-xs text-gray-50 mt-4 self-end">{date}</p>
      </div>
    </div>
  );
}
