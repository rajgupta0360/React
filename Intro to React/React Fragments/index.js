/**REACT Fragment */

const jsxHeading = <React.Fragment>
                        <h1 className="head">Hello JSX</h1>
                        <p>This is a paragraph</p>
                   </React.Fragment>;

// Another way of writing same code this will give us the same output
const jsxHeading2 = <>
                        <h1 className="head">Hello JSX</h1>
                        <p>This is a paragraph</p>
                   </>;

ReactDOM.createRoot(document.getElementById('root')).render(jsxHeading);

