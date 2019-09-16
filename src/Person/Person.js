import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I am {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
    // <p>Hey, this is my favourite leaf! I am {Math.floor(Math.random() * 30)} years old</p>
    //żeby dodać dynamiczny element w tekście zawieramy funkcję w klamrowych nawiasach

    //Gdy chcemy dodać jakiś element zdefiniowany gdzies indziej (np w App.js) używamy do tego nawiasów klamrowych i metody children
    //Przekazany w tn sposób element powinien znajdować się między tagami Person w App co czyni go jego dzieckiem. Cały return zamykamy
    // w nawiasach zwykłych.
}

export default person;