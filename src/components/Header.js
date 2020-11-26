import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

const Header = () => {
  return (
    <>
      <div>
        <Navbar>
          <Container>
            <Navbar.Brand as={Link} to='/'>
              Gaming 2021
            </Navbar.Brand>
            <Nav className='ml-auto' id='main-navigation'>
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
            <DropdownButton menuAlign='right' title='Menu' id='dropdown-menu'>
              <Dropdown.Item eventKey='1' as={Link} to='/'>
                Home
              </Dropdown.Item>
              <Dropdown.Item eventKey='2' as={Link} to='/games'>
                Games
              </Dropdown.Item>
              <Dropdown.Item eventKey='3' as={Link} to='/characters'>
                Characters
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey='4' as={Link} to='/admin'>
                Admin
              </Dropdown.Item>
            </DropdownButton>
          </Container>
        </Navbar>
      </div>
    </>
  )
}

export default Header
