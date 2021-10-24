import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Error404 from './Components/Pages/Error/Error404';
import LoginStatus from './Components/SideBar/Logged/LoginBox';
import Login from './Components/Pages/Login/Login';
import Register from './Components/Pages/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path ="/login" component={Login} />
        <Route path ="/register" component={Register} />
        <Route path ="/dashboard" component={Dashboard} />
        <Route path ="/error404" component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
