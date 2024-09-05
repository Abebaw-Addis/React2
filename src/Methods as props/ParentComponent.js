import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(){
        super()
        this.state = ({
            parentName: "Parent",
            childName: "Child"
        })

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <ChildComponent greeting={this.greetParent} text={`Hello ${this.state.childName}`}/>        
      </div>
    )
  }
}

export default ParentComponent
