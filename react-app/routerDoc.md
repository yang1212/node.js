
`基于switch or exact解决访问路径为/about时，不会匹配Index组件内容，保持唯一性`

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

`this.props.history.push()方式跳转报错`

`withRouter的作用，最新版本是否有替代方案`

