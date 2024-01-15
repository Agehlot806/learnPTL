import React, { useState } from 'react'
import Header from '../../../directives/Header/header'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import Img5 from '../../../assets/images/img/img3.jpg'
import Button from '../../../components/Button'
import strings from '../../../localzation'
import '../messages/message.css'
import { Link } from 'react-router-dom'

function Message() {

    // const linknewwindonopne = (linkdata) => {
    //     window.open(linkdata);
    // };

    // const [activeKey, setActiveKey] = useState("Messages"); 

    // const handleTabSelect = (key) => {
    //     setActiveKey(key);
    //     if (key === "For Business") {
    //         linknewwindonopne("your_link_here");
    //     }
    // };
    
    return (
        <>
            <Header />
            <section className='section-padding'>
                <Container fluid >
                    <Col lg={12}>
                        <div className='details-nav'>
                            <Tabs
                                defaultActiveKey="Messages"
                                transition={false}
                                className="mb-3 justify-content-center"
                                // activeKey={activeKey}
                                // onSelect={handleTabSelect}
                            >
                                <Tab eventKey="Home" title="Home">

                                </Tab>
                                <Tab eventKey="Messages" title="Messages">
                                    <Row>
                                        <Col lg={3}>
                                            <div className='all-tabs'>
                                                <Tabs
                                                    defaultActiveKey="All"
                                                    transition={false}
                                                    className="mb-3"
                                                >
                                                    <Tab eventKey="All" title="All">
                                                        <div className='all-massages'>
                                                            <div><img src={Img5} /></div>
                                                            <div>
                                                                <h4>Maham B.</h4>
                                                                <p>Hii</p>
                                                            </div>
                                                            <div className='all-mass-time'>
                                                                <p>18:34</p>
                                                            </div>
                                                        </div>
                                                    </Tab>
                                                    <Tab eventKey="Unread" title="Unread">
                                                        <div className='text-center mt-5'>
                                                            <h6>You’ve read all your messages</h6>
                                                            <p>We will notify you when you have new messages</p>
                                                        </div>
                                                    </Tab>
                                                    <Tab eventKey="Archived" title="Archived">
                                                        <div className='text-center mt-5'>
                                                            <h6>Archived tutors will be here</h6>
                                                            <p>You’ll be able to unarchive them at any time</p>
                                                        </div>
                                                    </Tab>

                                                </Tabs>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                        </Col>
                                        <Col lg={3}>
                                            <div className='viewFull-side'>
                                                <h2>Details</h2>
                                                <div className='teacher-price text-center'>
                                                    <img src={Img5} />
                                                    <h3>Riyaz Singh</h3>
                                                    <div>
                                                        {[...Array(5)].map((_, i) => (
                                                            <a key={i}><i className="fa fa-star" /></a>
                                                        ))}
                                                    </div>
                                                    <h4>₹449.0 <span>Per Lesson</span></h4>
                                                    <div>
                                                        <Button className="plan-button mt-1" label="Archive" icon="fa fa-archive" iconPosition="right" />

                                                    </div>

                                                </div>

                                                <>
                                                    <div className='message-details'>
                                                        <div><h4>1</h4></div>
                                                        <div>
                                                            <h6>Select time</h6>
                                                            <p>Choose a suitable date and time for your first lesson</p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className='message-details'>
                                                        <div><h4>2</h4></div>
                                                        <div>
                                                            <h6>Make a payment</h6>
                                                            <p>Make a secure online payment by PayPal or Visa/Mastercard</p>
                                                        </div>
                                                    </div>
                                                    <hr />
                                                    <div className='message-details'>
                                                        <div><h4>3</h4></div>
                                                        <div>
                                                            <h6>Join lesson in the Preply classroom</h6>
                                                            <p>Meet your tutor for a video call in our virtual classroom
                                                            </p>
                                                        </div>
                                                    </div>
                                                </>

                                                <Button className="theme-button1 mt-1 w-100" hoverColor="theme-button1" label="Book trial lesson" />

                                            </div>
                                        </Col>
                                    </Row>
                                </Tab>
                                <Tab eventKey="My Lessons" title="My Lessons">
                                    <div className='text-center main-heading mt-5'>
                                        <h1 >No lessons yet</h1>
                                        <p>As soon as you find a suitable tutor and book your first lesson, you'll see it here</p>
                                        <Button className="theme-button1 mt-1" hoverColor="theme-button1" label="Find a Private tutor" icon="fa fa-long-arrow-right" iconPosition="right" />
                                   
                                    </div>

                                </Tab>
                                <Tab eventKey="Seting" title="...">

                                </Tab>

                            </Tabs>
                        </div>
                    </Col>
                </Container>
            </section>
        </>
    )
}

export default Message
