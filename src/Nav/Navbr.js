import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Navbr = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" navbar-fixed-top>
        <Container>
          <Navbar.Brand href="/">E-shoping</Navbar.Brand>
          <Nav className="m-auto">

            
            <Nav.Link href="/" className='mx-2'>Home</Nav.Link>
            <Nav.Link href="/about" className='mx-2'>About</Nav.Link>
            <Nav.Link href="/contact" className='mx-2'>Contact</Nav.Link>
            <Nav.Link href="/product" className='mx-2'>Product</Nav.Link>

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbr