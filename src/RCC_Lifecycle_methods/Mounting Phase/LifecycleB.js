import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
      super(props)
      this.state = {
         name: 'Abebaw'
      }
      console.log('1. LifecycleB constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('2. LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('4. LifecycleB componentDidMount')
    }

  render() {
    console.log('3. LifecycleB render')
    return (
      <div style={{textAlign: 'center', padding: '10px'}}>
        Lifecycle B
      </div>
    )
  }
}

export default LifecycleB