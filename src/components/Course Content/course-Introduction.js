import React, { useState } from 'react'
import { Container, Tabs, Tab, Row, Col, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from '../Button'
import Empty from "../../assets/images/icons/empty-data-img.png"
import Writereview from '../models/Write-review'

function CourseIntroduction() {
  const [modalShow, setModalShow] = useState(false);

    const handleShow = () => setModalShow(true);
    const handleClose = () => setModalShow(false);
  return (
    <>
      <section className='section-padding'>
        <Container>
          <Row>
            <Col lg={6}>
            <div className='main-heading'>
            <h1>Introduction</h1>
          </div>
            </Col>
            <Col lg={6}>
              <div className='write-review'>
                <Link onClick={handleShow}>Write A Review</Link>
              </div>
              <Writereview show={modalShow} onHide={handleClose} />
            </Col>
          </Row>
          <div className='Viewteacher-details'>
            <Tabs
              defaultActiveKey="OVERVIEW"
              transition={false}
              className="mb-3"
            >
              <Tab eventKey="OVERVIEW" title="OVERVIEW">
                <p>Hello, my name is Isabella! I am a certified English Tutor with two years of experience. I am incredibly passionate about teaching others and making genuine connections, and I love to learn by having good conversations.</p>
                <p>I am a college graduate, certified ELS instructor, and certified yoga instructor. I teach yoga classes on the beach weekly, which brings me joy and inspiration for my teaching methodology. Spending time outside is my favorite pastime!</p>
              </Tab>
              <Tab eventKey="RESOURCES" title="RESOURCES">
                <div className='RESOURCES'>
                  <h4>Resources(1)</h4>
                  <Link ><i class="fa fa-link" /> 1654515133-laravel-preview-html.zip</Link>
                </div>
              </Tab>
              <Tab eventKey="Review" title="Review">
                <div className='review-area'>
                  <Row>
                    <Col lg={4}>
                      <div className='review-box'>
                        <h1>5.0</h1>
                        <div>
                          {[...Array(5)].map((_, i) => (
                            <a key={i}><i className="fa fa-star" style={{ color: '#ffc014', marginLeft: "4px" }}/></a>
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
                                <a key={i}><i className="fa fa-star" style={{ color: '#ffc014', marginLeft: "4px" }}/></a>
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
                                <a key={i}><i className="fa fa-star" style={{ color: '#ffc014', marginLeft: "4px" }}/></a>
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
                                <a key={i}><i className="fa fa-star" style={{ color: '#ffc014', marginLeft: "4px" }}/></a>
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
                                <a key={i}><i className="fa fa-star" style={{ color: '#ffc014', marginLeft: "4px" }}/></a>
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
                                <a key={i}><i className="fa fa-star" style={{ color: '#ffc014', marginLeft: "4px" }}/></a>
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
                        <a key={i}><i className="fa fa-star" style={{ color: '#ffc014', marginLeft: "4px" }}/></a>
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
                      <a key={i}><i className="fa fa-star" style={{ color: '#ffc014', marginLeft: "4px" }}/></a>
                    ))}
                    <p>Isabella is an excellent tutor, i really enjoy lessons with her. She is friendly, funny, beautiful, smart, really easy to work with her and makes me so comfortable to talk. If i dont understand something, she explains things to me in an understandable manner. </p>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="QUIZ" title="QUIZ">
                <div className='quiz-area'>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Quiz Name</th>
                        <th>Quiz Types</th>
                        <th>Total Question</th>
                        <th>Time Duration</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Javascript Basic</td>
                        <td>True false</td>
                        <td>2</td>
                        <td>1 minutes</td>
                        <td>
                          <Button className="theme-button1 mt-1" hoverColor="theme-button1" label="See Result" />
                          <Button className="theme-button1 mt-1" hoverColor="theme-button1" label="Leaderboard" />
                        </td>
                      </tr>
                      <tr>
                        <td>Advance</td>
                        <td>Multiple choice</td>
                        <td>5</td>
                        <td>5 minutes</td>
                        <td>
                          <Button className="theme-button1 mt-1" hoverColor="theme-button1" label="See Result" />
                          <Button className="theme-button1 mt-1" hoverColor="theme-button1" label="Leaderboard" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Tab>
              <Tab eventKey="ASSIGNMENT" title="ASSIGNMENT">
                <div className='quiz-area'>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Assignment Topic</th>
                        <th>Marks</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>New Assignment</td>
                        <td>50</td>
                        <td>
                          <Button className="theme-button1 mt-1" hoverColor="theme-button1" label="See Result" />
                          <Button className="theme-button1 mt-1" hoverColor="theme-button1" label="Leaderboard" />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Tab>
              <Tab eventKey="NOTICE" title="NOTICE">
                <div className='notice-area'>
                  <div className='main-heading'>
                    <h1>Notice Board</h1>
                  </div>

                  <div className='notice-card'>
                    <h4>20 - 06 - 2022</h4>
                    <h6>Today has our important live class.</h6>
                    <p>Live class video link in the resource tab.</p>
                  </div>


                  <div className='notice-card'>
                    <h4>16 - 06 - 2022</h4>
                    <h6>Topic for Notice Board</h6>
                    <p>Live class video link in the resource tab.</p>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="LIVE CLASS" title="LIVE CLASS">
                <div className='live-class'>
                  <Tabs
                    defaultActiveKey="Upcoming"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                  >
                    <Tab eventKey="Upcoming" title="Upcoming">
                     <div className='text-center'>
                     <img src={Empty} />
                     <h4 className='mt-3'>Empty Upcoming Class</h4>
                     </div>
                    </Tab>
                    <Tab eventKey="Current" title="Current">
                    <div className='text-center'>
                     <img src={Empty} />
                     <h4 className='mt-3'>Empty Past Class</h4>
                     </div>
                    </Tab>
                    <Tab eventKey="Past" title="Past">
                    <div className='quiz-area'>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Date & Time</th>
                        <th>Time Duration</th>
                        <th>Topic</th>
                        <th>Meeting Host Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2022-06-30</td>
                        <td>50 minutes</td>
                        <td>React Advance</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>2022-06-21</td>
                        <td>30 minutes</td>
                        <td>React for biginners</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                    </Tab>
                  </Tabs>
                </div>
              </Tab>
              <Tab eventKey="DISCUSSION" title="DISCUSSION">

              </Tab>
              <Tab eventKey="CERTIFICATE" title="CERTIFICATE">
              <div className='text-center'>
                     <img src={Empty} />
                     <h4 className='mt-3'>After completing the course, you will receive a certificate.</h4>
                     </div>
              </Tab>

            </Tabs>
          </div>
        </Container>
      </section>
    </>
  )
}

export default CourseIntroduction
