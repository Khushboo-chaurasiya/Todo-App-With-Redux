import React from 'react';
import ReactDOM from 'react-dom';

it("render delete and done button without crash", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<button> </button>, div) ;
})

it("render Span tag to show count without crash", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<span> </span>, div) ;
})
