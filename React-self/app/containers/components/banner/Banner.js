import React,{Component,PropsTypes} from 'react'
import {Button} from 'antd'
import {withRouter} from "react-router-dom";
import style from './style.css'
const carouselImgs = [
  require('./banner_4.jpg'),
]
class Banner extends Component{
  constructor(props) {
    super(props)
  }
  goAdminPage = () => {
    this.props.history.push('admin/calculate')
  };
  render(){
    return (
      <div className={style.carouselImgContainer}>
        <img src={carouselImgs[0]}/>
        <div className={`${style.homeBtn}`}>
          <Button onClick={this.goAdminPage}>Enter</Button>
        </div>
      </div>
      )
    }
}

export default withRouter(Banner)