import { Route, BrowserRouter, Routes} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import MainPage from "./Components/MainPage/MainPage";
import Menu from "./Components/Menu/Menu";
import Order from "./Components/Order/Order";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
      <>
      <BrowserRouter>
          <Nav />
          <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/menu" element={<Menu />}></Route>
              <Route path="/order" element={<Order />}></Route>
              <Route path="/gallery" element={<Gallery />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
          </Routes>
          <Footer />
      </BrowserRouter>
      </>
      );
}
export default App;
