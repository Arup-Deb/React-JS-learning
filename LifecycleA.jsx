import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Arup'
      }
      console.log('LifecycleA constructor')
    }
    static getDerivedStateFromProps(props, state)
    {
        console.log('LifecycleA getDerivedStateFromProps')
        return null;
    }
    componentDidMount(){
        console.log('LifecycleA componentDidMount')
    }
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
    return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevStates) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
    return null;
    }
    componentDidUpdate(prevProps,prevState,snapshot)
    {
        console.log('LifecycleA componentDidUpdate')
    }
    changeState = ()=> {
        this.setState({
            name:'Aruprevlution'
        })
    }
  render() {
    console.log('LifecycleA render')
    return (
        <div>
      <div>LifecycleA</div>
      <button onClick={this.changeState}>change state</button>
      <LifecycleB/>
      </div>
      
    )
  }
}

export default LifecycleA