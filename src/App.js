import Test from "./components/Test";
import { MainPage, myConst } from "./pages/mainPage";
import Header from "./components/Header";
import Carousel from "./components/Carousel";


const App = () => {
  return (
    <>
    <Header/>
   <p>First Day</p>
   <MainPage/>
   {myConst}
   <Carousel />

   </>

  );
}

export default App;
