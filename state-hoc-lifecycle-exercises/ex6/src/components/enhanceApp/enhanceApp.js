import React from "react";
import { LanguageProvider } from "../LanguageContext/LanguageContext";

const enhanceApp = Component => {
  return props => (
    <LanguageProvider value="en">
      <Component {...props} />
    </LanguageProvider>
  );
};

export default enhanceApp;
