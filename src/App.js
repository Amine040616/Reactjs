import logo from './logoto.png';
import logogroupen from './logogroupen.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {Button, Nav, Navbar, NavDropdown, Form, FormControl, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Navbar bg="light" expand="lg" className="navnav">
          <Navbar.Brand href="#home"><img src={logogroupen} className="Applogogroup" alt="logogroup" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="basicnavbarnav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">About us</Nav.Link>
              <Nav.Link href="#link">Career</Nav.Link>
                <NavDropdown title="Departments" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Marketing & PR</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Customer Success & Sales</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">IT, Product, Data</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Finance & Administration</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">HR & more</NavDropdown.Item>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          </Navbar>
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className="blabelname">Email</Form.Label>
                <Form.Control type="email" placeholder="Votre adresse mail"  className="controlname" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className="blabelname">Mot de passe</Form.Label>
                <Form.Control type="password" placeholder="Mettez votre mot de passe"  className="controlname" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridAddress1">
              <Form.Label className="blabelname">Votre adresse</Form.Label>
              <Form.Control placeholder="Votre adresse ici..."   className="controlname"/>
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label className="blabelname">Votre adresse (suite)</Form.Label>
              <Form.Control placeholder="Votre adresse ici (suite)..."  className="controlname"/>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label className="blabelname">Cité</Form.Label>
                <Form.Control   className="controlname"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label className="blabelname">Ville</Form.Label>
                <Form.Control as="select" defaultValue="Choose..."  className="controlname">
                  <option  className="controlname">Choisir...</option>
                  <option  className="controlname">7oumet ettab3a</option>
                  <option  className="controlname">Nahj le5nafess</option>
                  <option  className="controlname">Damouss el 7ajja</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label className="blabelname">Code postal</Form.Label>
                <Form.Control  className="controlname"/>
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Check me out" className="blabelname" />
            </Form.Group>

            <Button  type="submit" as={Col} className="formgridbutton"  controlId="formgridbutton">Envoyer</Button>
          </Form>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Do not Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
