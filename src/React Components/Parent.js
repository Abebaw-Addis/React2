import React, { PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class Parent extends PureComponent {
    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Abebaw Addis'
      }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Abebaw Addis'
            })
        }, 500);
        }
  render() {
    console.log('Parent component render')
    return (
      <div style={{textAlign: 'center'}}>
        Parent {this.state.name}
        <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/>
      </div>
    )
  }
}

export default Parent
