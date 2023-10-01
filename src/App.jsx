
import Header from "./Components/Header/Header";
import Footer from "./views/Footer/Footer";
import Nescola from "./Components/Nescola/Nescola";
import Testimonials from "./views/Testimonials/Testimonials";
import Courses from "./views/Courses/Courses";

import Newsletter from "./views/Newsletter/newsletter";
import Posts from "./views/Posts/Posts";
import Benefits from "./Components/Benefits/Benefits";

function App() {
  return (
    <>
      <Header />
      <Benefits />
      <Courses />
      <Posts />
      <Testimonials />
      {/* <Nescola /> */}
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
