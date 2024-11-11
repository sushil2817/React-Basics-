// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { store } from "./redux/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(

    <Provider store={store}>
      <App />
    </Provider>
  
);

// steps:

// create store
// wrap app component under Provider
// create slice
//  register redcer in stores
