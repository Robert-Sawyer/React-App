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

    const switchNameHandler = (newName) => {
        setPersonsState({
            persons: [
                {name: newName, age: 27},
                {name: "Jack", age: 27},
                {name: "Kate", age: 26}
            ]
        });
    };

    const nameChangedHandler = (event) => {
        setPersonsState({
            persons: [
                {name: "Sawyer", age: 27},
                {name: event.target.value, age: 27},
                // event.target.value pobiera wartość z inputa z Person i wstawia zawartość w miejsce name w tym componencie
                {name: "Kate", age: 26}
            ]
        });
    };
    const styles = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };
        return (
            <div className="App">
                <h1>Hi, This is a Robert Sawyer's React Application</h1>
                <p>Hello, Mr. Clean!</p>
                <button
                    style={styles}
                    onClick={switchNameHandler.bind(this, 'Bob')}>Switch name</button>
                <button onClick={() => switchNameHandler('Sawyer!')}>Switch name alternative way</button>
                {/*poprzez bind możemy wykorzystać argument dostarczany do switchNameHandler*/}

                <Person
                    name={personsState.persons[0].name}
                    age={personsState.persons[0].age}
                />
                <Person
                    name={personsState.persons[1].name}
                    age={personsState.persons[1].age}
                    click={switchNameHandler.bind(this, 'Bobby')}
                    changed={nameChangedHandler}>I am a Doctor
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