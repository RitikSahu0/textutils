import React, { useState } from 'react'
import './App.css'

const App = () => {

const [name, setName] = useState("");
const [fullName, setFullName] = useState();

const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
};

const onSubmit = () => {
    setFullName(name);
};

return(

    <>
        <div>
            <h1>Hii, My name is : {fullName} </h1>
            <input 
            type = 'text'
            placeHolder = 'Enter Your name'
            onChange = {inputEvent}
            value = {name}
            />
            <button onClick = {onSubmit}>Submit</button>
        </div>
    </>
)
}



export default App;