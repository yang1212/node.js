import React, {Component, PropTypes} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import PureRenderMixiin from 'react-addons-pure-render-mixin'
import Admin from "./admin/Admin";
import './reset.css'

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
            <Route path='/admin' component={Admin}/>
          </Switch>
        </div>
      </Router>
    )
  }
}


export default AppIndex

// import React, {Component, PropTypes} from 'react'
// import PureRenderMixiin from 'react-addons-pure-render-mixin'
// import {
//     BrowserRouter as Router,
//     Route,
//     Switch
// } from 'react-router-dom'
// import Banner from "./components/banner/Banner";
// import Admin from "./admin/Admin";
// import Front from './front/Front'
// import './reset.css'

// class AppIndex extends Component {

//   constructor(props) {
//     super(props);
//     this.shouldComponentUpdate = PureRenderMixiin.shouldComponentUpdate.bind(this);
//   }

//   render() {
//     return (
//       <Router>
//         <div>
//           <Switch>
//             <Route path='/admin' component={Admin}/>
//             <Route component={Front}/>
//           </Switch>
//         </div>
//       </Router>
//     )
//   }
// }


// export default AppIndex