// import logo from './logo.svg';
import './App.css';
import DropdownProfile from './Dropdown/DropdownProfile';

function App() {
  return (
    <div>
     <DropdownProfile/>
import './App.css';
import { RouterProvider } from 'react-router-dom'
import { Router } from './router'

function App() {
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
