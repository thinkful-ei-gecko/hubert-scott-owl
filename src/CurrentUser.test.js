import React from 'react';
import ReactDOM from 'react-dom';
import CurrentUser from './CurrentUser';
import renderer from 'react-test-renderer';

describe('<CurrentUser />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<CurrentUser  id = 'a' name = 'frank' avatar = 'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1'/>, div)

        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('<CurrentUser />', () => {
    it('renders UI correctly', () => {
    const tree = renderer.create(<CurrentUser  id = 'a' name = 'frank' avatar = 'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1'/>).toJSON();
    expect(tree).toMatchSnapshot();
    })
})