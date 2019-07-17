import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import ProductList from './ProductList'

const Product = () => {

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                console.log(e)
            }}>
                <ProductList name={'weiller'}/>
                <TextField id='name' name='name' label='name' margin='normal'/>
                <Button type='submit'>Enviar</Button>
            </form>
        </div>
    )

}

export default Product