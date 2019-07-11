import React from 'react'
import {shallow} from 'enzyme'
import Page404 from "./Page404";
import toJson from 'enzyme-to-json';


describe('Teste do componente - Page 404', () => {

    it('test render', () => {
        const component = shallow(<Page404/>)
        console.log(toJson(component))
        expect(toJson(component)).toMatchSnapshot()
    });
})