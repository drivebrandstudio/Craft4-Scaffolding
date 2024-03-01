import React from 'react';
import ReactDOM from 'react-dom/client';
import '../js/app'

ReactDOM.createRoot(document.querySelector('#root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

// Here is where SSR would gain us value. Pull in JS libraries easily, utilize them, have the Server
// return HTML to quickly render while we are fetching data to hydrate said HTML.


function App() {
    return (
        <h1>App</h1>
    );
}