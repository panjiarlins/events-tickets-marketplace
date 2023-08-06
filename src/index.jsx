import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./states";
import { ChakraProvider } from "@chakra-ui/provider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <React.StrictMode> */}
      <ChakraProvider>
        <App />
      </ChakraProvider>
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </Provider>
);
