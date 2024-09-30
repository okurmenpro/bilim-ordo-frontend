import './App.css';
import { RouterProvider } from 'react-router-dom'
import { Router } from './router'



export default function App() {
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

