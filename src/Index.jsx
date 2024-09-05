import propTypes from "prop-types"
import React from "react";
import './Styles/index.css'

const date = new Date();
const userAge = 21
// userAge = prompt('How old Are you? ');

function Index(props){
    //Object-property destructuring(refactoring) in function component of react
    //function Index({site, loggedIn, children}){ or
    //const {site, loggedIn, children} = props
    if(props.loggedIn){
        const name ={
              marginTop: "60px",  
        }

    
    return(
        <div className="welcomee-content">
        <h3 style={name}> Hello, {props.userName}</h3>
        <h3 className="welcome-message">Welcome To Our Site {props.site} Dear!</h3>
        <h3> You Are {userAge} Years Old.</h3>
        <h3> Logged In {props.loggedIn ? "Yes" : "No"}</h3>
        <h3> You Logged in {date.getFullYear()}/{date.getMonth()}/
            {date.getDate()} at {date.getHours()}-{date.getMinutes()}-{date.getSeconds()}</h3>
        <h3> {props.children}</h3> {/* this.props.children, this.props.loggedIn, this.props.site in class component */}
        </div>
        
        );
    }
    else{
        return(
            <h3 className="login-prompt">Dear User You Have To Login First</h3>
        );
        }
    }
Index.propTypes = {
    userName: propTypes.string,
    userAge: propTypes.number,
    site: propTypes.string,
    loggedIn: propTypes.bool,
  }
Index.defaultProps = {
    userName: "Guest",
    userAge: 0,
    site: "www.abebawsite.com",
    loggedIn: false,
  }
export default Index;