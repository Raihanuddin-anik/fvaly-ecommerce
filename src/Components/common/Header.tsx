import React from 'react';
import {
    Button,
    Container,
    FormControl,
    InputGroup,
    Nav,
    Navbar,
} from 'react-bootstrap';
import { FiPhoneCall, FiShoppingBag } from 'react-icons/fi';
import { FaRegEnvelope } from 'react-icons/fa';
import { BsPhone } from 'react-icons/bs';
import logo from '../../assest/fvaly.png';
import { BiSearch, BiUser } from 'react-icons/bi';
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
                    <div className="d-flex align-item-center gap-5 py-3">
                        <img className="branding" src={logo} alt="fvaly" />
                        <InputGroup>
                            <FormControl
                                className="border border-primary"
                                placeholder="Recipient's username"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="primary" id="button-addon2">
                                <BiSearch />
                            </Button>
                        </InputGroup>
                        <ul className="icon-list list-unstyled d-flex gap-2">
                            <li>
                                <FiShoppingBag />
                            </li>
                            <li>
                                <BiUser />
                            </li>
                        </ul>
                    </div>
                </Container>
            </div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Categories</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">News feed</Nav.Link>
                        <Nav.Link href="#features">Merchant Zone</Nav.Link>
                        <Nav.Link href="#pricing">Help</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
