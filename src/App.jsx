import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

import HomePage from "./pages/HomePage.jsx";
import Products from "./pages/Products.jsx";
import Services from "./pages/Services.jsx";
import Support from "./pages/Support.jsx";
import Fiber from "./pages/Fiber.jsx";

function App() {
  return (
    <Router>
      <div className='flex flex-col min-h-screen'>
        <header className='z-50'>
          <Header />
        </header>

        <main className='flex-grow'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/support" element={<Support />} />
            <Route path="/fiber" element={<Fiber />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
