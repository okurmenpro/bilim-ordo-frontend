import Test from "./components/Test";
import { MainPage, myConst } from "./pages/mainPage";
import Header from "./components/Header";


const App = () => {
  return (
    <>
    <Header/>
   <p>First Day</p>
   <MainPage/>
   {myConst}
   </>

  );
}

export default App;
