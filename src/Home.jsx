import React from "react";

function Home(){

    return(
        <>
<label htmlFor="userName">What is your your name dear user?</label>
<input type="text" name="userName" placeholder="Write Your Name"> </input>
<label htmlFor="userAge">How old are you user</label>
<input type="text" name="userAge" placeholder="Write Your Age">  </input>
<input type="button" name="submit" value="login"></input>

<button>login</button>

</>
    );
}

export default Home