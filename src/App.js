import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Error404 from './Components/Pages/Error/Error404';
import LoginStatus from './Components/SideBar/Logged/LoginBox';
import Login from './Components/Pages/Login/Login';
<<<<<<< HEAD
import OrderStatus from './Components/Pages/OrderStatus/OrderStatus';
=======
import Register from './Components/Pages/Register/Register';
>>>>>>> 543ff5edb3c4e7c9666776d977712abd955ae6a0

function App() {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/" component={OrderStatus}/>
        <Route component={OrderStatus} />
        <Route component={Error404} />
=======
        <Route exact path="/" component={Dashboard}/>
        <Route path ="/login" component={Login} />
        <Route path ="/register" component={Register} />
        <Route path ="/dashboard" component={Dashboard} />
        <Route path ="/error404" component={Error404} />
>>>>>>> 543ff5edb3c4e7c9666776d977712abd955ae6a0
      </Switch>
    </BrowserRouter>
  );
}

export default App;
