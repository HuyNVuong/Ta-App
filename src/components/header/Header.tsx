import React from 'react';
import { 
  Container, Navbar, Button, OverlayTrigger
} from 'react-bootstrap';
import { registerForm } from './RegisterForm';

interface HeaderProps {
  home?: boolean;
}

function Header(props: HeaderProps) {
  return (
      <Navbar variant="dark" bg="dark">
        <Container>
          <Navbar.Brand href="#">HeyMyTa</Navbar.Brand>
        </Container>
        { props.home &&  (
          <OverlayTrigger trigger="click" placement="left" overlay={registerForm}>
            <Button>Register</Button>
          </OverlayTrigger>
        )}
      </Navbar>
  );
}

export default Header;