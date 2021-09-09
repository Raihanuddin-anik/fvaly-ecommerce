import React from 'react';
import {
    Button,
    Container,
    FormControl,
    InputGroup,
    Nav,
    Navbar,
} from 'react-bootstrap';
import { FiPhoneCall } from 'react-icons/fi';
import { FaRegEnvelope } from 'react-icons/fa';
import { BsPhone } from 'react-icons/bs';
import logo from '../../assest/fvaly.png';
const Header = () => {
    return (
        <div className="header__component">
            <div className="top-header py-2 bg-light border-bottom">
                <Container className="d-flex align-item-center justify-content-between">
                    <ul className="list-unstyled d-flex align-item-center gap-4">
                        <li>
                            <FiPhoneCall></FiPhoneCall>
                            <a href="tel:01531834607">01531834607</a>
                        </li>
                        <li>
                            <FaRegEnvelope />
                            <a href="mail-to:raihanuddinanikm@gmail.com">
                                raihanuddinanikm@gmail.com
                            </a>
                        </li>
                    </ul>
                    <div>
                        <BsPhone />
                        <a href="https://play.google.com/store/apps/details?id=bd.com.fvaly.fvalyshop">
                            Save big on our app
                        </a>
                    </div>
                </Container>
            </div>
            <div className="middle-header">
                <Container>
                    <div className="d-flex align-item-center">
                        <img className="branding" src={logo} alt="fvaly" />
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button
                                variant="outline-secondary"
                                id="button-addon2"
                            >
                                Button
                            </Button>
                        </InputGroup>
                    </div>
                </Container>
            </div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
