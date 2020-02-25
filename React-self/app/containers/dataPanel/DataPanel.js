import React, {Component, PropTypes} from 'react'
// 在react开发中都尽量在组件中加入PureRenderMixin方法去优化性能
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Input, Select, Button } from 'antd';
import './style.less'
import { getFlightDetail } from './service'
const Option = Select.Option;

class DataPanel extends Component {
  constructor(props) {
    super(props); 
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      tagList: [
        {
          type: 'eat',
          value:'餐饮'
        }, 
        { 
          type: 'RendHouse',
          value:'住房缴费'
        },  
        {
          type: 'clothes',
          value:'服饰美容'
        },
        {
          type: 'travel',
          value:'旅游'
        },
        {
          type: 'traffic',
          value:'交通'
        },
        {
          type: 'amusement',
          value:'娱乐'
        },
        {
          type: 'study',
          value:'学习'
        },
        {
          type: 'medical',
          value:'医疗'
        }
      ],
      tag: '',
      name: '',
      price: null,
      errorType: '',
      loading: false,
    }
  }
  //标题输入框
  titleOnChange(e) {
    this.setState({name: e.target.value,})  
    if (e.target.value) { this.setState({errorType: ''}) }
  };
  // 价格输入框
  priceOnChange(e) {
    this.setState({price: e.target.value,})  
    if (e.target.value) { this.setState({errorType: ''}) }
  };
  //选择标签
  selectTags(e) { 
    this.setState({tag: e,})  
    if (e) { this.setState({errorType: ''}) }
  };
  //发表
  async publishArticle() {
    if (this.state.tag) {
      if (this.state.name) {
        if (this.state.price) {
          this.setState({ loading: true });
          let priceData = {};
          priceData.name = this.state.name;
          priceData.price = this.state.price;
          priceData.tag = this.state.tag;
          let tempDate = new Date();
          priceData.date = tempDate.getFullYear() + '年' + ((tempDate.getMonth() + 1) > 9 ? (tempDate.getMonth() + 1) : ('0' + (tempDate.getMonth() + 1))) + '月' + tempDate.getDate() + '日'
          let res = await getFlightDetail(priceData)
          if (res.code === 0) {
            this.setState({
              name: '',
              tag: '',
              price: null,
              loading: false
            })
          }
        } else {
          this.setState({errorType: 'input3'})
        }
      } else {
        this.setState({errorType: 'input2'})
      }
    } else {
      this.setState({errorType: 'input1'})
    }
  };

  render() {
    const { tagList, tag, name, price, errorType } = this.state;
    return (
      <div className="dataRecordBox">
        <div className="dataPanel">

          <div className="listBlock">
            <span className="listSpan">分类</span>
            <Select
              className="titleInput"
              placeholder={'请选择类型'}
              onChange={this.selectTags.bind(this)}>
              {
                tagList.map((item) => (
                  <Option key={item.type}>{item.value}</Option>
                ))
              }
            </Select>
            {
              errorType === 'input1' ? <p>请选择类型</p> : ''
            }
          </div>
          <div className="listBlock">
            <span className="listSpan">名称</span>
            <Input
              className="titleInput"
              placeholder={'请输入物品名称'}
              type='text'
              value={name}
              onChange={this.titleOnChange.bind(this)}/>
            {
              errorType === 'input2' ?  <p>请输入物品名称</p> : ''
            }
          </div>
          <div className="listBlock">
            <span className="listSpan">价格</span>    
            <Input
              className="titleInput"
              placeholder={'请输入价格'}
              type='text'
              value={price}
              onChange={this.priceOnChange.bind(this)}/>
            {
              errorType === 'input3' ?  <p>请输入物品价格</p> : ''
            }
          </div>

          <Button type="primary" 
            loading={this.state.loading}
            onClick={this.publishArticle.bind(this)}
            className="buttonStyle">发布
          </Button>
        </div>
      </div>
    )
  }
}

export default DataPanel
