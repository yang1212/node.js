import React, {Component, PropTypes} from 'react'
// 在react开发中都尽量在组件中加入PureRenderMixin方法去优化性能
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Input, Select, Button, DatePicker, Form } from 'antd';
import moment from 'moment'
import './style.less'
import { getFlightDetail } from './service'
const Option = Select.Option;
const FormItem = Form.Item;

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
      loading: false,
    }
  }
  //发表
  async publishArticle(data) {
    this.setState({ loading: true });
    let res = await getFlightDetail(data)
    if (res.code === 0) { 
      this.setState({ loading: false}) 
      this.props.form.resetFields();
    }
  };
  handleSubmit(e){
    e.preventDefault(); // 阻止页面刷新
    this.props.form.validateFields((err, values) => {
      if (!err) {
        values.date = moment(values.date).format('YYYY-MM-DD');
        this.publishArticle(values)
      }
    });
  }
  render() {
    const { tagList } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="dataRecordBox">
        <Form className="dataPanel">
          <Form.Item
            className="listBlock"
            label="分类"
            name="tag">
            {
              getFieldDecorator("tag", {
                rules: [
                  {
                    required: true,
                    message: '请选择对应的类型!'
                  }
                ]
              })(
                <Select
                  className="titleInput"
                  placeholder={'请选择类型'}>
                  {
                    tagList.map((item) => (
                      <Option key={item.type}>{item.value}</Option>
                    ))
                  }
                </Select>
              )
            }
          </Form.Item>
          <Form.Item
            className="listBlock"
            label="名称"
            name="name">
            {
              getFieldDecorator("name", {
                rules: [
                  {
                    required: true,
                    message: '请填写名称!'
                  }
                ]
              })(
                <Input className="titleInput" placeholder={'请填写名称'}/>
              )
            }
          </Form.Item>
          <Form.Item
            className="listBlock"
            label="价格"
            name="price">
            {
              getFieldDecorator("price", {
                rules: [
                  {
                    required: true,
                    message: '请填写价格!'
                  }
                ]
              })(
                <Input className="titleInput" placeholder={'请填写价格'}/>
              )
            }
          </Form.Item>
          <Form.Item
            label="日期"
            name="date">
            {
              getFieldDecorator("date", {
                rules: [
                  {
                    required: true,
                    message: '请选择日期!'
                  }
                ]
              })(
                <DatePicker 
                  className="titleInput" 
                  format="YYYY-MM-DD"
                  mode="date" 
                  placeholder="请选择时间"/>
              )
            }
          </Form.Item>
          <Form.Item>
            <Button type="primary" 
              loading={this.state.loading}
              onClick={this.handleSubmit.bind(this)}
              className="buttonStyle">发布
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default Form.create()(DataPanel)
