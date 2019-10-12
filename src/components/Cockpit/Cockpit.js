import React from 'react';
import classes from "./Cockpit.module.css";

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Hi, This is a Robert Sawyer's React Application</h1>
            <p className={assignedClasses.join(' ')}>Hello, Mr. Clean!</p>
            <button
                className={btnClass}
                key={'unique key'}
                onClick={props.switched}>Switch name
            </button>

            <button
                className={btnClass}
                onClick={props.switchedAlt}>Switch name alternative way
            </button>
            {/*poprzez bind możemy wykorzystać argument dostarczany do switchNameHandler*/}

            <button
                className={btnClass}
                onClick={props.clicked}>Hide Person
            </button>
        </div>
    )
};


export default cockpit;