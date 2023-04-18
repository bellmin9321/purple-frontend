import { useRouter } from 'next/router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  const { pathname } = useRouter();

  return (
    <Navbar bg="dark" variant="dark" style={{ height: '8vh' }}>
      <Container>
        <Navbar.Brand href="/">AWESOME FOOD STORE</Navbar.Brand>
        <Nav
          className="me-auto"
          style={{
            marginLeft: 100,
          }}
        >
          <Nav.Link
            className={pathname === '/about' ? 'active' : ''}
            style={{ marginRight: 30 }}
            href="/about"
          >
            ABOUT
          </Nav.Link>
          <Nav.Link
            className={pathname === '/store' ? 'active' : ''}
            href="/store"
          >
            STORE
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
