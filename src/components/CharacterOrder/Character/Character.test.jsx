import React from 'react';
import ReactDOM from 'react-dom';

import Character from './Character';

test('<Character> renders correctly', () => {
    const div = document.createElement('div');
    const testElement = <Character
        armourClass="1"
        hitPointsRemaining="1"
        initiative="1"
        isHighlighted="false"
        value="val" />;

    ReactDOM.render(testElement, div);
    ReactDOM.unmountComponentAtNode(div);
});
