import React from "react";
import { Avatar } from "antd";
import Styles from "../styles";
export default function CreateTweet() {
  return (
    <div className="bg-gray-200 rounded-lg flex items-stretch space-x-4 p-4 pb-8">
      <Avatar>t</Avatar>
      <textarea
        name=""
        placeholder="Write your story"
        className={
          "bg-gray-100 w-full resize-y h-20 max-h-28 " + Styles.input_type_1
        }
      ></textarea>
    </div>
  );
}
