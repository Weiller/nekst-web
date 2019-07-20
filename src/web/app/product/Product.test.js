import ReactDOM from 'react-dom'
import Product from './Product'
import React from 'react'

it('test render', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Product />, div)
  ReactDOM.unmountComponentAtNode(div)
})
