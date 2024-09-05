import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isName: false
      }
    }
    
    static getDerivedStateFromError(error){
        return {
          isName: true
        }
    }

    componentDidCatch(error, info){
      console.log(error)
      console.log(info)
    }
  render() {
    if(this.state.isName){
        return <h2 style={{textAlign: 'center', color: 'red'}}>Something Went Wrong!</h2>
    }
    return this.props.children

  }
}

export default ErrorBoundary
