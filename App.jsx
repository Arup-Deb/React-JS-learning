import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
//import { Greet} from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import { Component } from 'react';
import { render } from '@testing-library/react';
import Counter from './components/Counter';
//import {FunctionClick }from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';


class App extends Component {

render() {
    return (
         <div className = "App">
          <ParentComponent/>
          {/*<EventBind/>*/}
           {/* <FunctionClick/>*/}
            {/*<ClassClick/>*/}
          {/*<Counter></Counter>*/}
           {/* <Message></Message>*/}
       { /*<Greet name="Arp"  heroName="Batman">
        <p>This is children props</p>
       </Greet>
        <Greet name="Aruippa"  heroName="Superwoman">
            <button>Action</button>
            </Greet>
        <Greet name="Arpi"  heroName="Batmian"/>
      <Welcome   name="Aruippa"  heroName="Superwoman"/>
     
      <Welcome  name="Arp"  heroName="Batman"/>
      <Welcome   name="Arpi"  heroName="Batmian"/>*/}
      
        </div>
    );
 }
}

export default App;