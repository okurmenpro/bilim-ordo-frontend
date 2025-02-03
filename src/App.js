import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router";
import { CartProvider } from "./context/CartContext";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

export default function App() {
  return (
    <CartProvider>
      <div className="App">
        <RouterProvider router={Router}>
          <ScrollToTop />
        </RouterProvider>
      </div>
    </CartProvider>
  );
}
