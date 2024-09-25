import { createBrowserRouter } from "react-router-dom";
import Lalyout from "./components/layout/Lalyout";

export const myRouter = createBrowserRouter([
   {
    path: "/",
    element: <Lalyout/> ,
   }
])