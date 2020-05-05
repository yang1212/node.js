import React, {Component, PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import {Input, Select, Button, Modal} from 'antd';
import { getListData, delListData } from './service'
import { Loading } from '../components/loading/Loading';

class DataPanelDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }
  componentDidMount() {
    this.getList();
  }
  async getList() { //得到列表数据
    const res = await getListData()
    this.setState({
      list: res.data,
    })  
  };
  async deleteList(value) { // 删除数据
    let tempId = {
      id: value
    }
    let res = await delListData(tempId)
    if (res.code === 0) {
      const { list } = this.state;
      list.forEach((item, index) => {
        if (item._id === value) {
          list.splice(index, 1);
          this.setState({
            list: list
          })
        }
      })
    }
  }

  render() {
    const { list } = this.state;
    return (
      <div className="dataRecordBox">
        <div className="dataPanel">
          {  
            list.length > 0 ? 
              list.map((item, index) => {
                return (
                  <div key={index}  className="listRow"> 
                    {item.name}：{item.price}元, {item.date}
                    <span className="deleteBtn" onClick={this.deleteList.bind(this, (item._id))}>Delete</span>
                  </div>
                )
              }) : <Loading></Loading>
          }
        </div>
      </div>
    )
  }
}

export default DataPanelDetail