import logo from './logo.svg';
import './App.css';

// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Redirect,
} from "react-router-dom";

// import components
// import Home    from "./components/Home";
import About   from "./components/About";
// import Contact from "./components/Contact";
import Menubar from "./components/Menubar";

function App() {
  return (
    <>

    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Menubar />

        {/* This is the alias of BrowserRouter i.e. Router */}
        <Router>
          <Routes>
            {/* This route is for home component 
            with exact path "/", in component props 
            we passes the imported component*/}
            <Route exact path="/about" component={<About/>} />
              
            {/* This route is for about component 
            with exact path "/about", in component 
            props we passes the imported component 
            <Route path="/about" component={About} />
              
            {/* This route is for contactus component
            with exact path "/contactus", in 
            component props we passes the imported component 
            <Route path="/contact" component={Contact} /> */}
              
            {/* If any route mismatches the upper 
            route endpoints then, redirect triggers 
            and redirects app to home component with to="/" 
            <Redirect to="/home" /> */}
          </Routes>
        </Router>

      </div>
    </div>
    </>
  );
}

export default App;
