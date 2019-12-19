import React,{Component,PropsTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import style from './style.css'
import { Carousel } from 'antd';
const carouselImgs = [
  require('./banner_4.jpg'),
]
export default class Banner extends Component{
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div className={style.carouselImgContainer}>
        <img src={carouselImgs[0]}/>
        <p onClick={
          () => {
            console.log(this.props)
            // this.props.history.push('/admin')
          }
        }>Enter</p>
      </div>
      );
    }
}