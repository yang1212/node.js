import React, {Component, PropTypes} from 'react'
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import './style.less'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import DataPanel from "../dataPanel/DataPanel"
import DataPanelDetail from '../dataPanelDetail/DataPanelDetail'
import DataPanelChart from '../dataPanelChart/DataPanelChart'
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    const {url} = this.props.match;
    return (
      <div>
        <Banner/>
        <Footer history={this.props.history}/>
        <Switch>
          <Route path='/calculate' component={DataPanel}/>
          <Route path='/calculateShow' component={DataPanelDetail}/>
          <Route path='/calculateChart' component={DataPanelChart}/>
        </Switch>
      </div> 
    )
  }
}

export default Admin