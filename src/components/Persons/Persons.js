import React from 'react';

import Person from './Person/Person';
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

const persons = (props) => {
    console.log('[Persons.js] rendering....');
    return props.persons.map((person, index) => {
        return (
            <ErrorBoundary key={person.id}>
                {/*key jest potrzebne dla reacta i musi być unikalne*/}
                <Person
                    click={() => props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    changed={(event) => props.changed(event, person.id)}
                />
            </ErrorBoundary>
        );
    });
};

export default persons;