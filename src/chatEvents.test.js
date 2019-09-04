import React from 'react';
import ReactDOM from 'react-dom';
import ChatEvent from './chatEvents';
import renderer from 'react-test-renderer';

describe('<ChatEvent />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<ChatEvent  id = {3} name = 'message' message = 'Hello world' timestamp = {1548852484247}/>, div)

        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('<CurrentUser />', () => {
    it('renders UI correctly', () => {
    const tree = renderer.create(<ChatEvent  id = {3} name = 'message' message = 'Hello world' timestamp = {1548852484247}/>).toJSON();
    expect(tree).toMatchSnapshot();
    })
})