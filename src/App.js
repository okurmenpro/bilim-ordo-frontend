import './App.css';
import BannerCom from './components/Banner/BannerCom';
import { RouterProvider } from 'react-router-dom';
import { myRouter } from './router';

function App() {
  return (
    <div className="App">

<RouterProvider router={myRouter}  />
      

      
     

      <BannerCom/>

    </div>
  );
}

export default App;
