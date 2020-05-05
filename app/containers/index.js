import React, {Component, PropTypes} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import PureRenderMixiin from 'react-addons-pure-render-mixin'
import Admin from "./admin/Admin";

class AppIndex extends Component {

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixiin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path='/' component={Admin}/>
          </Switch>
        </div>
      </Router>
    )
  }
}


export default AppIndex
