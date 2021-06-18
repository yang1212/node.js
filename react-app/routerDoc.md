
### 1) 基于switch or exact解决访问路径为/about时，不会匹配Index组件内容，保持唯一性

````javaScript
<Switch>
  <Route path="/"  render={() => <Index/>}></Route>
  <Route path="/about"  render={() => <About/>}></Route>
</Switch>
````

````javaScript
<Route path="/"  exact render={() => <Index/>}></Route>
<Route path="/about"  render={() => <About/>}></Route>
````
不明白switch和exact同时使用解决问题的场景

<br/>

### 2) 获取路由参数的几种方式  

`基于prop获取参数`

* 路由组件
  ````javaScript
  <BrowserRouter>
    <div>
      <Route path="/"  exact render={() => <Index/>}></Route>
      <Route path='/test'   render={(props) => <Test {...props}/>}></Route>
    </div>
  </BrowserRouter>
  ````

* 非路由组件

  通过prop层层传递下去(基于深层次组件，传递冗余可想而知，故有了基于下面提到的withRouter解决方案)


`withRouter`  

* withRouter是react-router的一个高阶组件，可拿到路由参数, render时会把match, location和history传入props

* attention: 以函数形式定义组件，将获取不到this.props的值，故采用此高阶组件时，需基于：extends React.Component

* 参考[此文](https://segmentfault.com/q/1010000015964411)

````javaScript
class HeaderNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      current: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      current: e.key,
    });
    this.props.history.push(`/${e.key}`)
  };
  render() {
    return (
      <div className="header">
        <Menu mode="horizontal" onClick={this.handleClick} selectedKeys={[this.state.current]}>
          <Menu.Item key="home">文档</Menu.Item>
          <Menu.Item key="about">配置</Menu.Item>
        </Menu>
      </div>
    )
  }
}

export default withRouter(HeaderNav)
````

`v5.1版本新增Hooks(React版本使用限制 > v16.8`)

  * useParams： 获取match, location和history(目前案例获取值为空对象，原因不清楚)

  * useLocation 获取location对象

  * useRouteMatch 获取match对象

  * useHistory 获取history对象


<br/>


