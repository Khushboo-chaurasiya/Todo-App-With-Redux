/* addTodo.js */
import React, {useState} from "react";
import "./Assets/Todo.css";
import {connect} from "react-redux";
import {addTodo} from "../redux/actions";
import SendIcon from "@material-ui/icons/Send";

export function AddTodo({addTodo}) {
    const [value, setValue] = useState("");
    const handleAdd = () => {
        if (value !== "") {
            setValue("");
            addTodo(value);
        }
    };

    return (
        <React.Fragment>
            <div className="TodoBox">
                <input
                    id="addTask"
                    className="inputBox"
                    type="text"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    placeholder="Add new task"
                />
                <span>
                    <button id="btn1" className="sendButton" onClick={handleAdd}>
                        <SendIcon color="primary" />
                    </button>
                </span>
            </div>
        </React.Fragment>
    );
}

export default connect(null, {addTodo})(AddTodo);
