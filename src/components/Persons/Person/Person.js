import React, {Component} from 'react';
import classes from './Person.module.css';
import Aux from '../../../hoc/AuxComponent';
import withClass from '../../../hoc/WithClass';


class Person extends Component {
    render() {
        console.log('[Person.js] rendering...')
        return (
            //Możemy zwrócić wiele elementów JSX, nie tylko jeden, ale musza być w tablicy - można usunąc diva i
            //zastąpić nawiasy okrągłe w return kwadratowymi, przedzielić elementy przecinkami i nadać każdemu
            //elementowi unikalny key, wtedy zadziała tak samo jak teraz bez błędów i warningów
            <Aux>
                {/*<div className={classes.Person}>*/}
                <p key='i1' onClick={this.props.click}>I am {this.props.name} and I'm {this.props.age} years old</p>
                <p key='i2'>{this.props.children}</p>
                <input key='i3' type="text" onChange={this.props.changed} value={this.props.name}/>
                {/*</div>*/}
            </Aux>
        )
    }


    // <p>Hey, this is my favourite leaf! I am {Math.floor(Math.random() * 30)} years old</p>
    //żeby dodać dynamiczny element w tekście zawieramy funkcję w klamrowych nawiasach

    //Gdy chcemy dodać jakiś element zdefiniowany gdzies indziej (np w App.js) używamy do tego nawiasów klamrowych i metody children
    //Przekazany w tn sposób element powinien znajdować się między tagami Person w App co czyni go jego dzieckiem. Cały return zamykamy
    // w nawiasach zwykłych.

    //Wyjaśnienie: onClick - dodaliśmy click jako properties w App, więc odnosimy się do niego tutaj za pomocą props, tak samo jak w przypadku
    //name, age i children.

    //W class-based components samo props nie działa, musi być poprzedzone słowem 'this'.
}

export default withClass(Person, classes.Person);

//gdy komponent jest funkcyjny  i ma const zamiast class (wtedy używa się nazwy z małęj litery) to po zmianie na
//class-based component zmianiamy nazwe na wielką literę i tak samo export