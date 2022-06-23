import React, { Component } from 'react'

 class Counter extends Component {

constructor(props) {
  super(props)

  this.state = {
     count: 0
  }
}
decrement(){
    {/*this.state.count -= 1*/}//direct method to change the state
   // this.setState({
    //    count: this.state.count - 1
   // },
   // () => {
   //     console.log('callback value', this.state.count)
   // }
   // )
   this.setState(prevState => ({
    count: prevState.count - 1
   }))
    console.log(this.state.count)
}

decrementFive(){

    this.decrement()
    this.decrement()
    this.decrement()
    this.decrement()
    this.decrement()
}

  render() {
    return (
        <div>
     <div>Counter = {this.state.count}</div>
     <button onClick={()=>this.decrementFive()}>Decrement</button>
     </div>
    )
  }
}

export default Counter