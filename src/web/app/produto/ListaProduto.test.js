import ReactDOM from "react-dom";
import React from "react";
import ListaProduto from "./ListaProduto";

it('test render', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListaProduto />, div);
    ReactDOM.unmountComponentAtNode(div);
});

