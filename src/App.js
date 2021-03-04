import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Fruitbowl from './Fruitbowl';
import TryThis from './TryThis';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        fruitbowl
        <Fruitbowl />
      </header>
        <Switch>
          <Route path='/' component={ Fruitbowl } />
          <Route path='/trythis' component={ TryThis } />
        </Switch>
      </BrowserRouter>

      
      </div> 
  );
}

export default App;
