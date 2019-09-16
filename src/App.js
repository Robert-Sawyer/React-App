import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

//Poniżej zastepujemy class App na const app, ponieważ zmieniliśmy teraz tworzymy aplikację za pomocą React Hook - funkcyjnie.
const app = props => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: "Sawyer", age: 27},
            {name: "Jack", age: 27},
            {name: "Kate", age: 25}
        ],
        otherState: 'some other value'
    });

    const switchNameHandler = () => {
        setPersonsState({
            persons: [
                {name: "Robert", age: 27},
                {name: "Jack", age: 27},
                {name: "Kate", age: 26}
            ]
        });
    };
        return (
            <div className="App">
                <h1>Hi, This is a Robert Sawyer's React Application</h1>
                <p>Hello, Mr. Clean!</p>
                <button onClick={switchNameHandler}>Switch name</button>
                <Person
                    name={personsState.persons[0].name}
                    age={personsState.persons[0].age}
                />
                <Person
                    name={personsState.persons[1].name}
                    age={personsState.persons[1].age}>
                    I am a Doctor
                </Person>
                <Person
                    name={personsState.persons[2].name}
                    age={personsState.persons[2].age}
                />

            </div>
        );
    }

    export default app;
//
// state = {
//     persons: [
//         {name: "Sawyer", age: 27},
//         {name: "Jack", age: 27},
//         {name: "Kate", age: 25}
//     ],
//     otherState: 'some other value'
// }
//
// switchNameHandler = () => {
//     // console.log('was clicked');
//     this.setState({
//         persons: [
//             {name: "Robert", age: 27},
//             {name: "Jack", age: 27},
//             {name: "Kate", age: 26}
//         ]
//     })
//
// }