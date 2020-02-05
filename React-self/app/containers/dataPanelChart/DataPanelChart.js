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
    }
  }
  async getList() { // 暂时数据放前端处理
    const res = await getListData();
    this.setState({
      list: res.data,
    })
    if (res.code === 0) {
      this.state.tagList.forEach((item, index) => {
        res.data.forEach((items, indexs) => {
          if (items.tag === item.type) {
            this.state.tagList[index].value += items.price
          } 
        })
      })
      let myChart = echarts.init(this.refs.barChart) //初始化echarts
      let options = this.setPieOption(this.state.tagList)
      //设置options
      myChart.setOption(options)
    }
  };
  componentDidMount() {
    this.getList()
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
  render() {
    return (
      <div>
        <h2>数据展示</h2>
        <div className="pie-react">
          <div ref="barChart" style={{width: "100%", height: "400px"}}></div>
        </div>
      </div>
    )
  }
}

export default DataPanelChart