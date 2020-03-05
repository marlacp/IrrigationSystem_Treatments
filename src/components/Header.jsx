import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`

.navbar { background-color: #2c786c; }
a, .navbar-nav, .navbar-light .nav-link {
  color: f9f6f7;
  &:hover { color: white; }
}
.navbar-brand {
  font-size: 1.4em;
  color: white;
  &:hover { color: white; } 
}
.form-center {
  position: absolute !important;
  left: 25%;
  right: 25%;
}
.Navbar__brand-logo{
  margin-right: 0.7rem;
  width: 12%;
}
.Pad a{

    padding: 0 10px;
    color: white;
    text-decoration: none;
  }

`;

// eslint-disable-next-line import/prefer-default-export
export const Header = () => (
  <Styles>
    <Navbar expand='lg'>

      <Navbar.Brand className='page' href='/'>Intelligent Irrigation System</Navbar.Brand>

      <Navbar.Toggle aria-controls='basic-navbar-nav' />

      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Item className='Pad'>
            <Link to='/'>
              Home
            </Link>
          </Nav.Item>

          <Nav.Item className='Pad'>
            <Link to='/treatments'>
              Treatments
            </Link>
          </Nav.Item>

          <Nav.Item className='Pad'>
            <Link to='/AboutUs'>
              About us
            </Link>
          </Nav.Item>

          {/* <Nav.Item className='Pad'>
            <Link to='/Alltable'>
              Table
            </Link>
          </Nav.Item> */}

        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>

);
