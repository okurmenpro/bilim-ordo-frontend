import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";

export const myRouter = createBrowserRouter([
   {
    path: "/",
    element: <Layout />,
   
   }
])