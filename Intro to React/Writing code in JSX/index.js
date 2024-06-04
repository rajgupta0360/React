/**REACT with JavaScript */

// const reactHeading = React.createElement('h1', {className: "head", id: "react-head"}, "Hello React");
// ReactDOM.createRoot(document.getElementById('root')).render(reactHeading);

/**REACT with JSX */

const jsxHeading = (<h1>Hello JSX</h1>);
ReactDOM.createRoot(document.createElementById('root')).render(jsxHeading);