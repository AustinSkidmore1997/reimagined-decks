import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import { useState } from 'react';
import LoginForm from "./LoginForm";
import SignUpForm from "./SignupForm";
import Auth from '../utils/auth';

export default function TheNavbar() {
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState('login'); // Track the active tab

    const handleTabSelect = (key) => {
        setActiveTab(key);
    };

    return (
        <>
            <Navbar className="bg-gray-800 text-white fixed top-0 left-0 w-full shadow-md" expand="lg">
                <Container className="flex items-center justify-between py-2">
                    <Navbar.Brand as={Link} to='/' className="text-red-700 text-xl font-bold">
                        Reimagined Decks
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="navbar" className="text-white" />

                    <Navbar.Collapse id='navbar'>
                        <Nav className="flex space-x-4">
                            {Auth.loggedIn() ? (
                                <>
                                    <Nav.Link as={Link} to='/profile' className="text-white hover:text-gray-400">
                                        Profile
                                    </Nav.Link>
                                    <Nav.Link onClick={Auth.logout} className="text-white hover:text-gray-400">
                                        Logout
                                    </Nav.Link>
                                </>
                            ) : (
                                <Nav.Link onClick={() => setShowModal(true)} className="text-white hover:text-gray-400">
                                    Login/Sign Up
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal
                size='lg'
                show={showModal}
                onHide={() => setShowModal(false)}
                aria-labelledby='signup-modal'
                className="relative"
            >
                <Tab.Container
                    activeKey={activeTab} // Use the state to control the active tab
                    onSelect={handleTabSelect} // Update state when tab is selected
                >
                    <Modal.Header className="bg-blue-600 text-white border-b border-blue-700 rounded-t-lg relative">
                        <Modal.Title id='signup-modal'>
                            <Nav variant='pills' className="flex border-b border-blue-700 rounded-t-lg">
                                <Nav.Item>
                                    <Nav.Link 
                                        eventKey='login'
                                        className={`px-4 py-2 text-blue-200 hover:text-blue-100 transition-all duration-300 rounded-t-lg ${activeTab === 'login' ? 'bg-blue-500 text-white' : ''}`}
                                    >
                                        Login
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link 
                                        eventKey='signup'
                                        className={`px-4 py-2 text-blue-200 hover:text-blue-100 transition-all duration-300 rounded-t-lg ${activeTab === 'signup' ? 'bg-blue-500 text-white' : ''}`}
                                    >
                                        Sign Up
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Modal.Title>
                        <button
                            type="button"
                            className="absolute top-2 right-2 p-1 text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                            onClick={() => setShowModal(false)}
                        >
                           X
                        </button>
                    </Modal.Header>
                    <Modal.Body className="bg-gray-100 rounded-b-lg">
                        <Tab.Content>
                            {activeTab === 'login' && (
                                <Tab.Pane eventKey='login'>
                                    <LoginForm handleModalClose={() => setShowModal(false)} />
                                </Tab.Pane>
                            )}
                            {activeTab === 'signup' && (
                                <Tab.Pane eventKey='signup'>
                                    <SignUpForm handleModalClose={() => setShowModal(false)} />
                                </Tab.Pane>
                            )}
                        </Tab.Content>
                    </Modal.Body>
                </Tab.Container>
            </Modal>
        </>
    );
}
