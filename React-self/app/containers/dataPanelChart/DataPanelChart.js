import React, {Component, PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import {Input, Select, Button, Modal} from 'antd';
import { getListData } from './service'
import { Loading } from '../components/loading/Loading';
const Option = Select.Option;
const echarts = require('echarts/lib/echarts') //必须
require('echarts/lib/chart/bar') //图表类型
require('echarts/lib/chart/line')
require('echarts/lib/component/title') //标题插件

class DataPanelChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      priceList: [],
      tagList: [
        {
          type: 'eat',
          name:'餐饮',
          value: 0,
        }, 
        { 
          type: 'RendHouse',
          name:'住房缴费',
          value: 0,
        },  
        {
          type: 'clothes',
          name:'服饰美容',
          value: 0,
        },
        {
          type: 'travel',
          name:'旅游',
          value: 0,
        },
        {
          type: 'traffic',
          name:'交通',
          value: 0,
        },
        {
          type: 'amusement',
          name:'娱乐',
          value: 0,
        },
        {
          type: 'study',
          name:'学习',
          value: 0,
        },
        {
          type: 'medical',
          name:'医疗',
          value: 0,
        }
      ],
      monthList: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      month: '一月'
    }
  }
  async getList() { // 暂时数据放前端处理
    const res = await getListData();
    this.setState({
      list: res.data,
    })
    console.log(res.data)
    if (res.code === 0) {
      this.state.tagList.forEach((item, index) => {
        res.data.forEach((items, indexs) => {
          if (items.tag === item.type) {
            this.state.tagList[index].value += items.price
          } 
        })
      })
      let myBarChart = echarts.init(this.refs.barChart) //初始化echarts
      let BarOptions = this.setPieOption(this.state.tagList)
      myBarChart.setOption(BarOptions)
    }
  };
  componentDidMount() {
    this.getList()
    let myLineChart = echarts.init(this.refs.lineChart)
    let lineOptions = this.setLineOption(this.state.tagList)
    myLineChart.setOption(lineOptions)
  }
  //柱状图表配置函数
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
          data: data, //传入外部的data数据
        }
      ],
      xAxis: {
        type: 'category',
        data: ['餐饮', '住房缴费', '服饰美容', '旅游', '交通', '娱乐', '学习', '医疗']
      },
      yAxis: {},
    }
  }  
  setLineOption() {
    return {
      title: {
        text: '折线图'
      },
      tooltip: {
        trigger: 'axis'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }],
      xAxis: {
        type: 'category',
        data: this.state.monthList
      },
      yAxis: {}
    }
  }
  render() {
    return (
      <div>
        <div className="barBox"> 
          <Select
            className="selectBtn"
            placeholder={'请选择'}
            value={this.state.month}>
            {
              this.state.monthList.map((item) => (
                <Option key={item}>{item}</Option>
              ))
            }
          </Select>
          <div ref="barChart" style={{width: "100%", height: "400px"}}></div>
        </div>
        <div ref="lineChart" style={{width: "100%", height: "400px"}}></div>
      </div>
    )
  }
}

export default DataPanelChart