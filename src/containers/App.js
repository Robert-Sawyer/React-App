import React, {Component} from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import ValidationComponent from '../Exercise2/ValidationComponent';
import Char from '../Exercise2/Char';
import Cockpit from '../components/Cockpit/Cockpit';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';


//importuj zawsze nazwy z wielkich liter żeby Rwact mógł je odróżnić od elementów JSX

class App extends Component {
    //ustawiamy state, żeby móc tworzyć obiekty i odnosić się do nich przy returnie JSX
    state = {
        persons: [
            {id: 'dsg', name: "Sawyer", age: 27},
            {id: 'sfg', name: "Jack", age: 27},
            {id: 'jgh', name: "Kate", age: 25}
        ],
        username: "Bob",
        otherState: 'some other value',
        showPersons: false,
        userInput: ''
    }
    switchNameHandler = (newName) => {
        // console.log('was clicked');
        this.setState({
            persons: [
                {name: newName, age: 27},
                {name: "Jack", age: 27},
                {name: "Kate", age: 26}
            ]
        })
    }

    deletePerson = (personIndex) => {
        // const person = this.state.persons.slice(); Gdyby nie było slice podmieniałoby oryginalny obiekt, a tak, robi kopię.
        const person = [...this.state.persons];
        // Powyżej bardziej nowoczesna metoda podmieniania originalnego obiektu kopią
        person.splice(personIndex, 1);
        // Splice - Metoda, która usuwa element
        this.setState({persons: person});
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };
        // const person = Object.assign({}, this.state.persons[personIndex]); - ALTERNATYWA

        person.name = event.target.value;

        const personList = [...this.state.persons];
        personList[personIndex] = person;

        this.setState({persons: personList});
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    outputTextLenght = (event) => {
        this.setState({userInput: event.target.value});
    }

    deleteChar = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({userInput: updatedText});
    };

    render() {
        const charList = this.state.userInput.split('').map((ch, index) => {
            return <Char
                character={ch}
                key={index}
                click={() => this.deleteChar(index)}/>
        });
// split z pustym stringiem w środku stworzy osobne ramki ze znakami z inputa. Gdyby nie było rozdzielacza/separatora była by 1 ramka

        let persons = null;

        if (this.state.showPersons) {
            persons =
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePerson}
                    changed={this.nameChangedHandler}/>;
        }
        return (

            <div className={classes.App}>
                <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                    switched={() => this.switchNameHandler('Sawyer!!!')}
                    switchedAlt={() => this.switchNameHandler('Sawyer!')}/>
                {persons}
                <br/><br/>

                {/*===CWICZENIE 2===*/}
                <input
                    type="text"
                    onChange={this.outputTextLenght}
                    value={this.state.userInput}/>
                <p>{this.state.userInput}</p>
                <ValidationComponent inputLenght={this.state.userInput.length}/>
                {charList}
            </div>
        );
    }
}

export default App;