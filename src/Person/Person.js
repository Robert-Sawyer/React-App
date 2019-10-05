import React from 'react';
import './Person.css';

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>I am {props.name} and I'm {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
    // <p>Hey, this is my favourite leaf! I am {Math.floor(Math.random() * 30)} years old</p>
    //żeby dodać dynamiczny element w tekście zawieramy funkcję w klamrowych nawiasach

    //Gdy chcemy dodać jakiś element zdefiniowany gdzies indziej (np w App.js) używamy do tego nawiasów klamrowych i metody children
    //Przekazany w tn sposób element powinien znajdować się między tagami Person w App co czyni go jego dzieckiem. Cały return zamykamy
    // w nawiasach zwykłych.

    //Wyjaśnienie: onClick - dodaliśmy click jako properties w App, więc odnosimy się do niego tutaj za pomocą props, tak samo jak w przypadku
    //name, age i children.
}

export default person;