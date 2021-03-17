import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Fruitbowl from './Fruitbowl'
import MentalHealth from './MentalHealth'
import RelationalHealth from './RelationalHealth'
import Nutrition from './Nutrition'
import Fitness from './Fitness'
import TryThis from './TryThis'
import Faves from './Faves'

function App() {

  return (
    <div className="App"> 
      <BrowserRouter>
        <Switch>
           <Route exact path='/' component={Fruitbowl}  />
           {/* <Route exact path='/trythis' component={TryThis} /> */}
           <Route path='/mentalhealth' component={MentalHealth} />
           <Route path='/relationalhealth' component={RelationalHealth} />
           <Route path='/nutrition' component={Nutrition} />
           <Route path='/fitness' component={Fitness} />
           <Route path='/favorites' component={Faves} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;