import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Error404 from './Components/Pages/Error/Error404';
import Login from './Components/Pages/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/dashboard"component={Dashboard} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
