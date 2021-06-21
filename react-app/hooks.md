`Hooks`
* v16.8新增功能, 让你在不编写Class的情况下，使用state等React特性
* 辅助Function Component的工具

`useState`
````javaScript
export default function Content() {
  const [count, setCount] = useState(2);
  const fn = () => {
    setCount(count + 1)
  }
  return(
    <div>
      {count}
      <p onClick={fn}>Test</p>
    </div>
  )
}
````

`useEffect`  

给函数组件增加了操作副作用的能力。它跟 class 组件中的 componentDidMount、componentDidUpdate 和 componentWillUnmount 具有相同的用途，只不过被合并成了一个 API。
````javaScript
export default function Content() {
  const [count, setCount] = useState(2);
  const fn = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    document.title = `you click me ${count} times`
  })
  return(
    <div>
      {count}
      <p onClick={fn}>Test</p>
      <ListContent/>
    </div>
  )
}
````

`自定义Hooks`