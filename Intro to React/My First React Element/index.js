/** Javascript Code */
// const heading = document.createElement('h2');
// heading.className = 'header';
// heading.textContent = 'Hello';
// console.log("javascript heading", heading)

// // Accessing the element of html
// const root = document.getElementById('root');
// root.append(heading);

// -----------------------------------------------------------------------
/**REACT */

const reactHeading = React.createElement('h1', {className: "head", id: "react-head"}, "Hello React");

ReactDOM.createRoot(document.getElementById('root')).render(reactHeading);

// console.log("React heading", reactHeading);