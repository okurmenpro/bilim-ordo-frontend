import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./router";
import { CartProvider } from "./components/CartContext";

export default function App() {
	return (
		<CartProvider>
			<div className="App">
				<RouterProvider router={Router} />
			</div>
		</CartProvider>
	);
}
