// src/components/visibilityFilter.js

import React from "react";
import {connect} from "react-redux";
import {setFilter} from "../redux/actions";
import {Filters} from "../redux/actionTypes";
import "./Assets/Todo.css";

function VisibilityFilter({todos, setFilter}) {
    return (
        <div>
            <span id="itemCount" className="count">
                {" "}
                ALL({Object.keys(todos).length}){" "}
            </span>
            {Filters.map((filter, i) => (
                <button
                    className="bottomButton"
                    onClick={() => setFilter(filter)}
                    key={`filter-${i}`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
}

const mapState = (state) => ({
    activeFilter: state.visibilityFilter.activeFilter,
    todos: state.todos.data
});

export default connect(mapState, {setFilter})(VisibilityFilter);
