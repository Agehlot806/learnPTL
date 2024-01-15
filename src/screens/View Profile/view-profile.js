import React from 'react'
import '../View Profile/view-profile.css'
import Header from '../../directives/Header/header'
import Footer from '../../directives/Footer/footer'
import { Link } from 'react-router-dom'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Img5 from '../../assets/images/img/img5.jpg'
import IMG3 from '../../assets/images/img/img3.jpg'
import Img7 from '../../assets/images/img/img7.jpg'
import Membership1 from '../../assets/images/icons/membership_1.png';
import Membership2 from '../../assets/images/icons/membership_2.png';
import Membership3 from '../../assets/images/icons/membership_3.png';
import Membership4 from '../../assets/images/icons/membership_4.png';
import Membership5 from '../../assets/images/icons/membership_5.png';
import Ranking from '../../assets/images/icons/ranking.png';
import Homework from '../../assets/images/icons/homework.png';
import Video from '../../assets/images/icons/video-camera.png';
import Reading from '../../assets/images/icons/reading.png';
import Quizz from '../../assets/images/icons/quizz.png';
import Assignments from '../../assets/images/icons/ass.png';
import Meeting from '../../assets/images/icons/meeting.png';
import Star from '../../assets/images/icons/star.png';
import Web from '../../assets/images/icons/web.png';
import Bookschedule from '../../components/models/book-schedule';

function Viewprofile() {
    const [modalShow, setModalShow] = React.useState(false);


    return (
        <>
            <Header />
            <div className='gradient-bg'>
                <div className='overlay-bg'>
                    <div className='all-bg'>
                        <h1>About Instructor</h1>
                        <Link to='/'>Home</Link> <span>/ About Instructor</span>
                    </div>
                </div>
            </div>

            <section className='section-padding'>
                <Container>
                    <Row>
                        <Col lg={9}>
                            <div className='view-profile-area'>
                                <h3>About Johnny Depp</h3>
                                <p>Freelancers and entrepreneurs Freelancers and entrepreneurs use about.me to grow their audience and get more clients. · Create a page to present who you are and what you do in one link.use about.me to grow their audience and get more clients. · Create a page to present who you are and what you do in one link.</p>
                                <h3>Skills</h3>
                                <p>No skills to show</p>
                            </div>
                            <div className='view-profile-area'>
                                <Row>
                                    <Col lg={6}>
                                        <h3>Certifications</h3>
                                        <p>No certificate to show</p>
                                    </Col>
                                    <Col lg={6}>
                                        <h3>Awards</h3>
                                        <p>No award to show</p>
                                    </Col>
                                </Row>
                            </div>
                            <div className='view-profile-area'>
                                <h3>My courses (6)</h3>
                                <Row className='mb-3'>
                                    <Col lg={4} className='mb-4'>
                                        <div className='course-cards'>
                                            <img src={Img7} />
                                            <h4>Italian:   Understanding the Weird Part...</h4>
                                            <p>Johnny Depp</p>
                                            <div>
                                                <a><i className="fa fa-star" /></a>
                                                <a><i className="fa fa-star" /></a>
                                                <a><i className="fa fa-star" /></a>
                                                <a><i className="fa fa-star" /></a>
                                                <a><i className="fa fa-star" /></a>
                                            </div>
                                            <h5>Price: ₹500</h5>
                                        </div>
                                    </Col>
                                    <Col lg={4} className='mb-4'>
                                        <div className='course-cards'>
                                            <img src={Img5} />
                                            <h4>Italian:   Understanding the Weird Part...</h4>
                                            <p>Johnny Depp</p>
                                            <div>
                                                <a><i className="fa fa-star" /></a>
                                                <a><i className="fa fa-star" /></a>
                                                <a><i className="fa fa-star" /></a>
                                                <a><i className="fa fa-star" /></a>
                                                <a><i className="fa fa-star" /></a>
                                            </div>
                                            <h5>Price: ₹500</h5>
                                        </div>
                                    </Col>

                                </Row>
                            </div>
                        </Col>
                        <Col lg={3}>
                            <div className='view-profile-cardProfile'>
                                <img src={IMG3} />
                                <h3>Darrell Edwards</h3>
                                <p>English tutors || Author Level 2</p>
                                <div className='cardProfile-membership'>
                                    <a><img src={Membership1} /></a>
                                    <a><img src={Membership2} /></a>
                                    <a><img src={Membership3} /></a>
                                    <a><img src={Membership4} /></a>
                                    <a><img src={Membership5} /></a>
                                </div>
                                <Button className="Follow-button">Follow</Button>

                            </div>
                            <div className='following-list'>
                                <Row>
                                    <Col lg={6}>
                                        <div className='text-center'>
                                            <h6>2</h6>
                                            <p>Followers</p>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className='text-center'>
                                            <h6>4</h6>
                                            <p>Following</p>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className='following-list'>
                            <ul>
                                <li><img src={Ranking} /> <span>Author Level 3 (Ranking)</span></li>
                                <li><img src={Homework} /> <span>6 Courses</span></li>
                                <li><img src={Video} /> <span>26 Video Lectures</span></li>
                                <li><img src={Reading} /> <span>3 Students</span></li>
                                <li><img src={Quizz} /> <span>2 Quizzes</span></li>
                                <li><img src={Assignments} /> <span>1 Assignments</span></li>
                                <li><img src={Meeting} /> <span>3 Meetings</span></li>
                                <li><img src={Star} /> <span>1 Reviews (5.0 average)</span></li>
                                <li><img src={Web} /> <span>Khulna, Bangladesh</span></li>
                            </ul>
                            <div>
                            <a><i className="fa fa-facebook-official" /></a>
                            <a><i className="fa fa-twitter-square" /></a>
                            <a><i className="fa fa-linkedin-square" /></a>
                            <a><i className="fa fa-pinterest-square" /></a>
                            </div>

                            <div className='view-profilebookbtn'>
                            <Button className="theme-button1" onClick={() => setModalShow(true)}>
                                            Book Schedule</Button>
                                        <Bookschedule
                                            show={modalShow}
                                            onHide={() => setModalShow(false)}
                                        />
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

export default Viewprofile
