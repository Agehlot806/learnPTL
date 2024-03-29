import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import strings from '../../localzation'
import Button from '../../components/Button';

function Tutorsbylanguage() {
    return (
        <>
            <section className='section-padding'>
                <div className='Course-main'>
                    <Container>
                        <Row>
                            <Col lg={8} sm={9} xs={7}>
                                <div className='main-heading'>
                                    <div>
                                        <h1>Tutors By Language's</h1>
                                        <p>CHOOSE FROM 5,000 ONLINE VIDEO COURSES WITH NEW ADDITIONS</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} sm={3} xs={5}>
                                <div className='bolderrightText'>
                                    <Link to='/all-tutors'>
                                        <Button className='bolderBtn' label={strings.ViewAll} icon="fa fa-long-arrow-right" iconPosition="right" />
                                    </Link>
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={3} sm={4} xs={6} className='mb-4'>
                                <Link to="/get-started">
                                    <div className="Tutors-Language">
                                        <h4>English tutors</h4>
                                        <Row>
                                            <Col lg={3}> <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48"><g id="Frame 316128405"><g id="Group 316127862"><circle id="Ellipse 8" cx="24" cy="23" r="4" fill="#121117" stroke="#121117" stroke-width="2"></circle><path id="Vector 1" stroke="#fff" d="M24 20.5V23h2"></path><path id="Rectangle 4438" stroke="#121117" stroke-width="2" d="M18 31h12v13H18z"></path><path id="Rectangle 4439" stroke="#121117" stroke-width="2" d="M16 15h16v16H16z"></path><path id="Rectangle 4440" fill="#121117" d="M14 14h20v2H14z"></path><path id="Rectangle 4444" fill="#121117" d="M14 30h20v2H14z"></path><path id="Rectangle 4441" fill="#121117" d="M17 11h14v2H17z"></path><path id="Rectangle 4442" fill="#121117" d="M19 8h10v2H19z"></path><path id="Rectangle 4443" fill="#121117" d="M23.333 3h1.334L26 7h-4l1.333-4Z"></path><path id="Rectangle 4445" fill="#121117" d="M21 34h2v7h-2z"></path><path id="Rectangle 4446" fill="#121117" d="M25 34h2v7h-2z"></path></g></g></svg>
                                            </Col>
                                            <Col lg={9} className='align-self-center'>
                                                <h6>10,222 teachers</h6>
                                            </Col>
                                        </Row>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={3} sm={4} xs={6} className='mb-4'>
                                <Link to="/get-started">
                                    <div className="Tutors-Language">
                                        <h4>Spanish tutors</h4>
                                        <Row>
                                            <Col lg={3}>
                                                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="48" height="49" fill="none" viewBox="0 0 48 49"><g id="Frame 316128407"><g id="Group 316127865"><path id="Rectangle 4484" fill="#121117" d="M8 42.5h31v2H8z"></path><path id="Ellipse 17" stroke="#121117" stroke-width="2" d="M31 38.5s-1.854-6-7.5-6-7.5 6-7.5 6"></path><g id="Group 316127858"><path id="Rectangle 1761" stroke="#121117" stroke-width="2" d="M33.5 15.867c.24.891.505 1.974.771 3.239.863 4.1 1.729 10.11 1.729 17.714V43.5h-5V36.82c0-7.604.866-13.615 1.729-17.714.266-1.265.531-2.348.771-3.24Z"></path></g><path id="Rectangle 1761_2" stroke="#121117" stroke-width="2" d="M28.5 11.476c.238 1.056.502 2.328.766 3.802C30.132 20.118 31 27.13 31 35.782V43.5h-5V35.782c0-8.652.868-15.663 1.734-20.504.264-1.474.527-2.746.766-3.802Z"></path><g id="Group 316127857"><path id="Rectangle 1761_3" stroke="#121117" stroke-width="2" d="M23.5 20.517c.241.786.51 1.739.778 2.844C25.138 26.897 26 31.992 26 38.2V43.5h-5V38.2c0-6.208.862-11.303 1.722-14.839a49.73 49.73 0 0 1 .778-2.844Z"></path></g><g id="Group 316127859"><path id="Rectangle 1761_4" stroke="#121117" stroke-width="2" d="M13.5 15.867c-.24.891-.505 1.974-.771 3.239C11.866 23.206 11 29.216 11 36.82V43.5h5V36.82c0-7.604-.866-13.615-1.729-17.714a60.361 60.361 0 0 0-.771-3.24Z"></path></g><path id="Rectangle 4476" stroke="#121117" stroke-width="2" d="M18.5 11.476a86.071 86.071 0 0 0-.766 3.802C16.868 20.118 16 27.13 16 35.782V43.5h5V35.782c0-8.652-.868-15.663-1.734-20.504a86.071 86.071 0 0 0-.766-3.802Z"></path><path id="Rectangle 4479" fill="#121117" d="M13.414 8.5h2v2h-2z" transform="rotate(45 13.414 8.5)"></path><path id="Rectangle 4480" fill="#121117" d="M18.414 3.5h2v2h-2z" transform="rotate(45 18.414 3.5)"></path><path id="Rectangle 4481" fill="#121117" d="M23.414 13.5h2v2h-2z" transform="rotate(45 23.414 13.5)"></path><path id="Rectangle 4482" fill="#121117" d="M28.414 3.5h2v2h-2z" transform="rotate(45 28.414 3.5)"></path><path id="Rectangle 4483" fill="#121117" d="M33.414 8.5h2v2h-2z" transform="rotate(45 33.414 8.5)"></path></g></g></svg>
                                            </Col>
                                            <Col lg={9} className='align-self-center'>
                                                <h6>3,222 teachers</h6>
                                            </Col>
                                        </Row>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={3} sm={4} xs={6} className='mb-4'>
                                <Link to="/get-started">
                                    <div className="Tutors-Language">
                                        <h4>French tutors</h4>
                                        <Row>
                                            <Col lg={3}>
                                                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="48" height="49" fill="none" viewBox="0 0 48 49"><g id="Frame 316128408"><g id="Group 316127864"><path id="Rectangle 4468" fill="#fff" stroke="#121117" stroke-width="2" d="M22 7.5h4v3h-4z"></path><g id="Subtract"><mask id="path-2-inside-1_1503_905" fill="#fff"><path d="M22 9.498h4c.5 9.002 7 35 7 35H15s7-26 7-35Z"></path></mask><path fill="#121117" d="M22 9.498v-2h-2v2h2Zm4 0 1.997-.11-.105-1.89H26v2Zm7 35v2h2.562l-.622-2.485-1.94.485Zm-18 0-1.931-.52-.679 2.52H15v-2Zm7-33h4v-4h-4v4Zm2.003-1.889c.26 4.696 2.054 13.616 3.732 21.197a605.29 605.29 0 0 0 3.306 14.1l.014.057.003.015.001.004L33 44.499l1.94-.485v-.004c-.002-.003-.003-.008-.004-.014l-.014-.055-.054-.217a569.857 569.857 0 0 1-.947-3.893 601.76 601.76 0 0 1-2.28-9.888c-1.698-7.669-3.405-16.248-3.644-20.555l-3.994.222ZM33 42.498H15v4h18v-4Zm-18 2 1.931.52v-.002l.002-.003c0-.004.002-.009.004-.015l.015-.058a145.518 145.518 0 0 0 .283-1.069 441.288 441.288 0 0 0 3.214-13.05C22.185 23.258 24 14.27 24 9.498h-4c0 4.228-1.685 12.74-3.45 20.428a437.99 437.99 0 0 1-3.462 13.98l-.014.055-.004.013-.001.003 1.931.521Z" mask="url(#path-2-inside-1_1503_905)"></path></g><path id="Rectangle 4473" fill="#121117" d="M12 42.5h24v2H12z"></path><path id="Rectangle 4471" fill="#121117" stroke="#121117" d="M15.5 35h17v1h-17z"></path><path id="Rectangle 4475" fill="#121117" stroke="#121117" d="M16.5 29h15v1h-15z"></path><path id="Rectangle 4474" fill="#121117" d="M23.333 3.5h1.334l.333 2h-2l.333-2Z"></path><path id="Ellipse 16" stroke="#121117" stroke-width="2" d="m28 43.5-3.328-14h-1.344L20 43.5s.989-3.5 4-3.5 4 3.5 4 3.5Z"></path></g></g></svg>
                                            </Col>
                                            <Col lg={9} className='align-self-center'>
                                                <h6>12,222 teachers</h6>
                                            </Col>
                                        </Row>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={3} sm={4} xs={6} className='mb-4'>
                                <Link to="/get-started">
                                    <div className="Tutors-Language">
                                        <h4>German tutors</h4>
                                        <Row>
                                            <Col lg={3}>
                                                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48"><g id="Frame 316128409"><g id="Group 316127875"><path id="Rectangle 4499" stroke="#121117" stroke-width="2" d="M10 24h4v18h-4z"></path><path id="Rectangle 4500" stroke="#121117" stroke-width="2" d="M18 24h4v18h-4z"></path><path id="Rectangle 4501" stroke="#121117" stroke-width="2" d="M26 24h4v18h-4z"></path><path id="Rectangle 4502" stroke="#121117" stroke-width="2" d="M34 24h4v18h-4z"></path><path id="Rectangle 4503" stroke="#121117" stroke-width="2" d="M10 19h28v5H10v-5Z"></path><path id="Rectangle 4505" stroke="#121117" stroke-width="2" d="M13 14h22v5H13v-5Z"></path><path id="Rectangle 4504" fill="#121117" d="M7 18h34v2H7z"></path><path id="Rectangle 4506" fill="#121117" d="M10 13h28v2H10z"></path><path id="Rectangle 4507" fill="#121117" d="M17 10h14v2H17z"></path><path id="Rectangle 4443" fill="#121117" d="M23.333 5h1.334L26 9h-4l1.333-4Z"></path><path id="Rectangle 4508" fill="#121117" d="M18 6h1l2 3h-3V6Z"></path><path id="Rectangle 4509" fill="#121117" d="M30 6h-1l-2 3h3V6Z"></path><path id="Rectangle 4510" fill="#121117" d="M13 21h1v1h-1z"></path><path id="Rectangle 4511" fill="#121117" d="M16 21h1v1h-1z"></path><path id="Rectangle 4518" fill="#121117" d="M16 16h1v1h-1z"></path><path id="Rectangle 4512" fill="#121117" d="M19 21h1v1h-1z"></path><path id="Rectangle 4519" fill="#121117" d="M19 16h1v1h-1z"></path><path id="Rectangle 4513" fill="#121117" d="M22 21h1v1h-1z"></path><path id="Rectangle 4520" fill="#121117" d="M22 16h1v1h-1z"></path><path id="Rectangle 4514" fill="#121117" d="M25 21h1v1h-1z"></path><path id="Rectangle 4521" fill="#121117" d="M25 16h1v1h-1z"></path><path id="Rectangle 4515" fill="#121117" d="M28 21h1v1h-1z"></path><path id="Rectangle 4522" fill="#121117" d="M28 16h1v1h-1z"></path><path id="Rectangle 4516" fill="#121117" d="M31 21h1v1h-1z"></path><path id="Rectangle 4523" fill="#121117" d="M31 16h1v1h-1z"></path><path id="Rectangle 4517" fill="#121117" d="M34 21h1v1h-1z"></path><path id="Rectangle 4530" fill="#121117" d="M6 41h36v2H6z"></path></g></g></svg>
                                            </Col>
                                            <Col lg={9} className='align-self-center'>
                                                <h6>20,222 teachers</h6>
                                            </Col>
                                        </Row>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={3} sm={4} xs={6} className='mb-4'>
                                <Link to="/get-started">
                                    <div className="Tutors-Language">
                                        <h4>Italian tutors</h4>
                                        <Row>
                                            <Col lg={3}>
                                                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48"><g id="Frame 316128406"><g id="Group 316127863" fill="#121117"><path id="Rectangle 4447" d="M15.911 13.501h23v2h-23z" transform="rotate(10 15.911 13.501)"></path><path id="Rectangle 4450" d="M19.617 4h18v2h-18z" transform="rotate(10 19.617 4)"></path><path id="Rectangle 4448" d="M14.175 23.349h23v2h-23z" transform="rotate(10 14.175 23.349)"></path><path id="Rectangle 4449" d="M12.438 33.197h23v2h-23z" transform="rotate(10 12.438 33.197)"></path><path id="Rectangle 4451" d="M16.549 15.645h2v28h-2z" transform="rotate(10 16.549 15.645)"></path><path id="Rectangle 4464" d="M20.255 6.143h2v8h-2z" transform="rotate(10 20.255 6.143)"></path><path id="Rectangle 4465" d="M34.042 8.574h2v8h-2z" transform="rotate(10 34.042 8.574)"></path><path id="Rectangle 4452" d="M35.26 18.943h2v24h-2z" transform="rotate(10 35.26 18.943)"></path><path id="Rectangle 4453" d="M19.88 19.786a1.5 1.5 0 1 1 2.955.52l-.782 4.432-2.954-.52.781-4.432Z"></path><path id="Rectangle 4456" d="M18.144 29.634a1.5 1.5 0 0 1 2.954.52l-.781 4.432-2.955-.52.782-4.433Z"></path><path id="Rectangle 4459" d="M16.407 39.481a1.5 1.5 0 0 1 2.954.521l-.607 3.447-2.955-.521.608-3.447Z"></path><path id="Rectangle 4454" d="M24.804 20.653a1.5 1.5 0 1 1 2.954.52l-.781 4.433-2.954-.521.781-4.432Z"></path><path id="Rectangle 4462" d="M23.586 10.285a1.5 1.5 0 0 1 2.955.52l-.782 4.432-2.954-.52.781-4.432Z"></path><path id="Rectangle 4457" d="M23.068 30.502a1.5 1.5 0 1 1 2.954.52l-.781 4.432-2.955-.52.782-4.432Z"></path><path id="Rectangle 4460" d="M21.331 40.35a1.5 1.5 0 0 1 2.955.521l-.434 2.462-2.955-.52.434-2.463Z"></path><path id="Rectangle 4455" d="M29.728 21.522a1.5 1.5 0 1 1 2.955.521l-.782 4.432-2.954-.521.781-4.432Z"></path><path id="Rectangle 4463" d="M28.51 11.153a1.5 1.5 0 0 1 2.955.52l-.782 4.433-2.954-.521.782-4.432Z"></path><path id="Rectangle 4458" d="M27.992 31.37a1.5 1.5 0 1 1 2.954.52l-.781 4.432-2.954-.52.781-4.432Z"></path><path id="Rectangle 4461" d="M26.255 41.217a1.5 1.5 0 1 1 2.955.521l-.26 1.478-2.955-.521.26-1.478Z"></path><path id="Rectangle 4466" d="M10 41.652h27v2H10z"></path></g></g></svg>
                                            </Col>
                                            <Col lg={9} className='align-self-center'>
                                                <h6>16,222 teachers</h6>
                                            </Col>
                                        </Row>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={3} sm={4} xs={6} className='mb-4'>
                                <Link to="/get-started">
                                    <div className="Tutors-Language">
                                        <h4>Chinese tutors</h4>
                                        <Row>
                                            <Col lg={3}>
                                                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none" viewBox="0 0 48 48"><g id="Frame 316128410"><g id="Group 316127876"><g id="Group 316127873"><g id="Group 316127871"><path id="Rectangle 4546" fill="#121117" d="M29 19h2v3h-2z"></path><path id="Rectangle 4549" fill="#121117" d="M32 19h2v3h-2z"></path><path id="Rectangle 4545" stroke="#121117" stroke-width="2" d="M27 14.81v1h4V14h1v1.81h4V14h1v17H26V14h1v.81Z"></path></g><g id="Group 316127872"><path id="Rectangle 4546_2" fill="#121117" d="M14 14h2v3h-2z"></path><path id="Rectangle 4549_2" fill="#121117" d="M17 14h2v3h-2z"></path><path id="Rectangle 4545_2" stroke="#121117" stroke-width="2" d="M12 9.81v1h4V9h1v1.81h4V9h1v17H11V9h1v.81Z"></path></g><path id="Rectangle 4550" fill="#fff" d="M9 17h15v7H9z"></path><g id="Group 316127870"><path id="Rectangle 4542" fill="#fff" stroke="#121117" stroke-width="2" d="M22 21v-1h1v19H10V20h1v2h5v-2h1v2h5v-1Z"></path><path id="Rectangle 4543" fill="#121117" d="M12 26h2v4h-2z"></path><path id="Rectangle 4547" fill="#121117" d="M15.5 26h2v4h-2z"></path><path id="Rectangle 4548" fill="#121117" d="M19 26h2v4h-2z"></path></g><path id="Vector 304" fill="#fff" stroke="#121117" stroke-width="2" d="M37 23v8.42L23.734 39H23v-8.42L36.266 23H37Z"></path><path id="Rectangle 4551" fill="#121117" d="M7 38h4v2H7z"></path><path id="Rectangle 4552" fill="#121117" d="M36 30h4v2h-4z"></path></g></g></g></svg>
                                            </Col>
                                            <Col lg={9} className='align-self-center'>
                                                <h6>1,222 teachers</h6>
                                            </Col>
                                        </Row>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={3} sm={4} xs={6} className='mb-4'>
                                <Link to="/get-started">
                                    <div className="Tutors-Language">
                                        <h4>Arabic tutors</h4>
                                        <Row>
                                            <Col lg={3}>
                                                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="48" height="49" fill="none" viewBox="0 0 48 49"><g id="Frame 316128411"><g id="Group 316127878"><g id="Group 316127868"><g id="Group 316127866" stroke="#121117" stroke-width="2"><path id="Rectangle 4524" d="M10 16.5h6v25h-6z"></path><path id="Rectangle 4527" d="M10.025 15.5c.157-3.052 1.013-5.31 1.85-6.83.404-.73.805-1.293 1.125-1.692.32.399.72.961 1.124 1.693.838 1.519 1.694 3.777 1.85 6.829h-5.949Z"></path><rect id="Rectangle 4525" width="4" height="4" x="7" y="15.5" fill="#fff" rx="2"></rect><rect id="Rectangle 4526" width="4" height="4" x="15" y="15.5" fill="#fff" rx="2"></rect></g><g id="Group 316127867" stroke="#121117" stroke-width="2"><path id="Rectangle 4524_2" d="M32 16.5h6v25h-6z"></path><path id="Rectangle 4527_2" d="M32.025 15.5c.157-3.052 1.013-5.31 1.85-6.83.404-.73.805-1.293 1.125-1.692.32.399.72.961 1.124 1.693.838 1.519 1.694 3.777 1.85 6.829h-5.949Z"></path><rect id="Rectangle 4525_2" width="4" height="4" x="29" y="15.5" fill="#fff" rx="2"></rect><rect id="Rectangle 4526_2" width="4" height="4" x="37" y="15.5" fill="#fff" rx="2"></rect></g><path id="Vector 300" stroke="#121117" stroke-width="2" d="M16 30.5c0-7 8-10 8-10s8 3.5 8 10"></path><path id="Rectangle 4497" fill="#121117" d="M24 24.5h2v2h-2z" transform="rotate(45 24 24.5)"></path><path id="Vector 301" stroke="#121117" stroke-width="2" d="M21 41v-3.5c0-2.1 3-3.5 3-3.5s3 1.55 3 3.5v3"></path><path id="Rectangle 4528" fill="#121117" d="M7 29.5h34v2H7z"></path><path id="Rectangle 4529" fill="#121117" d="M6 40.5h36v2H6z"></path></g></g></g></svg>
                                            </Col>
                                            <Col lg={9} className='align-self-center'>
                                                <h6>2,122 teachers</h6>
                                            </Col>
                                        </Row>
                                    </div>
                                </Link>
                            </Col>
                            <Col lg={3} sm={4} xs={6} className='mb-4'>
                                <Link to="/get-started">
                                    <div className="Tutors-Language">
                                        <h4>Japanese tutors</h4>
                                        <Row>
                                            <Col lg={3}>
                                                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" width="48" height="49" fill="none" viewBox="0 0 48 49"><g id="Frame 316128412"><g id="Group 316127877"><g id="Group 316127869"><path id="Rectangle 4536" stroke="#121117" stroke-width="2" d="M12 14.5h5v5h-5z"></path><path id="Rectangle 4539" stroke="#121117" stroke-width="2" d="M12 25.5h5v13h-5z"></path><path id="Rectangle 4537" stroke="#121117" stroke-width="2" d="M22 14.5h4v5h-4z"></path><path id="Rectangle 4538" stroke="#121117" stroke-width="2" d="M31 14.5h5v5h-5z"></path><path id="Rectangle 4540" stroke="#121117" stroke-width="2" d="M31 25.5h5v13h-5z"></path><path id="Rectangle 4534" stroke="#121117" stroke-width="2" d="M10 19.5h28v6H10z"></path><path id="Rectangle 4535" stroke="#121117" stroke-width="2" d="m9.245 14.5-3.175-4h35.86l-3.175 4H9.245Z"></path><path id="Rectangle 4532" fill="#121117" d="M7 37.5h34v2H7z"></path><path id="Rectangle 4541" fill="#121117" d="M23 21.5h2v2h-2z"></path></g></g></g></svg>
                                            </Col>
                                            <Col lg={9} className='align-self-center'>
                                                <h6>10,222 teachers</h6>
                                            </Col>
                                        </Row>
                                    </div>
                                </Link>
                            </Col>

                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Tutorsbylanguage
