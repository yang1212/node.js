import React,{Component,PropTypes} from 'react'
import Banner from "../components/banner/Banner";
import {Button} from 'antd'
import style from './style.css'
const carouselImgs = [
  require('../../../static/index11.jpg'),
  require('../../../static/index8.jpg')
]

class Front extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Banner/>
        <div className={style.LoopImgBox}>
          <img src={carouselImgs[1]}/>
        </div>
        <div className={style.container}>
          <div className={style.commonBlock}>
            <img src={carouselImgs[0]}/>
          </div>
          <div className={style.commonBlock}>
            <img src={carouselImgs[0]}/>
          </div>
          <div className={style.commonBlock}>
            <img src={carouselImgs[0]}/>
          </div>
          <div className={style.commonBlock}>
            <img src={carouselImgs[0]}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Front