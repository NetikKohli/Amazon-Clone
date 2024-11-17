import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import CartPage from "./components/CartPage";
import Header from "./components/Header";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cart" element={<><Header/> <CartPage /></>} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
