//Klient dostarczył szablon strony w pliku szablon.html i chciałby mieć
// taka aplikacje napisana w React. Twoim zadaniem jest podział dostarczonego
// kodu na komponenty.

import React from "react";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

const App = props => {
  const {
    sectionText,
    sectionTitle,
    aboutText,
    aboutTitle,
    footerText1,
    footerText2,
    footerText3,
    footerUrl,
    buttonText
  } = props.text;
  return (
    <>
      <Header name="Menu" />
      <Section
        title={sectionTitle}
        text={sectionText}
        buttonText={buttonText}
      />
      <About title={aboutTitle} text={aboutText} />
      <Footer
        text1={footerText1}
        text2={footerText2}
        text3={footerText3}
        url={footerUrl}
      />
    </>
  );
};

export default App;
