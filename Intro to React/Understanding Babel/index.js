/**REACT with JavaScript */

// const reactHeading = React.createElement('h1', {className: "head", id: "react-head"}, "Hello React");
// ReactDOM.createRoot(document.getElementById('root')).render(reactHeading);

/**REACT with JSX */

const jsxHeading = (<h1 className="head">Hello JSX</h1>);
ReactDOM.createRoot(document.getElementById('root')).render(jsxHeading);


/**YOUR PLAY CODE */
// const jsxHeading = ([<h1 className="head">Hello JSX</h1>, <p>This is paragraph <b>important</b> <ul><li>list item 1</li></ul></p>]);
// const secondElement = (<div className="main">This is div</div>);
// ReactDOM.createRoot(document.getElementById('root')).render([jsxHeading, secondElement]);