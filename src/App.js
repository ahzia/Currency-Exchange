import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Exchange from './components/pages/Exchange';
import Favorite from './components/pages/Favorite';
import Home from './components/pages/Home';

const App = () => (
  <Router>
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
);

export default App;
