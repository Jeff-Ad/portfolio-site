import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import PortfolioHead from "./components/portfolio/PortfolioHead";
function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <PortfolioHead />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
