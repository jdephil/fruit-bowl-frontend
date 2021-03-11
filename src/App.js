import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Fruitbowl from './Fruitbowl'
import MentalHealth from './MentalHealth'
import RelationalHealth from './RelationalHealth'
import Nutrition from './Nutrition'
import Fitness from './Fitness'
import TryThis from './TryThis'

function App() {

  return (
    <div className="App"> 
      <BrowserRouter>
        <Switch>
           <Route exact path='/' component={Fruitbowl}  />
           <Route exact path='/trythis' component={TryThis} />
           <Route exact path='/mentalhealth' component={MentalHealth} />
           <Route exact path='/relationalhealth' component={RelationalHealth} />
           <Route exact path='/nutrition' component={Nutrition} />
           <Route exact path='/fitness' component={Fitness} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;