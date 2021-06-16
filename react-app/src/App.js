import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as React from 'react'
import Home from './component/about'
import About from './component/about'
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" render={() => <Home/>}>
          <Route path="/about"  render={() => <About/>} />
        </Route>
      </Router>
    );
  }
}
 
export default App;
