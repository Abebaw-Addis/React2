import React, { Component } from 'react'

class LifecycleD extends Component {

    constructor(props) {
      super(props)
      this.state = {
         name: 'Abebaw'
      }
      console.log('1. LifecycleD constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('1. LifecycleD getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('4. LifecycleD componentDidMount')
    }
    shouldComponentUpdate(){
      console.log('2. LifecycleD shouldComponentUpdate')
      return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('4. LifecycleD getSnapshotBeforeUpdate')

      return null
    }

    componentDidUpdate(){
      console.log('5. LifecycleD componentDidUpdate')

    }
  render() {
    console.log('3. LifecycleD render')
    return (
      <div style={{textAlign: 'center', padding: '10px'}}>
        Lifecycle D
      </div>
    )
  }
}

export default LifecycleD