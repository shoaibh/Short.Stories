import { useState } from "react";
import { useQuery } from "react-query";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { getLoggedUser } from "./axios/apis/authentication";
import Loader from "./components/Loader";
import { RootContext } from "./context/RootContext";
import router from "./Router/main";
import notify from "./utils/Notify";
function App() {
  const token = localStorage.getItem("token");
  const [User, setUser] = useState(null);
  const { isLoading, error }: any = useQuery({
    queryKey: "User",
    queryFn: getLoggedUser,
    onSuccess(data) {
      console.log(data)
      setUser(data);
    },
    enabled: token ? true : false,
    retry: false,
  });
  if (isLoading) return <Loader />;
  if (!isLoading) notify.error(error?.response.data.message);

  return (
    <RootContext.Provider value={{ User, setUser }}>
      <RouterProvider router={router} fallbackElement={<div>loading...</div>} />
    </RootContext.Provider>
  );
}

export default App;
