import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // composant de react-redux qui englobe notre App et rend disponible les reducers/state
    // on se "branchera" depuis un composant au store avec les hooks useSelector pour récupérer les states ou useDispatch pour envoyer l'action vers le reducer
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
