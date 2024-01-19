import React from 'react'
import Header from '../../../directives/Header/header'
import Footer from '../../../directives/Footer/footer'
import { Link } from 'react-router-dom'
import Hand from '../../../assets/images/icons/waving-hand.png'
import { Container, Row, Col, Nav, Tab, Form, Table } from 'react-bootstrap'
import '../Profile Setting/profile-setting.css'
import Img1 from '../../../assets/images/img/img1.jpg';
import Card1 from '../../../assets/images/icons/card1.png';
import Card2 from '../../../assets/images/icons/card2.png';
import Card3 from '../../../assets/images/icons/card3.png';
import Card4 from '../../../assets/images/icons/card4.png';
import Button from '../../../components/Button'
import strings from '../../../localzation'
import Allbg from '../../../components/All bg Banner/all-bg'

function Profilesetting() {
    return (
        <>
            <Header />
           
            <Allbg title="Hey, Will Smith" linkTo="/" linkText="Home" imageUrl={Hand} profileSetting="Profile Setting"/>

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
                                            <Nav.Link eventKey="Notification">Notification</Nav.Link>
                                        </Nav.Item>

                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="Account">
                                            <div className='profile-content'>
                                                <h4>Account Settings</h4>
                                                <Form className='profile-form'>
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
                                        <Tab.Pane eventKey="Email">
                                            <div className='profile-content'>
                                                <h4>Email</h4>
                                                <Form className='profile-form'>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Email</Form.Label>
                                                        <Form.Control type='email' placeholder="Enter Your Email ID" />
                                                    </Form.Group>
                                                    <Button className="theme-button1 mt-1" hoverColor="theme-button1" label={strings.SaveChanges} />
                                                </Form>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="password">
                                            <div className='profile-content'>
                                                <h4>Create Password</h4>
                                                <Form className='profile-form'>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>New password</Form.Label>
                                                        <Form.Control type='password' placeholder="Enter Your New password" />
                                                    </Form.Group>
                                                    <Form.Group className="mb-3">
                                                        <Form.Label>Verify password</Form.Label>
                                                        <Form.Control type='password' placeholder="Enter Your Verify password" />
                                                    </Form.Group>
                                                    <Button className="theme-button1 mt-1" hoverColor="theme-button1" label={strings.SaveChanges} />
                                                </Form>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Payment methods">
                                            <div className='profile-content'>
                                                <h4>Payment methods</h4>
                                                <p>Save a payment method for fast and easy lesson payments. LearnPTL uses industry-standard encryption to protect your information.</p>
                                                <h4>Credit or debit card</h4>
                                                <div>
                                                    <a><img src={Card1} /></a>
                                                    <a><img src={Card2} /></a>
                                                    <a><img src={Card3} /></a>
                                                    <a><img src={Card4} /></a>
                                                </div>
                                                <Button className="theme-button1 mt-3" hoverColor="theme-button1" label="Add Card" />

                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Payment history">
                                            <div className='profile-content'>
                                                <h4>Payment history</h4>
                                                <Table responsive>
                                                    <thead>
                                                        <tr>
                                                            <th>DATE</th>
                                                            <th>HOURS</th>
                                                            <th>SUBJECT</th>
                                                            <th>DOWNLOAD ALL</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>1</td>
                                                            <td>Mark</td>
                                                            <td>Otto</td>
                                                            <td>@mdo</td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>Jacob</td>
                                                            <td>Thornton</td>
                                                            <td>@fat</td>
                                                        </tr>
                                                        <tr>
                                                            <td>3</td>
                                                            <td colSpan={2}>Larry the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>

                                                <Link to="/">Find your first tutor</Link>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="autoconfirmation">
                                            <div className='profile-content'>
                                                <h4>Lesson autoconfirmation</h4>
                                                <p>LearnPTL will confirm your lessons automatically 72 hours after the scheduled end time unless you report an issue.When a lesson is confirmed, your tutor gets paid. Choose which lessons LearnPTL should confirm automatically:</p>
                                                <p>Autoconfirmation for lessons in the Preply Space
                                                    Autoconfirm tracks the time you spend connected with your tutor in the Preply Space. 15 minutes after a lesson is completed, it is confirmed automatically and we release your tutor's payment. If there are any issues, please contact us right after the lesson and we'll help you find a solution.</p>
                                                <Form.Check
                                                    name="group1"
                                                    type="radio"
                                                    label="Only lessons scheduled by you"
                                                />
                                                <Form.Check
                                                    name="group1"
                                                    type="radio"
                                                    label="All your lessons, including weekly lessons and lessons scheduled or rescheduled by your tutor"
                                                />
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="Notification">
                                            <div className='profile-content'>
                                                <h4>Notification Settings</h4>
                                                <Form className='profile-form'>
                                                    <Form.Check
                                                        label="Lessons and learning"
                                                        type="checkbox"
                                                        name="group1"
                                                    />
                                                    <Form.Check
                                                        label="Tips and discounts"
                                                        type="checkbox"
                                                        name="group1"
                                                    />
                                                    <Button className="theme-button1 mt-1" hoverColor="theme-button1" label={strings.SaveChanges} />
                                                </Form>
                                            </div>
                                        </Tab.Pane>

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
