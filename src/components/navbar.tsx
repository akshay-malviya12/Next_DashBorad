'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar, Container, Form, Nav, NavDropdown } from 'react-bootstrap';

const TopNavbar: React.FC = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand className="me-auto ms-5">
          <Link href="/" className="navbar-brand text-white text-decoration-none">Dashboard</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0 gap-3 gap-md-3 gap-lg-4 fs-6 fs-md-5 fs-lg-4"
            style={{ maxHeight: '100px', overflowY: 'auto', paddingRight: '1rem' }}
            navbarScroll
          >
            <Link href="/" passHref legacyBehavior><Nav.Link>Home</Nav.Link></Link>
            <Link href="/about" passHref legacyBehavior><Nav.Link>About Us</Nav.Link></Link>
            <Link href="/services" passHref legacyBehavior><Nav.Link>Services</Nav.Link></Link>
            <Link href="/blog" passHref legacyBehavior><Nav.Link>Blog</Nav.Link></Link>
            <Link href="/contact" passHref legacyBehavior><Nav.Link>Contact Us</Nav.Link></Link>

            {/* <NavDropdown title="More" id="navbarScrollingDropdown">
              <Link href="/action" passHref legacyBehavior><NavDropdown.Item>Action</NavDropdown.Item></Link>
              <Link href="/another-action" passHref legacyBehavior><NavDropdown.Item>Another action</NavDropdown.Item></Link>
              <NavDropdown.Divider />
              <Link href="/something-else" passHref legacyBehavior><NavDropdown.Item>Something else here</NavDropdown.Item></Link>
            </NavDropdown> */}
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
