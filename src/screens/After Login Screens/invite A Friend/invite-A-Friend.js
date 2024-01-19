import React from 'react'
import Header from '../../../directives/Header/header'
import { Link } from 'react-router-dom'
import { Accordion, Col, Container, Row } from 'react-bootstrap'
import Button from '../../../components/Button'
import "../invite A Friend/invite-a-friend.css"
import InviteBG from '../../../assets/images/img/invi.png'
import Footer from '../../../directives/Footer/footer'
import Allbg from '../../../components/All bg Banner/all-bg'


function InviteAFriend() {
    return (
        <>
            <Header />
            <Allbg title="Invite A Friend" linkTo="/" linkText="Home"/>

            <section className='section-padding'>
                <Container>
                    <Row>

                        <Col lg={6}>
                            <div className='invite-img'>
                                <img src={InviteBG} />
                            </div>
                        </Col>
                        <Col lg={6} sm={6} className='align-self-center'>
                            <div className='invite-head'>
                                <h2>Refer a friend, get a discount</h2>
                                <p>To give a friend 70% off, book a lesson for yourself, then return to this page to get your referral link. If they subscribe, you’ll get $15 (that's 1243.95 INR) after their first subscription lesson.</p>
                                <Link to="/find-tutor">
                                    <Button className="theme-button1 mt-1" hoverColor="theme-button1" label="Book My First Lesson" />
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='section-padding'>
                <Container>
                    <Row>
                        <Col lg={4} sm={4}>
                            <div className='invite-card'>
                                <h4>Invite your friends</h4>
                                <p>Send your referral link to your friends and family, or post it on your website or social media</p>
                            </div>
                        </Col>
                        <Col lg={4} sm={4}>
                            <div className='invite-card'>
                                <h4>Share the joy</h4>
                                <p>Your friends get 70% off their first lesson on Preply with any tutor who charges $7 or more</p>
                            </div>
                        </Col>
                        <Col lg={4} sm={4}>
                            <div className='invite-card'>
                                <h4>Earn endlessly</h4>
                                <p>If your friend subscribes, you’ll get 1243.95 INR credited to your Preply balance after their first subscription lesson</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='section-padding'>
                <div className='how-works-bg'>
                    <Container>
                        <div className='text-center main-heading'>
                            <h1 >Let’s see how it works</h1>
                        </div>
                        <Row>
                            <Col lg={6}>
                                <div className='how-invite-box'>
                                    <div><h4>1</h4></div>
                                    <div>
                                        <h6>You share with a friend</h6>
                                        <p>Let's say you have a friend who always wanted to learn French. You send them your referral link for 70% off their first lesson on Preply!</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className='how-invite-box'>
                                    <div><h4>2</h4></div>
                                    <div>
                                        <h6>They love their lesson</h6>
                                        <p>Your friend subscribes to their tutor and takes another lesson. You earn 1243.95 INR in credit to use toward your next payment.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className='how-invite-box'>
                                    <div><h4>3</h4></div>
                                    <div>
                                        <h6>You share your link with more friends</h6>
                                        <p>Your other friends hear you talking about Preply and want to try it, too! You send them your referral link and earn 1243.95 INR for every friend who starts learning.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className='how-invite-box'>
                                    <div><h4>4</h4></div>
                                    <div>
                                        <h6>Everyone saves on their lessons</h6>
                                        <p>You and your friends decide to travel together using the extra money you've been able to save!</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>

            <section className='section-padding'>
                <Container>
                    <div className='text-center main-heading'>
                        <h1>Sounds too good to be true? <br />Try it out!</h1>
                    </div>
                    <div className='faq'>
                        <Accordion defaultActiveKey="">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    How will I get paid?
                                </Accordion.Header>
                                <Accordion.Body>
                                    You’ll receive 1243.95 INR in credit 24 hours after your referred friend confirms their first subscription lesson on Preply. The credit will be added to your Preply balance, available at checkout. Use it as a discount on your future lessons!
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    How much will I earn?
                                </Accordion.Header>
                                <Accordion.Body>
                                    Every time your friends use your referral link for a discount on their trial lesson, you’ll receive 1243.95 INR in credit after their first subscription lesson. There’s no limit to how many friends you can invite. The more friends you invite, the more you can earn!
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </div>
                </Container>

            </section>

            <Footer />
        </>
    )
}

export default InviteAFriend
