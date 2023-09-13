import Benefits from "./Components/Benefits/Benefits";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./views/Footer/Footer";
import Nescola from "./views/Nescola/Nescola";
import Testimonials from "./views/Testimonials/Testimonials";
import Courses from "./views/Courses/Courses";



function App() {
  return (
    <>
      <Navbar />
      <Benefits />
      <Courses />
      <Nescola />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
