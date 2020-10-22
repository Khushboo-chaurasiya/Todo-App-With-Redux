import React from 'react';
import ReactDOM from 'react-dom';

it("render button without crash", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<button> </button>, div) ;
})

it("render input Text Box without crash", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<input />, div) ;
})

it("render Span tag without crash", ()=> {
    const div = document.createElement("div");
    ReactDOM.render(<span> </span>, div) ;
})
