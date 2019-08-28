import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
      //TO, CO PONIŻEJ TO NIE HTML, TYLKO JSX
    return (
        <div className="App">
          <h1>Hi, This is a Robert Sawyer's React Application</h1>
            <p>Hello, Mr. Clean.</p>
        </div>
    );
    //KOD WYŻEJ MOŻNA ZASTĄPIĆ TYM PONIŻSZYM, EFEKT JEST TEN SAM
    //   return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, This is a Robert Sawyer\'s React Application'));
  }
}

export default App;
