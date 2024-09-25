import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom'
import { myRouter } from './router'

function App() {
  return (
    <div className="App">
      <RouterProvider router={myRouter} />
      
    </div>
  );
}

export default App;
