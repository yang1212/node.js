import React,{Component,PropsTypes} from 'react'
import {Button} from 'antd'
import {withRouter} from "react-router-dom";
import './style.less'
const carouselImgs = [
  require('../../../../static/bannerBg.jpg'),
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
      <div className="BannerBox">
        <img src={carouselImgs[0]}/>
      </div>
      )
    }
}

export default withRouter(Banner)