const JSXFunction = ()=> (
    <>
        <h1>Let's learn JSX</h1>
    </>
);

function sum(){
    return 20;
}

const header = <><h2>JSX Expression</h2></>
function App(){
    const name = "Raj";
    const age = 22;
    const demo = null;
    let booleanValue = true;
    let undefinedValue;
    return(
        <>
        <h1>String: {name}!</h1>
        {header}
        <p>Number: {age}</p>
        <p>Null Value: {demo}</p>
        <p>Undefined Value: {demo}</p>
        <p>boolean Value: {demo}</p>
        <p>calling a function: {sum()}</p>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>);