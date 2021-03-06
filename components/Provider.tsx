// Providers.tsx
import React, { useState } from "react";
import useDarkMode from "use-dark-mode";
import { lightTheme, darkTheme } from "../styles/Theme";
import { ThemeProvider } from "styled-components";

const Provider = ({ children }) => {
  let theme = darkTheme;
  const { value } = useDarkMode(false, {
    storageKey: "darkModeEnabled",
    onChange: (val) => (theme = val ? darkTheme : lightTheme),
  });
  theme = value ? darkTheme : lightTheme;
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Provider;
