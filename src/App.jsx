
import Header from "./Components/Header/Header";
import Footer from "./views/Footer/Footer";
import Testimonials from "./views/Testimonials/Testimonials";
import Courses from "./views/Courses/Courses";

import Newsletter from "./views/Newsletter/newsletter";
import Posts from "./views/Posts/Posts";
import Benefits from "./Components/Benefits/Benefits";
import ChooseUs from "./views/ChooseUs/ChooseUs";
import ScrollToTopButton from "./Components/ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <>
      <Header />
      <Benefits />
      <Courses />
      <Posts />
      <Testimonials />
      <ChooseUs />
      {/* <Newsletter /> */}
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
