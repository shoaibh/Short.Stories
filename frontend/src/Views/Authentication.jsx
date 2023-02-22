import logo from "../assets/logo.png";
import Styles from "../styles";
import "../App.css";
import { useForm } from "react-hook-form";

const loginFields = [
  {
    fieldName: "email",
    type: "email",
    placeholder: "Email",
    rules: {},
  },
  {
    fieldName: "password",
    type: "password",
    placeholder: "Password",
    rules: {},
  },
];
const registerFields = [
  {
    fieldName: "firstName",
    type: "text",
    placeholder: "FirstName",
    rules: {required: true},
  },
  {
    fieldName: "lastName",
    type: "text",
    placeholder: "LastName",
    rules: {},
  },
  ...loginFields,
  {
    fieldName: "confirm",
    type: "password",
    placeholder: "Re-enter Password",
    rules: {},
  },
];

export default function Authentication({ login }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-gray-50 h-screen w-screen justify-center items-center flex">
      <div className="relative flex flex-col items-center justify-center w-4/6 bg-white py-6 px-3 rounded-xl shadow-lg ">
        <div>
          <img src={logo} alt="" className="w-20 h-20 mb-4 z-10" />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-3 flex flex-col w-full items-center justify-center"
        >
          {registerFields.map(({ fieldName, rules, placeholder, type }) => (
            <div key={fieldName} className="w-4/5">
              <legend htmlFor={fieldName} className="pl-1 text-xs capitalize">
                {fieldName}
              </legend>
              <input
                name={fieldName}
                type={type}
                placeholder={placeholder}
                {...register(fieldName, rules)}
                className={`${Styles.input_type_1} ${errors[fieldName] ?'outline-red-500':null} focus:shadow-lg w-full  `}
              />
              {errors[fieldName] && <span className="text-red-500 text-xs ml-1">{fieldName} is required</span>}
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-300 text-white px-3 py-1 rounded-xl self-center"
          >
            submit
          </button>
        </form>
        <p className="text-xs capitalize mt-3">
          {login ? "Already registered" : "dont have a account"} /{" "}
          <span className="text-blue-400 cursor-pointer">
            {" "}
            {!login ? "register" : "login"}
          </span>
        </p>
      </div>
    </div>
  );
}
