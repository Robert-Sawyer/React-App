import React from 'react';

const validationComponent = (props) => {
    let validationMessage = 'Text too short';

    if (props.inputLenght > 5) {
        validationMessage = 'Text long enough';
    }
    return (
        <div>
            {/*{*/}
            {/*    ALTERNATYWA DO LET I IF*/}
            {/*    props.inoutLenght > 5 ?*/}
            {/*        <p>Text long enough</p> :*/}
            {/*        <p>Text too short!</p>*/}
            {/*}*/}

            <p>{validationMessage}</p>

        </div>
    );
};

export default validationComponent;