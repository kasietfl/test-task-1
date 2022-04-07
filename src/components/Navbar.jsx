import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

import React from 'react'

function Navbarr() {
  return (
    <div>
        <Navbar bg="primary" variant="dark">
            <Container>
                <Link className="link" to='/'>На главную</Link>
                    <Nav className="me-auto">
                        <Link className="link" to='/news'>Новости</Link>
                        <Link className="link" to='/profile'>Профиль</Link>
                    </Nav>
                    <Nav>
                        <Link className="link" to='/login'>Войти</Link>   
                    </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navbarr