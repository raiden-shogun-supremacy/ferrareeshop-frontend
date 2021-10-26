import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Error404 from './Components/Pages/Error/Error404';
import LoginStatus from './Components/SideBar/Logged/LoginBox';
import Login from './Components/Pages/Login/Login';
import OrderStatus from './Components/Pages/OrderStatus/OrderStatus';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={OrderStatus}/>
        <Route component={OrderStatus} />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
