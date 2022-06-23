//               Class components
/*
import React,{Component} from 'react'

class welcome extends Component {

    constructor() {
        super()
        this.state = {
            message: 'welcome visitor'
        }
    }

    render(){
        return <h1>welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }

}
export default welcome
*/
import React,{Component} from 'react'

class welcome extends Component {

    render() {
        const{name, heroName} = this.props
        //const {state1, state2} = this.state
       return(
       <h1>
        welcome {name} a.k.a {heroName}</h1>
       )    
}
}

export default welcome