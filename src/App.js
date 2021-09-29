import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Error404 from './Components/Pages/Error/Error404';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
