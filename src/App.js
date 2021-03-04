import './App.css';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Fruitbowl from './Fruitbowl'
import TryThis from './TryThis'


function App() {
  return (
    <div className="App">
      <main>
        {/* <Switch> */}
            <Route path='/' exact component={Fruitbowl} />
            <Route path='/trythis' component={TryThis} />
        {/* </Switch> */}
      </main>
    </div>
  );
}

export default App;
