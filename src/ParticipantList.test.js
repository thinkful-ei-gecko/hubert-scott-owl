import React from 'react';
import ReactDOM from 'react-dom';
import ParticipantList from './ParticipantList'
import renderer from 'react-test-renderer';


describe('<ParticipantList />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');

        ReactDOM.render(<ParticipantList participants = {[    {
            id: 4,
            name: 'Frank Runciman',
            avatar:
                'https://robohash.org/etexercitationemassumenda.jpg?size=200x200&set=set1',
            inSession: true,
            onStage: false
        },
        {
            id: 5,
            name: 'Ashla Attwool',
            avatar:
                'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',
            inSession: true,
            onStage: true
        }
    ]} />, div);

        ReactDOM.unmountComponentAtNode(div);
    });

});

describe('<ParticipantList />', () => {
    it('renders UI correctly', () => {
        const tree = renderer.create(<ParticipantList participants = {[
            {
            id: 4,
            name: 'Frank Runciman',
            avatar:
                'https://robohash.org/etexercitationemassumenda.jpg?size=200x200&set=set1',
            inSession: true,
            onStage: false
        },
        {
            id: 5,
            name: 'Ashla Attwool',
            avatar:
                'https://robohash.org/iustodoloremqueinventore.jpg?size=200x200&set=set1',
            inSession: true,
            onStage: true
        }
    ]} />).toJSON();
    
    expect(tree).toMatchSnapshot();
    });
});