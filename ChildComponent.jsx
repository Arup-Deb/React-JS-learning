import React, { Component } from 'react'

function ChildComponent(props){
 
    return (
        <div>
     {/*<button onClick={props.greetHandler}>Greet parent</button>    Method calling*/}
     <button onClick={()=> props.greetHandler('child')}>Greet parent</button>
     </div>
    )
  }


export default ChildComponent