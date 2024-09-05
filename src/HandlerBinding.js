import React, {Component} from 'react'

class HandlerBinding extends Component {

    constructor(){
        super()
        this.state = {
            message: "Hello, Welcome"
        }

        this.clickHandler = this.clickHandler.bind(this)//one of the most handler binding method Binding in the class constructor
    }

    // clickHandler(){
    //     this.setState({
    //         message: "Good Bye!"
    //     })
    //     console.log(this)
    // }

            //The last eventHandler binding method
            //class property as arrow function approach 4 it is an accepted feature
    clickHandler = () => {
        this.setState({
            message: "Good Bye!"
        })
        console.log(this)
    }
    render(){
        return (
            <div style={{textAlign: 'center', padding: '10px'}}>
              {/* <div style={{margin: '10px'}}> {this.state.message ? "Welcome!":"Good By!"} </div> */}
              <div style={{margin: '10px'}}> {this.state.message} </div>
              {/* <button className='button'
              onClick={() => this.setState({
                // message: !this.state.message
                message: "Good Bye!"
              })} >Click</button> */}

              {/**Binding in a render might not used because of performance implications*/}
            {/* <button className='button'
              onClick={this.clickHandler.bind(this)} >Click</button> */}

              {/**don;t need of bind() method in arrow function simple for passimg parameters*/}
              {/**Arow function in a render same as the first and probably the easiest way of binding handlers*/}
                {/* <button className='button'
              onClick={() => this.clickHandler(this)} >Click</button> */} 
              <button className='button'
              onClick={this.clickHandler} >Click</button>
            </div>
          )
        }
    }

export default HandlerBinding
