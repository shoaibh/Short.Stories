import { RouterProvider } from "react-router-dom";
import router from "./Router/main";
function App() {
  return <RouterProvider router={router} fallbackElement={<div>loading...</div>}/>;
}

export default App;
