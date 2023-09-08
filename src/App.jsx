import Navbar from "./Components/Navbar/Navbar";
import Footer from "./views/Footer/Footer";
import Courses from "./views/Courses/Courses";
import { PRODUCTS_MOCK } from "./mock/product.mock";

function App() {
  return (
    <>
      <Navbar />
      <Courses/>
      <Footer />
    </>
  );
}

export default App;
