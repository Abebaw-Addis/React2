import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const listStyle = {
//   textAlign : 'center',
//   color : 'black',
//   fontWeight : 'bold',
//   backgroundColor : 'white',
//   listStyleType : 'circle',
//   color : 'aqua',
// }

ReactDOM.createRoot(document.getElementById('root')).render(<Login/>)

// const content = (
//     <>
//     <h1>Hello, rendering react in append method</h1>
//     <p>React new paragraph</p>
//     </>
// )
// ReactDOM.createRoot(document.getElementById('root')).render(content)
// document.getElementById('root').append(JSON.stringify(content));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
