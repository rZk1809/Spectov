import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer, Home, Products } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;