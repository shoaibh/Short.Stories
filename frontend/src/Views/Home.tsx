import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="relative h-screen">
      <Header />
      <Outlet />
    </div>
  );
}
