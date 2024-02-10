import React from 'react'
import Header from '../../../directives/Header/header'
import Footer from '../../../directives/Footer/footer'
import { Col, Container, Form, InputGroup, Row, Tab, Tabs } from 'react-bootstrap'
import Img1 from '../../../assets/images/img/img1.jpg'
import { Link } from 'react-router-dom'
import '../checkout Slot/checkout.css';
import Button from '../../../components/Button'

function Checkout() {
    return (
        <>
            <Header />
            <section className='section-padding'>
                <Container>
                    <Row>
                        <Col lg={5}>
                            <div className='checkout-user-data'>
                                <div className='checkout-name'>
                                    <Row>
                                        <Col lg={3}>
                                            <img src={Img1} />
                                        </Col>
                                        <Col lg={9}>
                                            <p>English</p>
                                            <div className='checkout-review'>
                                                <div>
                                                    <h4>Jenny</h4>
                                                </div>
                                                <div>
                                                    <a><i className="fa fa-star" /> 0 reviews</a>
                                                </div>
                                            </div>
                                            <Link><i className="fa fa-graduation-cap" /> <span>Professional</span></Link>
                                        </Col>
                                    </Row>
                                </div>

                                <div className='Checkout-timing'>
                                    <Tabs
                                        defaultActiveKey="25Min"
                                        transition={false}
                                        id="noanim-tab-example"
                                        className="mb-3"
                                    >
                                        <Tab eventKey="25Min" title="25Min. ₹400">
                                            <hr />
                                            <div>
                                                <h5>Monday, 12 February at 18:30</h5>
                                                <p>Time is based on your location</p>
                                            </div>
                                            <hr />
                                            <h4>Your order</h4>
                                            <div className='checkout-order-content'>
                                                <div>50-min lesson</div>
                                                <div>₹829.80</div>
                                            </div>
                                            <div className='checkout-order-content'>
                                                <div>Processing fee</div>
                                                <div>₹41.49</div>
                                            </div>
                                            <div className='checkout-order-content'>
                                                <div>Total</div>
                                                <div><h5>₹871.29</h5></div>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="50Min" title="50Min. ₹800">
                                            <hr />
                                            <div>
                                                <h5>Monday, 12 February at 18:30</h5>
                                                <p>Time is based on your location</p>
                                            </div>
                                            <hr />
                                            <h4>Your order</h4>
                                            <div className='checkout-order-content'>
                                                <div>50-min lesson</div>
                                                <div>₹1400</div>
                                            </div>
                                            <div className='checkout-order-content'>
                                                <div>Processing fee</div>
                                                <div>₹41</div>
                                            </div>
                                            <div className='checkout-order-content'>
                                                <div>Total</div>
                                                <div><h5>₹1441</h5></div>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                            </div>
                        </Col>
                        <Col lg={7} className='align-self-center'>
                            <div className='Choose-pay-data'>
                                <div className='Choose-pay'>
                                    <h2>Choose how to pay</h2>
                                    <div className='Checkout-timing'>
                                        <Tabs
                                            defaultActiveKey="25Min"
                                            transition={false}
                                            id="noanim-tab-example"
                                            className="mb-3"
                                        >
                                            <Tab eventKey="25Min" title="Card">
                                                <div className='checkout-card'>
                                                    <Form>
                                                        <InputGroup className="mb-3">
                                                            <Form.Control
                                                                placeholder="1234 1234 1234 1234"
                                                                aria-label="Recipient's username"
                                                                aria-describedby="basic-addon2"
                                                            />
                                                            <InputGroup.Text id="basic-addon2"><i className="fa fa-credit-card" /></InputGroup.Text>
                                                        </InputGroup>
                                                        <Row className="mb-3">
                                                            <Col>
                                                                <Form.Control placeholder="MM" />
                                                            </Col>
                                                            <Col>
                                                                <Form.Control placeholder="YY" />
                                                            </Col>
                                                            <Col>
                                                                <Form.Control placeholder="CYC" />
                                                            </Col>
                                                        </Row>
                                                        <Form.Group className="mb-3" id="formGridCheckbox">
                                                            <Form.Check type="checkbox" label="Save this card for future payments" />
                                                        </Form.Group>
                                                        <Button className="theme-button1 w-100" label="Confirm Payment" />
                                                    </Form>
                                                </div>
                                            </Tab>
                                            <Tab eventKey="50Min" title="Paypal">
                                                <div className='checkout-card'>
                                                    <Form>
                                                        <p>Press the PayPal button to continue</p>
                                                        <Form.Group className="mb-3" id="formGridCheckbox">
                                                            <Form.Check type="checkbox" label="Save my PayPal email for future payments" />
                                                        </Form.Group>
                                                        <Link to="https://www.paypal.com/signin" target='_blank'>
                                                            <Button className="theme-button1 w-100" label="Paypal" />
                                                        </Link>
                                                    </Form>
                                                </div>
                                            </Tab>
                                        </Tabs>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Checkout
