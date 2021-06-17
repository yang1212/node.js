import * as React from 'react'
import { Row, Col } from 'antd'
import { BrowserRouter, Route } from 'react-router-dom';
import './home.less'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      leftContent: [
        { name: 'react router', key: 'list1'},
        { name: 'reducer', key: 'list2'}
      ]
    }
  }
  render() {
    return (
      <div>
        <Row>
          <BrowserRouter>
            <Col span={3} className="left-box">
              {/* 动态路由 */}
              {
                this.state.leftContent.map((item, index) => {
                  return(
                    <Route path="/home"  exact render={() => <Home/>}></Route>
                    // <p key={index}>{item.name}</p>
                  )
                })
              }
            </Col>
          </BrowserRouter>
          <Col span={13} className="right-box">
            <p>Ant按需配置</p>
            <p>配置在package.json文件中，不支持单独配置babelRc文件</p>  
            <p>路由跳转</p>
            <p>用withRouter解决使用this.props.history跳转报错</p>
          </Col>
        </Row>
      </div>
    )
  }
}
