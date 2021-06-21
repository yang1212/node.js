import * as React from 'react'
import { Menu } from 'antd';
import { GithubFilled } from '@ant-design/icons'
import { withRouter } from 'react-router-dom'
import './headerNav.less'


class HeaderNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: ''
    }
  }
  handleClick = e => {
    this.setState({
      current: e.key,
    });
    this.props.history.push(`/${e.key}`)
  };
  render() {
    return (
      <div className="header">
        <div className="logo"><GithubFilled style={{ fontSize: '24px', color: '#08c' }} /></div>
        <Menu mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]}>
          <Menu.Item key="home">文档</Menu.Item>
          <Menu.Item key="about">配置</Menu.Item>
          <Menu.Item key="test">API</Menu.Item>
          <Menu.Item key="About2">案例</Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default withRouter(HeaderNav)
