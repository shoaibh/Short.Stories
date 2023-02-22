import { createBrowserRouter } from "react-router-dom";
import Authentication from "../Views/Authentication";
import Home from "../Views/Home";
import Profile from "../Views/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Authentication login={true}/>,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  
]);

export default router;

// {
//     path: "/",
//     element: <Root />,
//     children: [
//         {
//             path: "contacts/:contactId",
//             element: <Contact />,
//         },
//     ],
// },
