import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render() {
      //TO, CO PONIŻEJ TO NIE HTML, TYLKO JSX
    return (
        <div className="App">
          <h1>Hi, This is a Robert Sawyer's React Application</h1>
            <p>Hello, Mr. Clean!</p>
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
