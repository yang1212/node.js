import React, {Component, PropTypes} from 'react'
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom'
import AdminMenu from "../../components/adminMenu/AdminMenu";
import NotFound from "../../components/notFound/NotFound";
import style from './style.css'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import DataPanel from "../dataPanel/DataPanel"
import DataPanelDetail from '../dataPanelDetail/DataPanelDetail'
import DataPanelChart from '../dataPanelChart/DataPanelChart'

class Admin extends Component {
    constructor(props) {
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render() {
        const {url} = this.props.match;
        return (
            <div className={style.container}>
                <div className={style.menuContainer}>
                    <AdminMenu history={this.props.history}
                        url={this.props.adminUrl}/>
                </div>
                <div className={style.contentContainer}>
                    <Switch>
                        <Route path={`${url}/calculate`} component={DataPanel}/>
                        <Route path={`${url}/calculateShow`} component={DataPanelDetail}/>
                        <Route path={`${url}/calculateChart`} component={DataPanelChart}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </div> 
        )
       
    }
}

export default Admin