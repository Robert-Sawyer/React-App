import React, {useEffect} from 'react';
import classes from "./Cockpit.module.css";

const cockpit = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Http request...
        setTimeout(() => {
            alert('Saved data to cloud');
        }, 1000);
    }, []);
    //jeśli chcę, żeby useEffect uruchamiał się tylko gdy coś zmienię, nie za każdym razem, gdy zwinę/rozwinę persons
    //dodaję w [] odniesienie do tego elementu, zyskując doń dostęp za pomocą props (props.persons]. Można użyć useEffect
    // wiele razy. jeśli chcę, żeby alert wyświetlał się tylko za pierwszym uruchomieniem persons i nie pokazywał
    // się podczas zmian, wtedy zostawiam puste nawiazy []

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
            <h1>{props.title}</h1>
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