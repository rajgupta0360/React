const JSXFunction = ()=> (
    <>
        <h1>Let's learn JSX</h1>
    </>
);

function App(){
    const name = "Raj";
    const age = 22;
    const demo = null;
    let booleanValue = true;
    let undefinedValue;
    return(
        <>
        <h1>Hello {name}!</h1>
        <p>your age is {age}</p>
        <p>Null Value: {demo}</p>
        <p>Undefined Value: {demo}</p>
        <p>boolean Value: {demo}</p>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);