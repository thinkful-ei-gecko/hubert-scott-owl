import React from 'react';
import ReactDOM from 'react-dom';
import StageList from './StageList';
import renderer from 'react-test-renderer';
import { exportAllDeclaration } from '@babel/types';

describe('<StageList />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<StageList stage = {    [{
            id: 1,
            name: 'Koren Templeton',
            avatar:
                'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
            inSession: true,
            onStage: true
        },
        {
            id: 2,
            name: 'Caty Flucker',
            avatar:
                'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
            inSession: true,
            onStage: false
        }
        ]} />, div);

        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('<StageList />', () => {
    it('renders UI correctly', () => {
        const tree = renderer.create(<StageList stage = {    [{
            id: 1,
            name: 'Koren Templeton',
            avatar:
                'https://robohash.org/itaquevoluptatumrerum.jpg?size=200x200&set=set1',
            inSession: true,
            onStage: true
        },
        {
            id: 2,
            name: 'Caty Flucker',
            avatar:
                'https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1',
            inSession: true,
            onStage: false
        }
    ]} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
