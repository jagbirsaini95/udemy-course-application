import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* week one in app1 components and its childs
    done practical of following topics:
     Creating a new React Project
     Building a First Custom Component
     Splitting Components Into Multiple Components
     Listening to Events & Working with Event Handlers
     useState hook
     Handling Form Submission 
     passing data from children to parent
     Rendering Lists of Data
     Outputting Conditional Content
     Concept of props and Composition ("children props")
    */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
