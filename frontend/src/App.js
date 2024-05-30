import { Route, BrowserRouter, Routes} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import MainPage from "./Components/MainPage/MainPage";
import Menu from "./Components/Menu/Menu";
import Order from "./Components/Order/Order";

function App() {
  return (
      <>
      <BrowserRouter>
          <Nav />
          <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route path="/menu" element={<Menu />}></Route>
              <Route path="/order" element={<Order />}></Route>
          </Routes>
          <Footer />
      </BrowserRouter>
      </>
      );
}
export default App;
