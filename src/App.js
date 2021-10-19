import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Exchange from './components/pages/Exchange';
import Favorite from './components/pages/Favorite';
import Home from './components/pages/Home';

const App = () => (
  <div className="conatainer">
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/favorite" exact>
          <Favorite />
        </Route>
        <Route path="/exchange" exact>
          <Exchange />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default App;
