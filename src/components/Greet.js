import React from "react";

// function greet() {
//     return <h1>Hello Mainul</h1>
// }

 const Greet = (props) => {
    return (
        <div className="greeting">
            <h1>Hello, {props.name} AKA {props.heroname}</h1>
            {props.children}
        </div>


    )
 }

export default Greet