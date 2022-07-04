import Navbar from './components/navbar/Navbar';
import MainTop from './components/mainTop/MainTop';
import KouchAccor from "./components/KouchAccor/KouchAccor";
import KouchDasturi from './components/KouchDasturi/KouchDasturi';
import TabMenu from './components/TabMenu/TabMenu';
import VideosBlock from './components/VideosBlock/VideosBlock';
import KouchUstunligi from './components/KouchUstunligi/KouchUstunligi';

function App() {
  return (
    <div className="App">
      <Navbar/>  
      <MainTop/>
      <KouchDasturi/>
      <VideosBlock/>
      <KouchUstunligi/>
      {/* <TabMenu/> */}
        {/* <KouchAccor /> */}
    </div>
  );
}

export default App;
