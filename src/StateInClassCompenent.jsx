
import React, {Component} from "react";

class StateInClassComponent extends Component{

    constructor(){
        super()
        this.state = {
            message: "Welcome to Our Channel Dear Visitor Make Sure You Are Subscribed!!"
        }
        this.state = {
            count: 0
        }
    }

    // Increment(){
    //     this.state.count++
    //     console.log("Button Clicked "+this.state.count+" times");
    // }

    Increment(){
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log("Callback Value "+this.state.count);
        // })
        //     console.log("Button Clicked "+this.state.count+" times");

        this.setState((prevState, props) => ({
            count: prevState.count + props.addBy
        }), () => {
                console.log("Callback Value "+this.state.count);
            })
            console.log("Button Clicked "+this.state.count+" times");
    }

//     this.setState(prevState => ({
//         count: prevState.count + 1
//     }), () => {
//             console.log("Callback Value "+this.state.count);
//         })
//         console.log("Button Clicked "+this.state.count+" times");
// }

    IncrementFive(){
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
        this.Increment()
    }

    SubscriptionToggle(){
        this.setState({
            message: !this.state.message
    })
    }
    render(){
        //Function state(state) and object property(props) destructuring in class component of react
        // const {state1, state2} = this.state
        // const {props1, props2+ = this.props 

        return(
            <div style={{textAlign: 'center'}}>
            <h3>{this.state.message ? "Successfully Subscribed" : "Successfully Unsubscribed!"}</h3>
            <button className="button"
            onClick={() => this.SubscriptionToggle()
                } >Subscribe</button>
                
            <h3>Counter: {this.state.count}</h3><br />
            <button className="button"
                onClick={() => this.IncrementFive()
                } >Increment</button>
            {/* <button className="button"
                onClick={() => this.setState({
                    count: this.state.count +=1
                })} >Increment</button> */}
            </div>
        )
    }
}

export default StateInClassComponent