import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Basket from './Components/Checkout/Basket';
import Dashboard from './Components/Dashboard';
import Error404 from './Components/Pages/Error/Error404';
import Login from './Components/Pages/Login/Login';
import OrderStatus from './Components/Pages/OrderStatus/OrderStatus';
import Register from './Components/Pages/Register/Register';
import CustomerRegister from './Components/Pages/CustomerRegister/CustomerRegister';
import Payment from './Components/Pages/Payment/Payment';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/payment" component={Payment}/>
        <Route exact path="/register" component={Register} />
        <Route exact path="/order" component={OrderStatus} />
        <Route exact path="/basket" component={Basket} />
        <Route exact path="/customerreg" component={CustomerRegister} />
        <Route exact path="/error" component={Error404} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
