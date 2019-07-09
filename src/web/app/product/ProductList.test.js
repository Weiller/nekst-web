import ReactDOM from 'react-dom'
import React from 'react'
import ProductList from './ProductList'

it('test render', () => {
    const div = document.createElement('div');
   ReactDOM.render(<ProductList />, div);
    ReactDOM.unmountComponentAtNode(div);
});

