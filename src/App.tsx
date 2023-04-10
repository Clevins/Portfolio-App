import About from "@components/About";
import Hero from "@components/Hero";
import Skills from "@components/Skills";
import Resume from "@components/Resume";
import Contact from "@components/Contact";

// import config from 'react-reveal/globals';
// import { config } from "react-reveal";/

// config({ ssrFadeout: true });

//import config from "react-reveal/globals";

//config({ ssrFadeout: true });

import "./App.css";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
