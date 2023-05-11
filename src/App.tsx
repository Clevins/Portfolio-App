import Hero from "@components/Hero";
import About from "@components/About";
import Skills from "@components/Skills";
import Resume from "@components/Resume";
import Portfolio from "@components/Portfolio";
import Contact from "@components/Contact";

import styles from "./App.module.css";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Resume />
      <div className={styles.footer}>
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}

export default App;
