/* EditTodo.js */
import React, {useState} from "react";
import TodoList from "./todoList";
import VisibilityFilter from "./visibilityFilter";
import {connect} from "react-redux";
import {editTodo} from "../redux/actions";
import SendIcon from "@material-ui/icons/Send";

export function EditTodo(props) {
    const [value, setValue] = useState(props.location.currentValue);
    const editTodo = props.location.editTodo;

    const handleAdd = () => {
        if (value !== "") {
            editTodo(props.location.dataId, value);
            props.history.push("/");
        }
    };

    return (
        <React.Fragment>
            <p>
                <img
                    className="headerImg"
                    src={require("../../src/components/Assets/Images/bg-header-desktop.svg")}
                    alt="Not found"
                />
            </p>
            <div className="App outerDiv">
                <p className="header">Todos</p>

                <div className="TodoBox">
                    <input
                        id="addTask"
                        className="inputBox"
                        type="text"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        placeholder="Edit task"
                    />
                    <span>
                        <button id="btn1" className="sendButton" onClick={handleAdd}>
                            <SendIcon color="primary" />
                        </button>
                    </span>
                </div>

                <div className="entireList entireListDisable">
                    <TodoList />
                    <div className="bottomAllButton">
                        <VisibilityFilter />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default connect(null, {editTodo})(EditTodo);
