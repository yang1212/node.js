import React,{Component,PropsTypes} from 'react'
import {Button} from 'antd'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import style from './style.css'

const menus = [
  {url: 'admin/calculate', name: '录入', iconType: 'edit'},
  {url: 'admin/calculateShow', name: '详细', iconType: 'home'},
  {url: 'admin/calculateChart', name: '图表', iconType: 'home'}
];

class Footer extends Component{
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render(){
    return (
      <div className={style.footerBox}>
        {
          menus.map((item, index) => {
            return(
              <Button className={style.footerList} type="link" key={index}
                onClick={({key}) => {
                  this.props.history.push(`/${item.url}`)
                }}
              >{item.name}</Button>
            )
          })
        }
      </div>
    )
  }
}

export default Footer