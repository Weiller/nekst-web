import ReactDOM from "react-dom";
import Produto from "./Produto";
import React from "react";

it('test render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Produto />, div);
    ReactDOM.unmountComponentAtNode(div);
});

