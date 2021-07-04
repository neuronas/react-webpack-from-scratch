// import _ from 'lodash';
// import printMe from './print.js';
// import './styles.css' 

//   function component() {
//     const element = document.createElement('div');
//     const btn = document.createElement('button');

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//     btn.innerHTML = 'Click me and check the console!';
//     btn.onclick = printMe;

//     element.appendChild(btn);

//     return element;
//   }

//   // document.body.appendChild(component());
//   let element = component(); // Store the element to re-render on print.js changes
//   document.body.appendChild(element);

//  if (module.hot) {
//    module.hot.accept('./print.js', function() {
//      console.log('Accepting the updated printMe module!');
//      // printMe();
//      document.body.removeChild(element);
//      element = component(); // Re-render the "component" to update the click handler
//      document.body.appendChild(element);
//    })
//  }



import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
// import './index.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//       </header>
//       asas
//     </div>
//   );
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
