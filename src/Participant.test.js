import React from 'react';
import ReactDOM from 'react-dom';
import Participant from './Participant';
import renderer from 'react-test-renderer'


describe('<Participant />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<Participant id = 'a' name = 'frank' avatar = 'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1' inSession={true} onStage={true} />, div);

        ReactDOM.unmountComponentAtNode(div);
    });

});

describe('<Participant />', () => {
    it('renders UI correctly', () => {
        const tree = renderer.create(<Participant id = 'a' name = 'frank' avatar = 'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1' inSession={true} onStage={true} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});