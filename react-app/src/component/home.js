import * as React from 'react'

class Home extends React.Component {
  constructor(props) {
    super(props)
    console.log(2, props)
  }  
  componentDidMount() {
    console.log(1, this.props.children)
  }
  render() {
    return (
      <div>home</div>
    )
  }
}

export default Home