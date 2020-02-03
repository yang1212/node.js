import React, {Component, PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import style from './style.css'
import {Input, Select, Button, Modal} from 'antd';
import { Loading } from '../components/loading/Loading';

class DataPanelChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>数据展示</h2>
      </div>
    )
  }
}

export default DataPanelChart