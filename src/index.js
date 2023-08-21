import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "yet-another-react-lightbox/styles.css";

import { ChakraProvider } from "@chakra-ui/react";

import theme from "./chakra-theme"; // Adjust the import path

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
