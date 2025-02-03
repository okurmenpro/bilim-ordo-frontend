import "./App.css";
import { RouterProvider } from "react-router-dom";
import { AppRouter } from "./router";
import { CartProvider } from "./context/CartContext";

export default function App() {
  const router = AppRouter();
  return (
    <CartProvider>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </CartProvider>
  );
}
