import React, {Component, PropTypes} from 'react'
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import AdminMenu from "../../components/adminMenu/AdminMenu";
import style from './style.css'
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
          <Route path={`${url}/calculate`} component={DataPanel}/>
          <Route path={`${url}/calculateShow`} component={DataPanelDetail}/>
          <Route path={`${url}/calculateChart`} component={DataPanelChart}/>
        </Switch>
      </div> 
    )
  }
}

export default Admin