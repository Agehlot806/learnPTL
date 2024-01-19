import React from 'react'
import './my-learning.css'
import Header from '../../../directives/Header/header'
import Footer from '../../../directives/Footer/footer'
import { Link } from 'react-router-dom'
import { Container, Table, ProgressBar, Row, Col } from 'react-bootstrap'
import Img1 from '../../../assets/images/img/img1.jpg'
import Button from '../../../components/Button'
import strings from '../../../localzation'

function Mylearning() {
  return (
    <>
      <Header />
      <div className='gradient-bg'>
        <div className='overlay-bg'>
          <div className='all-bg'>
            <h1>My Learning</h1>
            <Link to='/'>Home</Link> <span>/ My Learning</span>
          </div>
        </div>
      </div>

      <section className='section-padding'>
        <Container>
          <div className='browse-area'>
            <Row>
              <Col lg={6}>
                <Link to="/find-tutor">
                  <Button className="theme-button1 mt-1" hoverColor="theme-button1" label="Browse More Course" />
                </Link>
              </Col>
              <Col lg={6}>
               <div className='text-center'>
               <div className='sort-by'>
                  <h6>Sort By:</h6>
                  <select className="form-control">
                    <option value="default">Sort By:</option>
                    <option value="DateOldToNew">Old to New</option>
                    <option value="DateNewToOld">New to Old</option>
                  </select>
                </div>
               </div>
              </Col>
            </Row>
          </div>
          <div className='my-learningList'>
            <Table responsive>
              <thead>
                <tr>
                  <th>Course</th>
                  <th>Author</th>
                  <th>Price</th>
                  <th>Order ID</th>
                  <th>Validity</th>
                  <th>Progress</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src={Img1} />
                    <h6>Microservices with Node JS and React</h6>
                  </td>
                  <td>Johnny Depp</td>
                  <td>Free</td>
                  <td>272653</td>
                  <td>Lifetime</td>
                  <td>
                    <div>
                      <span>0.00%</span>
                      <ProgressBar striped now={50} />
                    </div>
                  </td>
                  <td>
                    <Link to="/my-course"><Button className="theme-button1 mt-1" hoverColor="theme-button1" label={strings.View} /></Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={Img1} />
                    <h6>The complete Scorm demo course - web design & development</h6>
                  </td>
                  <td></td>
                  <td>$ 100.00</td>
                  <td>699167</td>
                  <td>Lifetime</td>
                  <td>
                    <div>
                      <span>100.00%</span>
                      <ProgressBar striped now={40} />
                    </div>
                  </td>
                  <td>
                    <Link to="/my-course"><Button className="theme-button1 mt-1" hoverColor="theme-button1" label={strings.View} /></Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={Img1} />
                    <h6>Laravel For Beginners - Become A Laravel Master - CMS Project</h6>
                  </td>
                  <td>--</td>
                  <td>$ 120.00</td>
                  <td>834253</td>
                  <td>Lifetime</td>
                  <td>
                    <div>
                      <span>100.00%</span>
                      <ProgressBar striped now={0} />
                    </div>
                  </td>
                  <td>
                    <Link to="/my-course"><Button className="theme-button1 mt-1" hoverColor="theme-button1" label={strings.View} /></Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={Img1} />
                    <h6>JavaScript: Understanding the Weird Parts</h6>
                  </td>
                  <td>Johnny Depp</td>
                  <td>$ 50.00</td>
                  <td>120547</td>
                  <td>Lifetime</td>
                  <td>
                    <div>
                      <span>31.25%</span>
                      <ProgressBar striped now={20} />
                    </div>
                  </td>
                  <td>
                    <Link to="/my-course"><Button className="theme-button1 mt-1" hoverColor="theme-button1" label={strings.View} /></Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={Img1} />
                    <h6>APIs in PHP: from Basic to Advanced</h6>
                  </td>
                  <td>Darrell Edwards</td>
                  <td>$ 49.00</td>
                  <td>583706</td>
                  <td>Lifetime</td>
                  <td>
                    <div>
                      <span>0.00%</span>
                      <ProgressBar striped now={10} />
                    </div>
                  </td>
                  <td>
                    <Link to="/my-course"><Button className="theme-button1 mt-1" hoverColor="theme-button1" label={strings.View} /></Link>
                  </td>
                </tr>

              </tbody>
            </Table>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  )
}

export default Mylearning
