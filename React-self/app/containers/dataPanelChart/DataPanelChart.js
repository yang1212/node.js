import React, {Component, PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'
import {Input, Select, Button, DatePicker, } from 'antd';
import { getListData } from './service'
import { Loading } from '../components/loading/Loading';
const { MonthPicker } = DatePicker;
const Option = Select.Option;
const echarts = require('echarts/lib/echarts') //必须
require('echarts/lib/chart/bar') // 柱状图
require('echarts/lib/component/title') //标题插件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/toolbox')
require('echarts/lib/chart/pie') // 饼图

class DataPanelChart extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      list: [],
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
    });
    if (res.code === 0) {
      this.setPieOption(this.commonDealData(res.data))
    }
  };
  commonDealData(dataList) {
    if(dataList.length === 0) { return }
    dataList.forEach((item, index) => {
      this.state.tagList.forEach((items, indexs) => {
        if (item.tag === items.type) {
          this.state.tagList[indexs].value += item.price
        }
      })
    })
    let existList = this.state.tagList.filter((item) => {
      return item.value > 0
    })
    return existList
  }
  componentDidMount() {
    this.getList()
  }
  //柱状图表配置函数
  setPieOption(data) {
    let myBarChart = echarts.init(this.refs.barChart)
    let option = {
      noDataLoadingOption: {
        text: '暂无数据',
        effect: 'bubble',
        effectOption: {
          effect:{
            n: 0
          }
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          center: ['50%', '50%'],
          // data: data.sort(function (a, b) { return a.value - b.value; }),
          data: data,
          roseType: 'radius',
          label: {
            color: 'rgb(0, 0, 255)'
          },
          labelLine: {
            lineStyle: {
              color: 'rgb(0, 0, 255)'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          },
          itemStyle: {
            color: '#c23531',
            shadowBlur: 200,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]
    }
    myBarChart.setOption(option, true)
  }
  onChange(date, dateString) { // this的绑定概念需重新巩固
    // 根据时间重新筛选data数据源
    let filterList = this.state.list.filter((item) => {
      let newList
      return (item.date.slice(0, 4) + '-' + item.date.slice(5, 7)) === dateString
    })
    this.setPieOption(this.commonDealData(filterList))
  }
  render() {
    return (
      <div>
        <div className="barBox"> 
          <MonthPicker onChange={this.onChange.bind(this)} placeholder="请选择时间" className="selectTime"/>
          <div ref="barChart" style={{width: "100%", height: "300px"}}></div>
        </div>
      </div>
    )
  }
}

export default DataPanelChart