import React, { useState } from 'react'
import '../View full schedule/view-full-schedule.css'
import Header from '../../directives/Header/header'
import Footer from '../../directives/Footer/footer'
import { Link } from 'react-router-dom'
import { Accordion, Col, Container, OverlayTrigger, Row, Tab, Tabs, Tooltip } from 'react-bootstrap'
import Img5 from '../../assets/images/img/img5.jpg'
import Button from '../../components/Button'
import strings from '../../localzation'
import Allbg from '../../components/All bg Banner/all-bg'
import Scheduleslot from '../../components/Schedule Slot/Schedule-slot'
import BookscheduleSlot from '../../components/models/Book-scheduleSlot'
import SendMessage from '../../components/models/send-message'

function Viewfullschedule() {
    const [modalShow, setModalShow] = useState(false);

    const handleShow = () => setModalShow(true);
    const handleClose = () => setModalShow(false);
    const [sendMessagesadd, setsendMessagesadd] = React.useState(false);

    return (
        <>
            <Header />

            <Allbg title="View Full Schedule" linkTo="/" linkText="Home" />

            <section className='section-padding'>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className='Viewteacher-details'>
                                <Tabs
                                    defaultActiveKey="Schedule"
                                    transition={false}
                                    className="mb-3"
                                >
                                    <Tab eventKey="About" title="About">
                                        <div className="About-learn">
                                            <p>Hello, my name is Isabella! I am a certified English Tutor with two years of experience. I am incredibly passionate about teaching others and making genuine connections, and I love to learn by having good conversations.</p>
                                            <p>I am a college graduate, certified ELS instructor, and certified yoga instructor. I teach yoga classes on the beach weekly, which brings me joy and inspiration for my teaching methodology. Spending time outside is my favorite pastime!</p>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Schedule" title="Schedule">
                                        <Scheduleslot />
                                    </Tab>
                                    <Tab eventKey="Review" title="Review">
                                        <div className='review-area'>
                                            <Row>
                                                <Col lg={4}>
                                                    <div className='review-box'>
                                                        <h1>5.0</h1>
                                                        <div>
                                                            {[...Array(5)].map((_, i) => (
                                                                <a key={i}><i className="fa fa-star" style={{ color: '#ffc014', marginLeft: "4px" }} /></a>
                                                            ))}
                                                        </div>
                                                        <p>1 Reviews</p>
                                                    </div>
                                                </Col>
                                                <Col lg={8}>
                                                    <div className="Review-list">
                                                        <Row className='align-items-center'>
                                                            <Col lg={2}>
                                                                <div><h6>5</h6></div>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <div>
                                                                    {[...Array(5)].map((_, i) => (
                                                                        <a key={i}><i className="fa fa-star" style={{ color: '#ffc014', marginLeft: "4px" }} /></a>
                                                                    ))}
                                                                </div>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '100%' }} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                                                                </div>
                                                            </Col>
                                                            <Col lg={2}>
                                                                <div><h6>100</h6></div>
                                                            </Col>
                                                        </Row>

                                                    </div>
                                                    <div className="Review-list">
                                                        <Row className='align-items-center'>
                                                            <Col lg={2}>
                                                                <div><h6>4</h6></div>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <div>
                                                                    {[...Array(4)].map((_, i) => (
                                                                        <a key={i}><i className="fa fa-star" style={{ color: '#ffc014', marginLeft: "4px" }} /></a>
                                                                    ))}
                                                                </div>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={75} />
                                                                </div>
                                                            </Col>
                                                            <Col lg={2}>
                                                                <div><h6>80</h6></div>
                                                            </Col>
                                                        </Row>

                                                    </div>
                                                    <div className="Review-list">
                                                        <Row className='align-items-center'>
                                                            <Col lg={2}>
                                                                <div><h6>3</h6></div>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <div>
                                                                    {[...Array(3)].map((_, i) => (
                                                                        <a key={i}><i className="fa fa-star" style={{ color: '#ffc014', marginLeft: "4px" }} /></a>
                                                                    ))}
                                                                </div>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '60%' }} aria-valuenow={60} aria-valuemin={0} aria-valuemax={60} />
                                                                </div>
                                                            </Col>
                                                            <Col lg={2}>
                                                                <div><h6>60</h6></div>
                                                            </Col>
                                                        </Row>

                                                    </div>
                                                    <div className="Review-list">
                                                        <Row className='align-items-center'>
                                                            <Col lg={2}>
                                                                <div><h6>2</h6></div>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <div>
                                                                    {[...Array(2)].map((_, i) => (
                                                                        <a key={i}><i className="fa fa-star" style={{ color: '#ffc014', marginLeft: "4px" }} /></a>
                                                                    ))}
                                                                </div>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '40%' }} aria-valuenow={40} aria-valuemin={0} aria-valuemax={40} />
                                                                </div>
                                                            </Col>
                                                            <Col lg={2}>
                                                                <div><h6>50</h6></div>
                                                            </Col>
                                                        </Row>

                                                    </div>
                                                    <div className="Review-list">
                                                        <Row className='align-items-center'>
                                                            <Col lg={2}>
                                                                <div><h6>1</h6></div>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <div>
                                                                    {[...Array(1)].map((_, i) => (
                                                                        <a key={i}><i className="fa fa-star" style={{ color: '#ffc014', marginLeft: "4px" }} /></a>
                                                                    ))}
                                                                </div>
                                                            </Col>
                                                            <Col lg={4}>
                                                                <div className="progress">
                                                                    <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={10} />
                                                                </div>
                                                            </Col>
                                                            <Col lg={2}>
                                                                <div><h6>10</h6></div>
                                                            </Col>
                                                        </Row>

                                                    </div>
                                                </Col>
                                            </Row>
                                            <div className='review-imgComment'>
                                                <div>
                                                    <img src='https://lmszai.zainikthemes.com/uploads_demo/user/student-avatar.jpg' />
                                                </div>
                                                <div>
                                                    <h5>Will Smith</h5>
                                                    <p>1 year ago</p>
                                                    {[...Array(5)].map((_, i) => (
                                                        <a key={i}><i className="fa fa-star" style={{ color: '#ffc014', marginLeft: "4px" }} /></a>
                                                    ))}
                                                    <p>Isabella is an excellent tutor, i really enjoy lessons with her. She is friendly, funny, beautiful, smart, really easy to work with her and makes me so comfortable to talk. If i dont understand something, she explains things to me in an understandable manner. Her communication skills are very good. Thank you Isabella!</p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />

                                        <div className='review-imgComment'>
                                            <div>
                                                <img src='https://lmszai.zainikthemes.com/uploads_demo/user/student-avatar.jpg' />
                                            </div>
                                            <div>
                                                <h5>Will Smith</h5>
                                                <p>1 year ago</p>
                                                {[...Array(5)].map((_, i) => (
                                                    <a key={i}><i className="fa fa-star" style={{ color: '#ffc014', marginLeft: "4px" }} /></a>
                                                ))}
                                                <p>Isabella is an excellent tutor, i really enjoy lessons with her. She is friendly, funny, beautiful, smart, really easy to work with her and makes me so comfortable to talk. If i dont understand something, she explains things to me in an understandable manner. </p>
                                            </div>
                                        </div>

                                    </Tab>
                                    <Tab eventKey="Resume" title="Resume">
                                        <div className='resume-area'>
                                            <Tabs
                                                defaultActiveKey="Education"
                                                transition={false}
                                                className="mb-3"
                                            >
                                                <Tab eventKey="Education" title="Education">
                                                    <div className='resume-content'>
                                                        <div>
                                                            <h6>2018 — 2022</h6>
                                                        </div>
                                                        <div>
                                                            <p>University of Central Florida</p>
                                                            <p>Bachelor's Degree in Sociology</p>
                                                            <a><i className="fa fa-check-circle" />Diploma verified</a>
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab eventKey="Work experience" title="Work experience">
                                                    <div className='resume-content'>
                                                        <div>
                                                            <h6>2021 — 2022</h6>
                                                        </div>
                                                        <div>
                                                            <p>Casa de Ninos</p>
                                                            <p>English and Special Needs Teacher</p>
                                                        </div>
                                                    </div>
                                                    <div className='resume-content'>
                                                        <div>
                                                            <h6>2019 — Present</h6>
                                                        </div>
                                                        <div>
                                                            <p>Costa Kids</p>
                                                            <p>Childcare Professional and Coordinator</p>
                                                        </div>
                                                    </div>
                                                </Tab>
                                                <Tab eventKey="Certifications" title="Certifications">
                                                    <div className='resume-content'>
                                                        <div>
                                                            <h6>2022 — 2022</h6>
                                                        </div>
                                                        <div>
                                                            <p>Teaching English as a Foreign Language (TEFL) Teaching English to Speakers of Other Languages (TESOL)</p>
                                                            <p>Teaching English as a Foreign Language (TEFL) Teaching English to Speakers of Other Languages (TESOL)</p>
                                                            <a><i className="fa fa-check-circle" />Certificate verified</a>
                                                        </div>
                                                    </div>
                                                </Tab>
                                            </Tabs>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="Tutor" title="Tutor">
                                        <div className='Tutor-area'>
                                            <h4>Meet Your Tutor</h4>
                                            <div className='Tutor-content'>
                                                <Row>
                                                    <Col lg={2}>
                                                        <img src='https://lmszai.zainikthemes.com/uploads_demo/user/3.jpg' />
                                                    </Col>
                                                    <Col lg={10}>
                                                        <h5>Darrell Edwards</h5>
                                                        <span><i className="fa fa-star-o" /> 5.0 Rating</span>
                                                        <span><i className="fa fa-graduation-cap" /> 1 Students</span>
                                                        <span><i className="fa fa-television" /> 3 Courses</span>

                                                        <div>
                                                            <h5>About Tutor</h5>
                                                            <p>Freelancers and entrepreneurs Freelancers and entrepreneurs use about.me to grow their audience and get more clients. · Create a page to present who you are and what you do in one link.use about.me to grow their audience and get more clients. · Create a page to present who you are and what you do in one link.</p>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='viewFull-side'>
                                <div className='teacher-price'>
                                    <img src={Img5} />
                                    <h3>$ 30.00</h3>
                                </div>
                                <div className='details'>
                                    <ul>
                                        <li className="d-flex justify-content-between">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--bytesize" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" data-icon="bytesize:clock"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><circle cx={16} cy={16} r={14} /><path d="M16 8v8l4 4" /></g></svg>
                                                <span>Course Duration</span>
                                            </div>
                                            <div>25 sec</div>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--carbon" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" data-icon="carbon:increase-level"><path fill="currentColor" d="m23 4l-5 3.75v6.5L15 12l-5 3.75v6.5L7 20l-5 3.75V30h2v-5.25l3-2.25l3 2.25V30h2V16.75l3-2.25l3 2.25V30h2V8.75l3-2.25l3 2.25V30h2V7.75z" /></svg>
                                                <span>Course Level</span>
                                            </div>
                                            <div>Higher</div>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--heroicons-outline" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="heroicons-outline:users"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 1 1 0 5.292M15 21H3v-1a6 6 0 0 1 12 0zm0 0h6v-1a6 6 0 0 0-9-5.197M13 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0" /></svg>
                                                <span>Student Enrolled</span>
                                            </div>
                                            <div>1</div>
                                        </li>
                                        <li className="d-flex justify-content-between">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--cil" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512" data-icon="cil:language"><path fill="currentColor" d="M320 24H16v304h176v168h304V192H320ZM148.305 96L98.093 239.3H132l8.166-23.3H192v80H48V56h240v136h-66.668L187.7 96Zm36.317 88h-33.244L168 136.562ZM464 224v240H224V224Z" /><path fill="currentColor" d="M317.432 368.48a136.761 136.761 0 0 0 10.089 14.12q-17.4 9.384-39.521 9.4v32c24.141 0 45.71-6.408 64-18.824C370.29 417.592 391.859 424 416 424v-32q-22.075 0-39.52-9.407a136.574 136.574 0 0 0 10.088-14.113A166.212 166.212 0 0 0 406.662 320H424v-32h-56v-24h-32v24h-56v32h17.338a166.212 166.212 0 0 0 20.094 48.48M373.53 320a133.013 133.013 0 0 1-14.1 31.52a104.39 104.39 0 0 1-7.43 10.448a103.546 103.546 0 0 1-6.93-9.651A132.384 132.384 0 0 1 330.466 320Z" /></svg>
                                                <span>Language</span>
                                            </div>
                                            <div>English</div>
                                        </li>
                                    </ul>
                                </div>
                                <Button onClick={handleShow} className="theme-button1 mt-1 w-100" hoverColor="theme-button1" label="Book a trial lesson" />
                                <BookscheduleSlot show={modalShow} onHide={handleClose} />
                                <div className='d-flex justify-content-center'>
                                    <Button className="plan-button mt-3" label={strings.addtowishlist} icon="fa fa-heart-o" iconPosition="left" />
                                    <Button onClick={() => setsendMessagesadd(true)} className="plan-button mt-3" label="Send Message" icon="fa fa-commenting-o" iconPosition="left" />
                                    <SendMessage
                            show={sendMessagesadd}
                            onHide={() => setsendMessagesadd(false)}
                        />

                                </div>
                                <div className='course'>
                                    <h4>This Course Includes</h4>
                                    <ul>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--bi" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16" data-icon="bi:camera-video"><path fill="currentColor" fillRule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175l3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" /></svg>
                                            <span>25 sec Video Lectures</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--healthicons" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48" data-icon="healthicons:i-exam-multiple-choice-outline"><path fill="currentColor" d="M20 15a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z" /><path fill="currentColor" fillRule="evenodd" d="M10 27a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm2 1v3h3v-3z" clipRule="evenodd" /><path fill="currentColor" d="M17.707 15.707a1 1 0 0 0-1.414-1.414L13 17.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L13 20.414z" /><path fill="currentColor" fillRule="evenodd" d="M10 6a4 4 0 0 0-4 4v28a4 4 0 0 0 4 4h20a4 4 0 0 0 4-4V10a4 4 0 0 0-4-4zm-2 4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2zm28 6a3 3 0 1 1 6 0v20.303l-3 4.5l-3-4.5zm3-1a1 1 0 0 0-1 1v2h2v-2a1 1 0 0 0-1-1m0 22.197l-1-1.5V20h2v15.697z" clipRule="evenodd" /></svg>
                                            <span>0 Quizzes</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--bi" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16" data-icon="bi:book"><path fill="currentColor" d="M1 2.828c.885-.37 2.154-.769 3.388-.893c1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493c-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752c1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81c-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02c1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877c1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" /></svg>
                                            <span>0 Assignments</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--akar-icons" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="akar-icons:download"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" /></svg>
                                            <span>0 Downloadable Resources</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--bytesize" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" data-icon="bytesize:clock"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><circle cx={16} cy={16} r={14} /><path d="M16 8v8l4 4" /></g></svg>
                                            <span>Full Lifetime Access</span>
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--lucide" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-icon="lucide:award"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><circle cx={12} cy={8} r={6} /><path d="M15.477 12.89L17 22l-5-3l-5 3l1.523-9.11" /></g></svg>
                                            <span>Certificate of Completion</span>
                                        </li>
                                    </ul>
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

export default Viewfullschedule
