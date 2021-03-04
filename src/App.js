import logo from './logo.svg';
import './App.css';
import grapes from './assets/imgs/grapes.png';
import banana from './assets/imgs/banana.png';
import mango from './assets/imgs/mango.png';
import orange from './assets/imgs/orange.png';
import bowl from './assets/imgs/bowl.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        fruitbowl
        <div className="fruitbowl">
          <img src={grapes} />
          <img src={banana} />
          <img src={mango} />
          <img src={orange} />
          {/* <img src={bowl} /> */}
        </div>
      </header>
      </div>
  );
}

export default App;
