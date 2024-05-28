import { Route, Router, BrowserRouter, Routes} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Nav from "./Components/Nav/Nav";
import MainPage from "./Components/MainPage/MainPage";

function App() {
  return (
      <>
      <BrowserRouter>
      <Nav />
          <Routes>
              <Route path="/" element={<MainPage />}></Route>
          </Routes>
      <Footer />
      </BrowserRouter>
      </>
      );
}
export default App;
