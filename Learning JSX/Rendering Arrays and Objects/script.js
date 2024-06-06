const header = <><h1>Arrays and Objects in JavaScript</h1></>;
function myfunction(a){
    return a;
}
function App(){
    const arr = [1, 2, 3, 4, 5];
    const obj = {
        name: "Alex",
        age: "10"
    }

    return(
        <>
        {header}
        {arr.map((a)=> <p>{a}</p>)}
        <p>Objects: {obj.name}</p>
        </>
    )
}
const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App/>);

// -------------------------------PRACTICE------------------------------------------
// const arr = [1, 2, 3, 4, 5];
// console.log(arr);

// const obj = {
//     name: "kamal",
//     age: 24
// }
// console.log(obj);

// arr.forEach((a)=>{ console.log(a)});
