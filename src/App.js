import About from "./Components/About";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Tours from "./Components/Tours";

import { pageLinks, socialLinks, services, tours } from "./data";
function App() {
  return (
    <div className="App">
      <Navbar pageLinks={pageLinks} socialLinks={socialLinks} />

      <Hero />

      <About />

      <Services data={services} />

      <Tours data={tours} />

      <Footer pageLinks={pageLinks} socialLinks={socialLinks} />
    </div>
  );
}

export default App;
