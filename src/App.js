import logo from './logo.svg';
import './App.css';

// importing components from react-router-dom package
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import components
import Home    from "./components/Home";
import About   from "./components/About";
import Contact from "./components/Contact";
import Menubar from "./components/Menubar";

function App() {
  return (
    <Router>
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Menubar />

        <h1>Blah</h1>

        {/* This is the alias of BrowserRouter i.e. Router */}
          <Routes>
            {/* This route is for home component 
            with exact path "/", in component props 
            we passes the imported component*/}
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/home' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/contact' element={<Contact/>} />
          </Routes>

      </div>
    </div>
    </Router>
  );
}

export default App;
