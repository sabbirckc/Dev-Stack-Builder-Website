import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Technologies from "./components/Technologies/Technologies";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Technologies />
      </main>
      <Footer />
    </>
  );
}

export default App;