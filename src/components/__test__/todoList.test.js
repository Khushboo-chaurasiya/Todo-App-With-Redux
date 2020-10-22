import React from 'react';
import ReactDOM from 'react-dom';

it("render delete and done button without crash", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<button> </button>, div) ;
})

it("render Paragraph to display List item without crash", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<p> </p>, div) ;
})

it("render span to display button item without crash", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<span> </span>, div) ;
})

