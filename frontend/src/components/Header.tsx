import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/loader.png";
import { RootContext } from "../context/RootContext";
import { Dropdown, Space, Avatar, MenuProps } from "antd";
import avatar from "../assets/avatar.png";

const LINKS = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Dashboard",
    to: "/dashboard",
  },
];
export default function Header() {
  const { setUser,User }: any = useContext(RootContext);
  const HoverOptions: any = [
    {
      key: "1",
      label: <Link to={`/profile/${User.id}`}>Profile</Link>,
    },
    {
      key: "2",
      label: (
        <button
          className="bg-sky-400 px-2 rounded-lg text-white"
          onClick={logOut}
        >
          Log Out
        </button>
      ),
    },
  ];
  function logOut() {
    localStorage.removeItem("token");
    setUser(null);
  }
  return (
    <div className="bg-twitter flex items-center justify-between px-2">
      <img src={logo} alt="logo" className="h-10 w-10 " />
      <div className="flex space-x-2 items-center">
        {LINKS.map((item, i) => (
          <div key={i}>
            <NavLink to={item.to} className="text-sm font-semibold">
              {item.title}
            </NavLink>
          </div>
        ))}
        <Dropdown menu={{ items: HoverOptions }} className="cursor-pointer">
          <Avatar size={30} icon={<img src={avatar} alt="avatar" />} />
        </Dropdown>
      </div>
    </div>
  );
}
