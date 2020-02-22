import React,{Component,PropsTypes} from 'react'
import { Breadcrumb, Icon } from 'antd';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import style from './style.css'

const menus = [
  {url: 'admin/calculate', name: '录入', iconType: 'edit'},
  {url: 'admin/calculateShow', name: '详细', iconType: 'save'},
  {url: 'admin/calculateChart', name: '图表', iconType: 'save'}
];

class Footer extends Component{
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      chooseTag: ''
    }
  }
  componentDidMount() {
    this.setState({chooseTag: this.props.history.location.pathname})
  }
  render(){
    return (
      <div className={style.footerBox}>
        <Breadcrumb>
          {
            menus.map((item, index) => {
              return (
                <Breadcrumb.Item key={index} className={`${style.footerList} ${style[`${'/' + item.url === this.state.chooseTag ? "active" : ""}`]}`}
                  onClick={({key}) => {
                    this.props.history.push(`/${item.url}`)
                    this.setState({chooseTag: '/' + item.url})
                  }}>
                  <Icon type={item.iconType}/>
                  <span>{item.name}</span>
                </Breadcrumb.Item>
              )
            })
          }
        </Breadcrumb>
      </div>
    )
  }
}

export default Footer