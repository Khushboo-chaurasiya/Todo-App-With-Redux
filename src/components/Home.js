/* src/App.js */

import React from "react";
import AddTodo from "./addTodo";
import TodoList from "./todoList";
import VisibilityFilter from "./visibilityFilter";
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux";
import store from "../redux/store";

function Home() {
    return (
        <Provider store={store}>
            <React.Fragment>
                <p>
                    <img className="headerImg" src={require("../../src/components/Assets/Images/bg-header-desktop.svg")} alt="Not found" />
                </p>
                <div className="App outerDiv">
                    <p className="header">Todos</p>
                    <AddTodo />

                    <div className="entireList">
                        <TodoList />
                        <div className="bottomAllButton">
                            <VisibilityFilter />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </Provider>

    );
}

export default Home;
