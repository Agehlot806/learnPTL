import React from 'react'
import Header from '../../../directives/Header/header'
import Footer from '../../../directives/Footer/footer'
import { Link } from 'react-router-dom'
import Hand from '../../../assets/images/icons/waving-hand.png'
import { Container, Row, Col, Nav, Tab, Form } from 'react-bootstrap'
import '../Profile Setting/profile-setting.css'
import Img1 from '../../../assets/images/img/img1.jpg';
import Button from '../../../components/Button'
import strings from '../../../localzation'

function Profilesetting() {
    return (
        <>
            <Header />
            <div className='gradient-bg'>
                <div className='overlay-bg'>
                    <div className='all-bg'>
                        <h1>Hey, Will Smith <img src={Hand} /></h1>
                        <Link to='/'>Home</Link> <span>/ Profile Setting</span>
                    </div>
                </div>
            </div>

            <section className='section-padding'>
                <Container>
                    <div className='profile-area'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="Account">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="Account">Account</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="Email">Email</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="password">Password</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="Payment methods">Payment Methods</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="Payment history">Payment History</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="autoconfirmation">Autoconfirmation</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="Calendar">Calendar</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="Notification">Notification</Nav.Link>
                                        </Nav.Item>

                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="Account">
                                            <div className='profile-content'>
                                                <h4>Account Settings</h4>
                                                <Form>
                                                    <div className='profile-imgArea'>
                                                        <div>
                                                            <div className="profile-image">
                                                                <img className="avater-image" src={Img1} alt="img" />
                                                                <div className="custom-fileuplode">
                                                                    <label htmlFor="fileuplode" className="file-uplode-btn bg-hover text-white">
                                                                        <i className="fa fa-pencil-square-o" />
                                                                    </label>
                                                                    <input type="file" id="fileuplode" name="image" accept="image/*" className="putImage1" onchange="previewFile(this)" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='align-self-center'>
                                                            <h6>Select Your Picture</h6>
                                                            <p>Accepted Image Files: JPEG, JPG, PNG</p>
                                                            <p>Accepted Size: 300 x 300 (1MB)</p>
                                                        </div>
                                                    </div>

                                                    <Row className="mb-3">
                                                        <Form.Group as={Col}>
                                                            <Form.Label>First Name</Form.Label>
                                                            <Form.Control type="text" placeholder="Enter First Name" />
                                                        </Form.Group>

                                                        <Form.Group as={Col}>
                                                            <Form.Label>Last name</Form.Label>
                                                            <Form.Control type="text" placeholder="Enter Last name" />
                                                        </Form.Group>
                                                        </Row>
                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Phone number</Form.Label>
                                                            <Form.Control type='number' placeholder="+91" />
                                                        </Form.Group>

                                                        <Form.Group className="mb-3">
                                                            <Form.Label>Timezone</Form.Label>
                                                            <Form.Select defaultValue="Africa/Abidjan GMT +0:00">
                                                                <option>Africa/Abidjan GMT +0:00</option>
                                                                <option>Africa/Accra GMT +0:00</option>
                                                                <option>Africa/Addis_Ababa GMT +3:00</option>
                                                                <option>Africa/Algiers GMT +1:00</option>
                                                                <option>Africa/Asmara GMT +3:00</option>
                                                                <option>Africa/Bamako GMT +0:00</option>
                                                                <option>Africa/Banjul GMT +0:00</option>
                                                                <option>Asia/Makassar GMT +8:00</option>
                                                                <option>Indian/Antananarivo GMT +3:00</option>
                                                                <option>Indian/Christmas GMT +7:00</option>
                                                                <option>Pacific/Chuuk GMT +10:00</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                        <Button className="theme-button1 mt-1" hoverColor="theme-button1" label={strings.SaveChanges} />

                                                    
                                                </Form>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Email">Email tab content</Tab.Pane>
                                        <Tab.Pane eventKey="password">Email tab content</Tab.Pane>
                                        <Tab.Pane eventKey="Payment methods">Email tab content</Tab.Pane>
                                        <Tab.Pane eventKey="Payment history">Email tab content</Tab.Pane>
                                        <Tab.Pane eventKey="autoconfirmation">Email tab content</Tab.Pane>
                                        <Tab.Pane eventKey="Notification">Email tab content</Tab.Pane>

                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </Container>
            </section >
            <Footer />
        </>
    )
}

export default Profilesetting
