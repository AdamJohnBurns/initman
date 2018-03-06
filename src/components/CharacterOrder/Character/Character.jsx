import getClassName from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import TextInput from './TextInput/TextInput';

const Character = props => {
    const getCharacterClassName = () => {
        return getClassName('Character', {
            'Character--isHighlighted': props.isHighlighted
        });
    }

    return (
        <div className={getCharacterClassName()}>
            <TextInput
                className="InitiativeInput"
                value={props.initiative} />
            <TextInput
                className="NameInput"
                value={props.name} />
            <TextInput
                className="NotesInput"
                value={props.notes} />
            <TextInput
                className="ArmourClassInput"
                value={props.armourClass} />
            <TextInput
                className="HitPointsRemainingInput"
                value={props.hitPointsRemaining} />
        </div>
    );
};

Character.propTypes = {
    armourClass: PropTypes.integer,
    hitPointsRemaining: PropTypes.integer,
    initiative: PropTypes.integer,
    isHighlighted: PropTypes.boolean,
    name: PropTypes.string,
    notes: PropTypes.string,
};

export default Character;
