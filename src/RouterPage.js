import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home';
import EditTodo from './components/editTodo';


function RouterPage() {
    return (
        <Router>
            <React.Fragment>
                <Route path="/" exact strict component={Home} />
                <Route path="/home" exact strict component={Home} />
                <Route path="/edit" exact strict component={EditTodo} />
            </React.Fragment>
        </Router>
    )
}

export default RouterPage
