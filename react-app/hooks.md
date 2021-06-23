## Hooks
* Hooks的单词意思为“钩子”。
*  React Hooks 的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进来
* 参考[此文](https://zh-hans.reactjs.org/docs/hooks-intro.html)

## React Hooks
v16.8新增功能, 让你在不编写Class的情况下，使用state等React特性,作为辅助Function Component的工具。

### useState
* 函数调用时保存变量,等效于 class 组件中的 setState
* 参考[此文](https://zh-hans.reactjs.org/docs/hooks-state.html)
````javaScript
import React, { useState } from 'react';
export default function Content() {
  const [count, setCount] = useState(2);
  const [name, setName] = useState('')
  const fn = () => {
    setCount(count + 1)
    setName('yf')
  }
  return(
    <div>
      {count}
      <p onClick={fn}>Test</p>
    </div>
  )
}
````

### useEffect

* 增加了操作副作用的能力, 与class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API
* 参考[此文](https://zh-hans.reactjs.org/docs/hooks-effect.html)
````javaScript
import React, { useEffect } from 'react';
export default function Content() {
  useEffect(() => {
    console.log('执行')
  })
  return(
    <div>233</div>
  )
}
````

### useContext
* 跨越组件层级直接传递变量，实现共享
* 使用参考[此文](https://github.com/yang1212/collection-about/issues/6)




## react-redux Hooks
v7.1.0 新增功能

### useSelector


### useDispatch









## react-router Hooks
v5.1版本新增Hooks

### useParams
