import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Fruitbowl from './Fruitbowl'
import TryThis from './TryThis'


function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
        <Switch>
           <Route exact path='/' component={Fruitbowl} />
           <Route exact path='/trythis' component={TryThis} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;