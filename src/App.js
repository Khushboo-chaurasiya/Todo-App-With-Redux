/* src/App.js */

import React from "react";
import "./App.css";
import {Provider} from "react-redux";
import store from "../src/redux/store";
import RouterPage from "./RouterPage";

function App() {
    return (
        <React.Fragment>
            <Provider store={store}>
                <RouterPage />
            </Provider>
        </React.Fragment>
    );
}

export default App;
