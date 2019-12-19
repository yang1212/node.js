import React, {Component, PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux'
import style from './style.css'
import {bindActionCreators} from 'redux'
import {Input, Select, Button, Modal} from 'antd';
import {actions} from "../../reducers/adminCalclulate";
import { getFlightDetail } from './service'
const { update_name, update_price, update_tag, save_priceData} = actions;
const Option = Select.Option;

class DataPanel extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      tagList: ['吃的', '用的', '玩的']
    }
  }
  //标题输入框
  titleOnChange(e) {
    this.props.update_name(e.target.value)
  };
  // 价格输入框
  priceOnChange(e) {
    this.props.update_price(e.target.value)
  };
  //选择标签
  selectTags(value) {
    this.props.update_tag(value)
  };
  //发表
  async publishArticle() {
    let priceData = {};
    priceData.name = this.props.name;
    priceData.price = this.props.price;
    priceData.tag = this.props.tag;
    let tempDate = new Date();
    priceData.date = tempDate.getFullYear() + '年' + (tempDate.getMonth() + 1) + '月' + tempDate.getDate() + '日'
    let res = await getFlightDetail(priceData)
  };

  render() {
    const { tagList } = this.state;
    return (
      <div>
        <h2>数据统计</h2>
        <div className={style.dataPanel}>
          <div className={style.listBlock}>
            <span className={style.listSpan}>分类</span>
            <Select
              className={style.titleInput}
              placeholder={'请选择'}
              onChange={this.selectTags.bind(this)}
              value={this.props.tag}
            >
              {
                tagList.map((item) => (
                  <Option key={item}>{item}</Option>
                ))
              }
            </Select>
          </div>
          <div className={style.listBlock}>
            <span className={style.listSpan}>名称</span>
            <Input
              className={style.titleInput}
              placeholder={'请输入物品名称'}
              type='text'
              value={this.props.name}
              onChange={this.titleOnChange.bind(this)}/>
          </div>
          <div className={style.listBlock}>
            <span className={style.listSpan}>价格</span>    
            <Input
              className={style.titleInput}
              placeholder={'请输入价格'}
              type='text'
              value={this.props.price}
              onChange={this.priceOnChange.bind(this)}/>
          </div>
        </div>
        <div className={style.bottomContainer}>
          <Button type="primary" 
            onClick={this.publishArticle.bind(this)}
            className={style.buttonStyle}>发布
          </Button>
        </div>
      </div>
    )
  }
}

DataPanel.propsTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  tag: PropTypes.string,
}

DataPanel.defaultProps = {
  name: '',
  price: 0,
  tag: '',
}

function mapStateToProps(state) { // 会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染
  const {name, price, tag} = state.admin.shopData;
  return {
    name,
    price,
    tag,
  }
}

function mapDispatchToProps(dispatch) { // 用来建立 UI 组件的参数到store.dispatch方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store
  return {
    update_name: bindActionCreators(update_name, dispatch),
    update_price: bindActionCreators(update_price, dispatch),
    update_tag: bindActionCreators(update_tag, dispatch),
    save_priceData: bindActionCreators(save_priceData, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataPanel)