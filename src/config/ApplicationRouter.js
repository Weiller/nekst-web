import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import App from '../App'
import Product from '../web/app/product/Product'
import ProductList from '../web/app/product/ProductList'
import Page404 from '../web/app/components/page404/Page404'

const ApplicationRouter = () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={App}/>
                <Route path="/product" component={Product}/>
                <Route path="/product-list" component={ProductList}/>
                <Route path='*' component={Page404}/>
            </Switch>
        </BrowserRouter>
    )
}

export default ApplicationRouter