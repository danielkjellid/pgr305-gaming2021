import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand as={Link} to='/'>
          Gaming 2021
        </Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to='/'>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to='/games'>
            Games
          </Nav.Link>
          <Nav.Link as={Link} to='/characters'>
            Characters
          </Nav.Link>
          <Nav.Link as={Link} to='/admin'>
            Admin
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Header
