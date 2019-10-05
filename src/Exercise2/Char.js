import React from 'react';

const char = (props) => {
    const style = {
        display: 'inline-block',
        margin: '16px',
        padding: '16px',
        border: '1px solid black',
        textAlign: 'center'
    };

    return (
        <div className="Char" style={style} onClick={props.click}>
            {props.character}
        </div>
    )
};

export default char;