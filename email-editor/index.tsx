import "react-app-polyfill/ie11";
import * as React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Example from "./src";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow-y: hidden;
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    background:black;
  }

  #root {
    height: 100%;
  }

  ::-webkit-scrollbar-track {
    diplay:none
  }

  ::-webkit-scrollbar-thumb {
  display:none}

  ::-webkit-scrollbar-thumb:hover {
  display:none}

  ::-webkit-scrollbar {
  display:none}
`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Example />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
