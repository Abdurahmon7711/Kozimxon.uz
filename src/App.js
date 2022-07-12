import Navbar from './components/navbar/Navbar';
import MainTop from './components/mainTop/MainTop';
import KouchDasturi from './components/KouchDasturi/KouchDasturi';
import VideosBlock from './components/VideosBlock/VideosBlock';
import KouchUstunligi from './components/KouchUstunligi/KouchUstunligi';
import CarouselCards from "./components/CarouselCards/CarouselCards";
import CarouselVideos from "./components/CarouselVideos/CarouselVideos";
import FAQs from "./components/FAQs/FAQs";
import Footer from "./components/Footer/Footer";
import KouchAccor from "./components/KouchAccor/KouchAccor";
import LogoSection from "./components/LogoSection/LogoSection";
import WhoBlock from './components/WhoBlock/WhoBlock';
import TabMenu from './components/TabMenu/TabMenu'
import './App.css'
import Kozimxon from './components/KozimxonKim/Kozimxon';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainTop />
      <KouchDasturi />
      <CarouselCards />
      <VideosBlock />
      <KouchUstunligi />
      <KouchAccor />
      <CarouselVideos />
      <LogoSection />
      <Kozimxon/>
      <FAQs />
      <Footer />
  
      {/* <WhoBlock /> */}

    </div>
  );
}

export default App;
