// import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom'
import { myRouter } from './router'
import BannerCom from './components/Banner/BannerCom';

function App() {
  return (
    <div className="App">
      <RouterProvider router={myRouter} />
      <BannerCom/>
    </div>
  );
}

export default App;
