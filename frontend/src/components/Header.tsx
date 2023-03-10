import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/loader.png";
import { RootContext } from "../context/RootContext";
import { Dropdown, Avatar } from "antd";
import avatar from "../assets/avatar.png";

const LINKS = [
  {
    title: "Home",
    authorized: [],
    to: "/",
  },
  {
    title: "Dashboard",
    authorized: ["admin"],
    to: "/dashboard",
  },
];
export default function Header() {
  const { setUser, User }: any = useContext(RootContext);
  const nav = useNavigate();
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
    <div className="bg-twitter flex items-center justify-between px-5 py-2">
      <img
        src={logo}
        alt="logo"
        className="h-20 w-20 cursor-pointer "
        onClick={() => nav("/home")}
      />
      <div className="flex space-x-6 items-center">
        {LINKS.map((item, i) => {
          if (!item.authorized.length || item.authorized.includes(User.role))
            return (
              <div key={i}>
                <NavLink to={item.to} className="text-2xl font-semibold">
                  {item.title}
                </NavLink>
              </div>
            );
          return null;
        })}
        <Dropdown
          menu={{ items: HoverOptions }}
          trigger={['click']}
          className=" relative cursor-pointer"
        >
          <Avatar size={55} icon={<img src={avatar} alt="avatar" />} />
        </Dropdown>
      </div>
    </div>
  );
}
