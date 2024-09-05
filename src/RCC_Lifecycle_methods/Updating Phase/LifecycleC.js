import React, { Component } from 'react'
import LifecycleD from './LifecycleD.js'

class LifecycleC extends Component {

    constructor(props) {
      super(props)
      this.state = {
         name: 'Abebaw Addis'
      }
      console.log('1. LifecycleC constructor')
    }//first mounting phase method in class component lifecycle
    
    static getDerivedStateFromProps(props, state){
        console.log('1. LifecycleC getDerivedStateFromProps')
        return null
    }//first updating, second mounting phase method in class component lifecycle

    componentDidMount(){
        console.log('4. LifecycleC componentDidMount')
    }//fourth mounting phase method in class component lifecycle

    shouldComponentUpdate(){
      console.log('2. LifecycleC shouldComponentUpdate')
      return true
    }//second updating phase method in class component lifecycle

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('4. LifecycleC getSnapshotBeforeUpdate')

      return null
    }//fourth updating phase method in class component lifecycle

    componentDidUpdate(){
      console.log('5. LifecycleC componentDidUpdate')

    }//fifth updating phase method in class component lifecycle

    // changeState = () =>{
    //   this.setState({
    //     name: 'Changes To Zemenu Addis'
    //   })
    // }

    changeState = () =>{
      this.setState({
        name: !this.state.name
      })
    }
  render() {
    console.log('3. LifecycleC render')
    return (
      <div style={{textAlign: 'center', padding: '10px'}}>
        Lifecycle C Name - {this.state.name? 'Abebaw Addis' : 'Changes To Zemenu Addis'}<br />
        <button className='button'
        onClick={this.changeState}>Change State</button>
        <LifecycleD />
      </div>
    )
  }//third updating and mounting phase method in class component lifecycle
}

export default LifecycleC