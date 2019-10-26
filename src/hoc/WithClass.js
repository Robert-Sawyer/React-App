import React from 'react';

const withClass = props => (
    <div className={props.classes}>
        {props.children}
    </div>
);

// const withClass = (WrappedComponent, className) => {
//  return props =>(
//     <div className={className}>
//         <WrappedComponent/>
//     </div>
//  );
// };

export default withClass;

//===ALTERNATYWNY SPOSÓB NA UTWORZENIE TEGO ELEMENTU===

// const withClass = (WrappedComponent, className) => {
//  return props =>(
//     <div className={className}>
//         <WrappedComponent/>
//     </div>
//  );
// };
//wtedy w App.js dodajemy import Aux from... i zmieniamy w imporcie withClas na małą literę na początku, ponieważ nie
//importujemy już wtedy komponentu funkcyjnego tylko zwykłą funkcję. Zamieniamy <WithClass> na <Aux> i w export default
//zamiast App zapisujemy withClass(App, classes.App), analogicznie do funkcji powyżej z dwoma parametrami.
//Przykąłd zastosowania tego rozwiązania jest w Person.js