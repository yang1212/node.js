`1) extends React.Component`
* 基于prop传值
* 对于深层组件,利用prop层层传递实属冗余，故通过基于上下文Context获取父组件数据,参考[此文](https://knightyun.github.io/2020/09/03/js-react-props)

`2) Function Component(基于Function创建的React组件)`

* 基本传值  

  父传子：
  ````javaScript
  // 父组件
  export default function Content() {
    const testContent = {name: 'yf'}
    return (
      <div>
        <son prop={testContent}/>
      </div>
    )
  }

  // 子组件
  export default function ListContent(props) {
    const { prop } = props
    return (
      <div>{prop.name}</div>
    )
  }
  ````

* 父子组件深层传值
  参考[此文](https://juejin.cn/post/6877787139452207112)
