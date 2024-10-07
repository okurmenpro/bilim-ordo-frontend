import './App.css';
import { CartProvider } from "./components/CartContext";
import { RouterProvider } from 'react-router-dom';
import AppRouter from './router';

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={AppRouter()} />
    </CartProvider>
  )
}
