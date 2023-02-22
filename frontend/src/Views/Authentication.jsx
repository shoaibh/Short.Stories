import React from "react";
import logo from "../assets/logo.png";
import {Styles} from "../../styles"


const loginFields = [
  {
    fieldName: "email",
  },
  {
    fieldName: "password",
  },
];
const registerFields = [
  {
    fieldName: "firstName",
  },
  {
    fieldName: "lastName",
  },
  ...loginFields,
];
export default function Authentication({ login }) {
  
  return (
    <div className="bg-gray-50 h-screen w-screen justify-center items-center flex">
      <div className="flex flex-col items-center justify-center w-2/4 bg-white py-6 px-3 rounded-xl shadow-lg ">
        <img src={logo} alt="" className="w-24 h-24" />
        <div className="space-y-3 flex flex-col">
          {registerFields.map(({fieldName}) => (
            <div className="w-3/4">
                <legend for="f" className="text-xs capitalize">{fieldName}</legend>
                <input name ="f" type="text" className={`border-blue-300 ${Styles.input_type_1}`} />
            </div>
          ))}
          <button className="bg-blue-300 text-white px-3 py-1 rounded-xl self-center">submit</button>
        </div>
      </div>
    </div>
  );
}
