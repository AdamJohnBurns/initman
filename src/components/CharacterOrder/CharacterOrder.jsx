import React from 'react';
import Character from './Character/Character';

const CharacterOrder = (props) => {
    // function outputCharacters () {
    //     return <Character name="Name" />;
    // }

    return (
        <Character
            name="My name"
            notes="Notes"
            isHighlighted="true" />
    );
};

CharacterOrder.propTypes = {
};

export default CharacterOrder;
