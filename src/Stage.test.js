import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage';
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';

describe('<Stage />', () => {
    it('renders without crashing', ()=> {
        const div = document.createElement('div');

        ReactDOM.render(<Stage id = 'a' name = 'frank' avatar = 'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1'/>, div)
    
        ReactDOM.unmountComponentAtNode(div);
    });

});

describe('<Stage />', () => {
    it('renders UI correctly', () => {
        const tree = renderer.create(<Stage id = 'a' name = 'frank' avatar = 'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1'/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});