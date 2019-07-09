import ReactDOM from 'react-dom'
import React from 'react'
import ProductList from './ProductList'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

it('test render', () => {

    const mock = new MockAdapter(axios);
    mock
        .onGet("http://localhost:8080/product")
        .reply(200, {test: 1});

    const div = document.createElement('div');
   ReactDOM.render(<ProductList />, div);
    ReactDOM.unmountComponentAtNode(div);
})

