
import './App.css';
import Home from './components/Home';
import SignupPage from './components/signupPage'
import {Route, Switch} from 'react-router-dom'

function App() {

  

  return (
    <Switch>
      <Route exact path="/" component={SignupPage}/>
      <Route exact path="/home" component={Home}/>
    </Switch>
  );
}

export default App;
