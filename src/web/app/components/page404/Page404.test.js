import React from 'react'
import {shallow} from 'enzyme'
import Page404 from "./Page404";


describe('Teste do componente - Page 404', () => {

    it('test render', () => {
        const component = shallow(<Page404/>)
        expect(component).toMatchSnapshot()
    });
})