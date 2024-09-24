import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Cart from "./pages/Cart";
export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Cart />
            },
          
        ]
    }
])

