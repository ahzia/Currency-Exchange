import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import Exchange from './components/pages/Exchange';
import Favorite from './components/pages/Favorite';
import Home from './components/pages/Home';
import Details from './components/pages/Details';
import { fetchRequestForexRates } from './redux/forexData/forex';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRequestForexRates());
  }, []);

  const forexRates = useSelector((state) => state.forex);
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home data={forexRates} />
          </Route>
          <Route path="/details/:currencyName" component={Details} />
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
};

export default App;
