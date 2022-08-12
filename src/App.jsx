import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import PortfolioHead from "./components/portfolio/PortfolioHead";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";

function App() {
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1990);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loader">
          <ClimbingBoxLoader color={""} loading={loading} size={30} />
        </div>
      ) : (
        <div>
          <Header />
          <Nav />
          <About />
          <PortfolioHead />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
