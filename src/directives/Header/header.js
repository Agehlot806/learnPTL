import React, { useState } from 'react';
import { Container, Form, Nav, Navbar, NavDropdown, Dropdown, InputGroup } from 'react-bootstrap';
import '../Header/header.css';
import Logo from '../../assets/images/logo.png';
import En from '../../assets/images/icons/en.png';
import Img1 from '../../assets/images/img/img1.jpg';
import { Link } from 'react-router-dom';
import strings from "../../localzation";
import Button from '../../components/Button';
import Multilang from '../../components/language/multi-language';
import Balance from '../../components/models/Balance';
import Notification from '../../components/models/notification';


function Header() {
    const [modalShow, setModalShow] = React.useState(false);
    const [notificationShow, setnotificationShow] = React.useState(false);
   
    return (
        <Navbar expand="lg" className="nav-bg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src={Logo} alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">

                    <Nav className="nav-menus ms-auto my-2 my-lg-0">
                        <Nav.Link><Link to="/get-started">Find tutors</Link></Nav.Link>
                        <Nav.Link><Link to="/become-a-tutor"> {strings.Becomeatutor}</Link></Nav.Link>
                        <Nav.Link><Link to='/contact'>Contact</Link></Nav.Link>
                        <Nav.Link><Multilang /></Nav.Link>
                        <NavDropdown title="Currency" id="">
                            <NavDropdown.Item href="">USD</NavDropdown.Item>
                            <NavDropdown.Item href="">UAH</NavDropdown.Item>
                            <NavDropdown.Item href="">EUR</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={() => setModalShow(true)}><svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path fillRule="evenodd" d="M4 6h14v2h-4a4 4 0 000 8h4v2H4V6zm16 10v4H2V4h18v4h2v8h-2zm-8-4a2 2 0 114 0 2 2 0 01-4 0z"
                                clipRule="evenodd" /></svg>  Balance: 0 lessons</Nav.Link>
                        <Balance
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                        <Nav.Link><Link to="/wishlist"><i className="fa fa-heart-o" /></Link></Nav.Link>
                        <Nav.Link onClick={() => setnotificationShow(true)}><Link><i className="fa fa-bell-o" /></Link></Nav.Link>
                        <Notification
                            show={notificationShow}
                            onHide={() => setnotificationShow(false)}
                        />

                        <Nav.Link><Link to="/login">
                            <Button hoverColor="theme-button1" label={strings.signinbtn} />
                        </Link></Nav.Link>
                        <NavDropdown className='profile-icon' title={<img src={Img1} alt="Currency" />}>
                            <NavDropdown.Item><Link to="/find-tutor">Home</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/message">Messages</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/my-learning">My Learning</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/wishlist">Saved Tutor</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/invite-a-friend">invite A Friend</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/profile-setting">Profile Setting</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="">Help</Link></NavDropdown.Item>
                            <hr />
                            <NavDropdown.Item><Link to="">Logout</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
