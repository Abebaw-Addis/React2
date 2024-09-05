import React, { Component } from 'react'
import LifecycleB from './LifecycleB.js'

class LifecycleA extends Component {

    constructor(props) {
      super(props)
      this.state = {
         name: 'Abebaw'
      }
      console.log('1. LifecycleA constructor')
    }//first mounting phase method in class component lifecycle
    
    static getDerivedStateFromProps(props, state){
        console.log('2. LifecycleA getDerivedStateFromProps')
        return null
    }//second mounting phase method in class component lifecycle

    componentDidMount(){
        console.log('4. LifecycleA componentDidMount')
    }//fourth mounting phase method in class component lifecycle

  render() {
    console.log('3. LifecycleA render')
    return (
      <div style={{textAlign: 'center', padding: '10px'}}>
        Lifecycle A
        <LifecycleB />
      </div>
    )
  }//third mounting phase method in class component lifecycle
}

export default LifecycleA