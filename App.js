import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import Aboutus from "./src/components/Aboutus";
import Contactus from "./src/components/Contactus";
import Error from "./src/components/Error";

const Applayout = () => {
  return (
    <div className="app">
      <Header />
     <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children:[
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/about",
        element: <Aboutus />,
      },
      {
        path: "/contact",
        element: <Contactus />,
      },
    ],
    errorElement:<Error/>,
  },
  
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
