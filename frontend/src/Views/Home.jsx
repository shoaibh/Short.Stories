import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { RootContext } from "../context/RootContext";

export default function Home() {
  // notify.success("Logged in")
 
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
