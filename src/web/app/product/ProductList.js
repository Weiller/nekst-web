import React, {useEffect} from 'react'
import axios from 'axios'

const ProductList = () => {

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = () => {
        axios.get('http://localhost:8080/product').then(response => {
            console.log(response)
        })
    }

    return (
        <div>
            <span>a</span>
        </div>
    )
}

export default ProductList