import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Router from "./router/Router/Router";
import { theme } from "./static/styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router></Router>
    </ThemeProvider>
  );
}

export default App;
