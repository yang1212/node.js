import React, {Component, PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import style from './style.css'
import {Input, Select, Button, Modal} from 'antd';
import { getListData } from './service'
import { Loading } from '../components/loading/Loading';
const echarts = require('echarts/lib/echarts') //必须
require('echarts/lib/chart/bar') //图表类型
require('echarts/lib/component/title') //标题插件

class DataPanelChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    }
  }
  async getList() { //得到列表数据
    const res = await getListData()
    this.setState({
      list: res.data,
    })  
  };
  componentDidMount() {
    let tag = [
      {
        value: 1, name: '餐饮'
      },
      {
        value: 22, name: 'fu'
      }
    ]
    const { data } = this.props //外部传入的data数据
    let myChart = echarts.init(this.refs.pieReact) //初始化echarts
    let options = this.setPieOption(tag)
    //设置options
    myChart.setOption(options)
  }
  //一个基本的echarts图表配置函数
  setPieOption(data) {
    return {
      title: {
        text: '柱状图'
      },
      tooltip: {},
      series : [
        {
          name: '比例',
          type: 'bar',
          data: [2, 4, 3, 5, 3], //传入外部的data数据
        }
      ],
      xAxis: {
        type: 'category',
        data: ['餐饮', '住房缴费', '服饰美容', '旅游', '交通', '娱乐', '学习', '医疗']
      },
      yAxis: {},
    }
  }  
  render() {
    return (
      <div>
        <h2>数据展示</h2>
        <div className="pie-react">
          <div ref="pieReact" style={{width: "100%", height: "400px"}}></div>
        </div>
      </div>
    )
  }
}

export default DataPanelChart