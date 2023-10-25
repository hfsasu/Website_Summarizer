import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./services/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>{/* Rapping the whole application with a proivder that will give service to our app */ }
            <App />
        </Provider>
    </React.StrictMode>
);

