import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Switch, Route } from 'react-router-dom';
=======



import { BrowserRouter, Switch, Route } from 'react-router-dom';

>>>>>>> a38b80f70579f4a07f3d5fbf462a535406bcc4e4
import Fruitbowl from './Fruitbowl'
import TryThis from './TryThis'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
<<<<<<< HEAD
            <Route exact path='/' component={Fruitbowl} />
            <Route exact path='/trythis' component={TryThis} />
        </Switch>
        </BrowserRouter>
=======
           <Route exact path='/' component={Fruitbowl} />
           <Route exact path='/trythis' component={TryThis} />
        </Switch>
>>>>>>> a38b80f70579f4a07f3d5fbf462a535406bcc4e4
    </div>
  );
}

export default App;