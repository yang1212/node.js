import React,{Component,PropTypes} from 'react'
import Banner from "../components/banner/Banner";
import {Button} from 'antd'
import style from './style.css'

class Front extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Banner/>
        <div className={style.container}>
          <div className={style.contentContainer}>
            <div className={style.content}>
              图表内容展示
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Front