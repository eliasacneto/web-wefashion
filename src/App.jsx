
import Header from "./views/Header/Header";
import Footer from "./views/Footer/Footer";
import Testimonials from "./views/Testimonials/Testimonials";
import Courses from "./views/Courses/Courses";
import Posts from "./views/Posts/Posts";
import Home from "./views/Home/Home";
import ChooseUs from "./views/ChooseUs/ChooseUs";
import ScrollToTopButton from "./Components/ScrollToTopButton/ScrollToTopButton";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Courses />
      <Posts />
      <Testimonials />
      <ChooseUs />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
