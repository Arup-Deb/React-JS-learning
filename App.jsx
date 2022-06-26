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
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import LifecycleA from './components/LifecycleA';


class App extends Component {

render() {
    return (
         <div className = "App">
          {/* <NameList/> */}
          {/* <UserGreeting/> */}
          {/*<ParentComponent/>*/}
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
      <LifecycleA/>
        </div>
    );
 }
}

export default App;
