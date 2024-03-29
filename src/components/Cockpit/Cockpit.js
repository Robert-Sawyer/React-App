import React, {useEffect, useRef, useContext} from 'react';
import classes from "./Cockpit.module.css";
import AuthContext from '../../context/auth-context';

//cockpit jest komponentem funkcyjnym, czyli uzywamy w nim React Hook
const cockpit = (props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hidePerBtnRef = useRef(null);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const authContext = useContext(AuthContext);
    console.log(authContext.authenticated);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Http request...
        // setTimeout(() => {
        //     alert('Saved data to cloud');
        // }, 1000);
        hidePerBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);
    //jeśli chcę, żeby useEffect uruchamiał się tylko gdy coś zmienię, nie za każdym razem, gdy zwinę/rozwinę persons
    //dodaję w [] odniesienie do tego elementu, zyskując doń dostęp za pomocą props (props.persons]. Można użyć useEffect
    // wiele razy. jeśli chcę, żeby alert wyświetlał się tylko za pierwszym uruchomieniem persons i nie pokazywał
    // się podczas zmian, wtedy zostawiam puste nawiazy []

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
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
                ref={hidePerBtnRef}
                className={btnClass}
                onClick={props.clicked}>Hide Person
            </button>
            {/*W komponentach funkcyjnych można użyć contextu wyłąćznie za pomocą consumera, nie jak w class-based*/}
            {/*komponentach w formie statycznej zmiennej*/}
            <button onClick={authContext.login}>Log In</button>
        </div>
    )
};


export default React.memo(cockpit);

//React.memo() zapobiega niepotrzebnemu wywoływaniu elementów tego komponentu - odpowiednik shouldCompopnentUpdate w
//class-based components.
//poza tym musieliśmy zmienić person.lenght na pojedyncza zmienną personLength (również w App) ponieważ wcześniej było
//wykorzystywane persons, które jest częścią innego komponentu i gdy zmieniane było persons to cockpit też