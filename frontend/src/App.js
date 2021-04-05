import React from 'react';
import ReactDOM from 'react-dom';
import { Textarea } from 'react-rainbow-components';
import { Navbar,Icon} from 'rsuite';
import { Nav, Dropdown } from 'rsuite';
import './App.css';



function App() {
  return (
    <div className="App">
     <div className= "nav_bar">

     <Navbar>
    <Navbar.Header>
      <a href="#" className="navbar-brand logo">RSUITE</a>
    </Navbar.Header>
    <Navbar.Body>
      <Nav>
        <Nav.Item icon={<Icon icon="home" />} >Home</Nav.Item>
        <Nav.Item>News</Nav.Item>
        <Nav.Item>Products</Nav.Item>
        <Dropdown title="About">
          <Dropdown.Item>Company</Dropdown.Item>
          <Dropdown.Item>Team</Dropdown.Item>
          <Dropdown.Item>Contact</Dropdown.Item>
        </Dropdown>
      </Nav>
      <Nav pullRight>
        <Nav.Item icon={<Icon icon="cog" />} >Settings</Nav.Item>
      </Nav>
    </Navbar.Body>
  </Navbar>
    

      </div>

      <div className= "text_box">





      </div>

    </div>
  );
}

export default App;

//ReactDOM.render(<App />, document.getElementById('root'));