import * as React from 'react'
import { Button } from 'antd'

class Home extends React.Component {
  componentDidMount() {
    console.log(1, this.props.children)
  }
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
      </div>
    )
  }
}

export default Home