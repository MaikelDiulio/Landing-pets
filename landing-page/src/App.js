
import './App.css';
import Initial from './Components/Initial/Initial';
import Carousel from './Components/Carousel/Carousel';
import Sobre from './Components/Sobre/Sobre';
import Footer from './Components/Footer/Footer';
import whatsapIco from "./assets/images/icowhat.svg"

function App() {
  return (
    <>
      <Initial></Initial>
      <Carousel></Carousel>
      <Sobre></Sobre>
      <Footer></Footer>

      <div className='whatsap'>
        <a href="http://lorempixel.com.br/500/400/?1" target="_blank" >
          <img src={whatsapIco} />
        </a>

      </div>

    </>
  );
}

export default App;
