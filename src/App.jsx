import Benefits from "./Components/Benefits/Benefits";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./views/Footer/Footer";
import Nescola from "./Components/Nescola/Nescola";
import Testimonials from "./views/Testimonials/Testimonials";
import Courses from "./views/Courses/Courses";

import Newsletter from "./views/Newsletter/newsletter";

function App() {
  return (
    <>
      <Navbar />
      <Benefits />
      <Courses />
      <Testimonials />
      <Nescola />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
