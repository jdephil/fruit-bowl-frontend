import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Fruitbowl from './components/Fruitbowl'
import MentalHealth from './components/MentalHealth'
import RelationalHealth from './components/RelationalHealth'
import Nutrition from './components/Nutrition'
import Fitness from './components/Fitness'
import TryThis from './components/TryThis'
import Faves from './components/Faves'

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