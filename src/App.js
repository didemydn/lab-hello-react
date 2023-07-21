// src/App.js
import ironLogo from '../src/images/ironhack-logo-xs.png';
import menu from '../src/images/menu-top.png';
import first from '../src/images/icon-1.png';
import second from '../src/images/icon-2.png';
import third from '../src/images/icon-3.png';
import fourth from '../src/images/icon-4.png';
import './App.css';



function App() {
  return (
    
    <div className="App">
      <nav className='navbar'>
        <img src={ironLogo} alt="Ironhack Logo" className="logo" />
        <img src={menu} alt="Menu Icon" className="menu-icon" />
      
      <h1>Say Hello to ReactJs</h1>
      <p> You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
      <button>Awesome!</button>
      </nav>
      <img src ={first} alt ="firstImg" classname="firsticon" />
      <h2>Declarative</h2>
      <p>React makes it painless to create interactive UIs</p>
      <img src ={second} alt ="firstImg" classname="secondicon"/>
      <h2>Components</h2>
      <p>Build encapsulated components that manage their state</p>
      <img src ={third} alt ="firstImg"  classname="thirthicon" />
      <h2>Single-Way</h2>
      <p> A set of immutable values are passed to the component's</p>
      <img src ={fourth} alt ="firstImg" classname="fourthicon"/>
      <h2>JSX</h2>
      <p>Statically-typed designed to run on modern browsers.</p>


    </div>
    
  );
}
export default App;