import "./App.css";
import Header from "./Components/Header";
import Model3 from "./assets/Model3.jpeg";
import ModelS from "./assets/ModelS.jpeg";
import ModelX from "./assets/ModelX.jpeg";
import ModelY from "./assets/ModelY.jpeg";
import SolarPanel from "./assets/SolarPanels.jpeg";
import SolarRoof from "./assets/SolarRoof.jpeg";
import Accessories from './assets/Accessories.jpg'
import Items from "./Components/Items";

function App() {
  return (
    <div className="App">
      <Header />

      <Items backgroundImg={Model3} />
      <Items backgroundImg={ModelY} />
      <Items backgroundImg={ModelS} />
      <Items backgroundImg={ModelX} />
      <Items backgroundImg={SolarRoof} />
      <Items backgroundImg={SolarPanel} />
      <Items backgroundImg={Accessories} />
      

      
    </div>
  );
}

export default App;
