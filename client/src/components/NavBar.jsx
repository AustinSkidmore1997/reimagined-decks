import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';

import Auth from '../utils/auth';

export default function TheNavbar() {

    return (
        <>
            <Navbar >
                <Container className="" style={{ display: 'inline', width: '100%' }}>
                    <Navbar.Brand as={Link} to='/'>
                        Reimagined Decks
                    </Navbar.Brand>

                    <Navbar.Collapse id='navbar' className=''>
                        <Nav className='links'>

                            {/* if user is logged in show saved books and logout */}
                            {Auth.loggedIn() ? (
                                <>
                                    <Nav.Link as={Link} to='/profile'>
                                        Profile
                                    </Nav.Link>
                                    <Nav.Link as={Link} to='/decks'>
                                        Decks
                                    </Nav.Link>
                                    <Nav.Link as={Link} to='/search'>
                                        Search For Cards
                                    </Nav.Link>
                                    <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                                </>
                            ) : (
                                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

