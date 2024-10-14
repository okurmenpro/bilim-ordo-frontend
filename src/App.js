import './App.css';
import { RouterProvider } from 'react-router-dom';
import { Router } from './router';
import { AuthProvider } from './context/AuthContext'; // Обновите путь здесь

export default function App() {
  return (
    <AuthProvider>
      <div className="App">
        <RouterProvider router={Router} />
      </div>
    </AuthProvider>
  );
}
