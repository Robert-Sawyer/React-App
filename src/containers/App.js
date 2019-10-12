import React, {Component} from 'react';
import classes from './App.module.css';
import Person from '../components/Persons/Person/Person';
import ValidationComponent from '../Exercise2/ValidationComponent';
import Char from '../Exercise2/Char';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
// import UserInput from "./Person/UserInput";
// import UserOutput from "./Person/UserOutput";

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

    // ĆWICZENIE
    // usernameChangedHandler = (event) => {
    //     this.setState({username: event.target.value})
    // }

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

        // this.setState({
        //     persons: [
        //         {name: "Sawyer", age: 27},
        //         {name: event.target.value, age: 27},
        //         // event.target.value pobiera wartość z inputa z Person i wstawia zawartość w miejsce name w tym componencie
        //         {name: "Kate", age: 26}
        //     ]
        // })
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
        let btnClass = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundary key={person.id}>
                             {/*key jest potrzebne dla reacta i musi być unikalne*/}
                            <Person
                                click={() => this.deletePerson(index)}
                                name={person.name}
                                age={person.age}
                                changed={(event) => this.nameChangedHandler(event, person.id)}
                            />
                        </ErrorBoundary>
                    })}
                    {/*Już nie musimy dodawać każdego komponenetu osobno jak niżej, tylko zwracamy każdy obiekt state.person jako JSX*/}
                    {/*<Person*/}
                    {/*    name={this.state.persons[0].name}*/}
                    {/*    age={this.state.persons[0].age}/>*/}
                    {/*<Person*/}
                    {/*    name={this.state.persons[1].name}*/}
                    {/*    age={this.state.persons[1].age}*/}
                    {/*    click={this.switchNameHandler.bind(this, "Bobby")}*/}
                    {/*    changed={this.nameChangedHandler}>*/}
                    {/*    I am a Doctor*/}
                    {/*</Person>*/}
                    {/*<Person*/}
                    {/*    name={this.state.persons[2].name}*/}
                    {/*    age={this.state.persons[2].age}/>*/}
                </div>
            );
            btnClass = classes.Red;
        }
        const assignedClasses = [];
        if (this.state.persons.length <= 2) {
            assignedClasses.push(classes.red);
        }
        if (this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold);
        }
        //TO, CO PONIŻEJ TO NIE HTML, TYLKO JSX
        return (

            <div className={classes.App}>
                <h1>Hi, This is a Robert Sawyer's React Application</h1>
                <p className={assignedClasses.join(' ')}>Hello, Mr. Clean!</p>
                <button
                    className={btnClass}
                    key={'unique key'}
                    onClick={() => this.switchNameHandler('Sawyer!!!')}>Switch name
                </button>

                <button
                    className={btnClass}
                    onClick={() => this.switchNameHandler('Sawyer!')}>Switch name alternative way
                </button>
                {/*poprzez bind możemy wykorzystać argument dostarczany do switchNameHandler*/}

                <button
                    className={btnClass}
                    onClick={this.togglePersonsHandler}>Hide Person
                </button>
                {persons}
                {/*{*/}
                {/*    ALTERNATYWNY SPOSÓB DLA HIDE PERSONS*/}
                {/*    this.state.showPersons === true ?*/}
                {/*    <div>*/}
                {/*        <Person*/}
                {/*            name={this.state.persons[0].name}*/}
                {/*            age={this.state.persons[0].age}/>*/}
                {/*        <Person*/}
                {/*            name={this.state.persons[1].name}*/}
                {/*            age={this.state.persons[1].age}*/}
                {/*            click={this.switchNameHandler.bind(this, "Bobby")}*/}
                {/*            changed={this.nameChangedHandler}>*/}
                {/*            I am a Doctor*/}
                {/*        </Person>*/}
                {/*        <Person*/}
                {/*            name={this.state.persons[2].name}*/}
                {/*            age={this.state.persons[2].age}/>*/}
                {/*    </div> : null*/}
                {/*}*/}
                <br/>
                {/*ĆWICZENIE*/}
                {/*<UserInput*/}
                {/*    changed={this.usernameChangedHandler}*/}
                {/*    currentName={this.state.username}/>*/}

                {/*<UserOutput userName={this.state.username}/>*/}
                {/*<UserOutput userName={this.state.username}/>*/}
                {/*<UserOutput userName="Kate"/>*/}
                <br/>
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
        //KOD WYŻEJ MOŻNA ZASTĄPIĆ TYM PONIŻSZYM, EFEKT JEST TEN SAM
        //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, This is a Robert Sawyer\'s React Application'));
    }

    //Od początku: zwracamy tworzony komponent reacta za pomocą metody createElement i przekazujemy do niej co najmniej trzy argumenty:
    //tworzony element (np. div), potem konfiguracje tego elementu (gdy wybierzemy null wtedy tworzy się zwykły, prosty div, więc można do niego
    //dodać np. {className: 'App'} - wtedy div mędzie miał klasę App, która może mieć właśne style css i gdy nazwa klasy będzie się zgadzać wtedy
    //zostaną pobrane style css dla niej ustawiona i cały div otrzyma stylowanie z css (z pliku przekazanego w importach).
// Gdy chcemy utworzyć element w elemencie (niższego poziomu) wtedy jako trzeci argument dajemy kolejną metodę createElement i robymy to samo.
//Gdy chcemy aby w danym elemencie znajdował się tekst nie będący juz żadnym elementem wtedy jako trzeci argument przekazujemy już zwykły tekst.
    //W jednym returnie JSX może być tylko jeden element nadrzędny. Można wrzucać w tej jeden element wiele podelemetów, ale np div może być 1
    //Dla określenia klasy użuwamy className bo class jest słowem kluczowym w JS.
}

export default App;

