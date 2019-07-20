import React, { useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

const ProductList = (props) => {
  const getProducts = useCallback(() => {
    console.log(props.name)
    return axios.get('http://localhost:8080/product').then(response => {
      console.log(response)
    })
  }, [props.name])

  useEffect(() => {
    getProducts().then(() => {
      console.log('a')
    })
  }, [getProducts])

  return (
    <div>
      <span>{props.name}</span>
    </div>
  )
}

ProductList.propTypes = {
  name: PropTypes.string
}

export default ProductList
