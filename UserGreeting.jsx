import React, { Component } from 'react'

class UserGreeting extends Component {
   
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true
      }
    }
 //                  short circuit operator
    render() {
       return  this.state.isLoggedIn && <div> welcome biswas</div>
    
    // using ternary operator

    return(
        this.state.isLoggedIn ?
        <div>Welcome Vishwas</div> :
        <div>Welcome Guest</div>
    )
///               using element varaiables////////////        
    let Message
    if(this.state.isLoggedIn) {
        Message = <div>Welcome Vishwas</div>
    }
    else{
        Message = <div>Welcome Guest</div>
    }
    return <div>{Message}</div>

    //              using if else condition
   if(this.state.isLoggedIn)
   {
       return(
           <div>
               welcome Arup
           </div>
       )
   }
   else{
       return <div>Welcome guest</div>
   }
   // return (
    //  <div>
    //    <div>welcome Arup</div>
     
    //  <div>Welcome Guest</div>
    //  </div>
   // )
    
  }
}

export default UserGreeting