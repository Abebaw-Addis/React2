import React from "react";

const Hello = () => {
    const styles = {
            textAlign: "center",
            color: "blue",
            }
    return(
        // <h1 style={styles}>Hello, React From Scratch</h1>
        // React.createElement('div', null, <h1 style={styles}>Hello, React From Scratch</h1>)
        // React.createElement('div', {style: {styles}}, 'Hello, React From Scratch')
        React.createElement('div', null, React.createElement('h1', null, 'Hello, React From Scratch'))
    );
}

export default Hello;