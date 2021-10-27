import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Error404 from './Components/Pages/Error/Error404';
import Login from './Components/Pages/Login/Login';
import OrderStatus from './Components/Pages/OrderStatus/OrderStatus';
import Register from './Components/Pages/Register/Register';
import CustomerRegister from './Components/Pages/CustomerRegister/CustomerRegister';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path ="/login" component={Login} />
        <Route exact path ="/register" component={Register} />
        <Route exact path ="/order" component={OrderStatus} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
