
import Intro from "../sections/Intro";

import React from "react";
import{ createGlobalStyle } from "styled-components";
import About from "../sections/About";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Footer from "../components/screenshots/Footer";

const GlobalStyle = createGlobalStyle`
  body {
    background: white; 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
const IndexPage = () => {
  return (
    <main>
      <title>Jason Fan</title>
      <GlobalStyle />
      <Intro /> {/* Using the Intro component */}
      <About /> {/* Using the About component */}
      <Experience /> {/* Using the About component */}
      <Projects /> {/* Using the About component */}
      <Footer /> {/* Using the About component */}
      {/* ... other content ... */}
    </main>
  );
};

export default IndexPage;
