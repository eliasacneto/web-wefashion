import Benefits from "./Components/Benefits/Benefits";
import Header from "./Components/Header/Header";
import Footer from "./views/Footer/Footer";
import Nescola from "./Components/Nescola/Nescola";
import Testimonials from "./views/Testimonials/Testimonials";
import Courses from "./views/Courses/Courses";

import Newsletter from "./views/Newsletter/newsletter";

function App() {
  return (
    <>
      <Header/>
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
