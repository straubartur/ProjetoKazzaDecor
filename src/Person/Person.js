 import React from 'react'
 
 //argument received by the app, normative is props
 const person = (props) => {
 
   return (
   <div>
        <p onClick={props.click}>This is  {props.name}</p>
        <input type="text" onChange={props.changed} />
   </div>);
   
}

export default person;