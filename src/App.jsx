import Navbar from "./Components/Navbar/Navbar";
import Footer from "./views/Footer/Footer";
import Classes from "./views/Classes/Classes";
import Cards from "./Components/Cards/Cards"
import { itens } from "/src/mock/product.mock"


function App() {
  return (
    <>
      <Navbar />
      <Classes data={itens}/>
      <Cards />
      <Footer />
    </>
  );
}

export default App;
