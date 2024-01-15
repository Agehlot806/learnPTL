import React from 'react'
import '../Blogs/blog.css'
import Header from '../../directives/Header/header'
import Footer from '../../directives/Footer/footer'
import { Link } from 'react-router-dom'
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import Blog1 from '../../assets/images/img/blog1.jpg';
import Blog2 from '../../assets/images/img/blog2.jpg';
import Blog3 from '../../assets/images/img/blog3.jpg';

function Blog() {
    return (
        <>
            <Header />
            <div className='gradient-bg'>
                <div className='overlay-bg'>
                    <div className='all-bg'>
                        <h1>Blog</h1>
                        <Link to='/'>Home</Link> <span>/ Blog</span>
                    </div>
                </div>
            </div>

            <section className='section-padding'>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className='blog-area'>
                                <div className='blog-item'>
                                    <img src={Blog1} />
                                    <h2>60 Common C# Interview Questions in 2022: Ace Your Next Interview</h2>
                                    <p>By: Administration / 16 Jun, 2022</p>
                                    <p>Getting hired as a programmer can be a challenge. There’s a lot of talent out there, and there’s a lot of competition. Many employers are wary of “paper programmers”; people who have no programming ex...</p>
                                    <Link to='/blog-details'>Read More <i className="fa fa-long-arrow-right" /></Link>
                                </div>
                                <div className='blog-item'>
                                    <img src={Blog2} />
                                    <h2>PostgreSQL vs. MySQL: Which SQL Platform Should You Use?</h2>
                                    <p>By: Administration / 16 Jun, 2022</p>
                                    <p>MySQL and PostgreSQL are both leading database technologies built on a foundation of SQL: Structured Query Language. SQL forms the basis of how to create, access, update, and otherwise interact with d...</p>
                                    <Link to='/blog-details'>Read More <i className="fa fa-long-arrow-right" /></Link>
                                </div>
                                <div className='blog-item'>
                                    <img src={Blog3} />
                                    <h2>Java vs. Python: Which Is the Best Programming Language for You?</h2>
                                    <p>By: Administration / 16 Jun, 2022</p>
                                    <p>Java and Python are both excellent choices for a beginning programmer. You really can’t go wrong by choosing either one. Here are some things these languages have in common. Both are popular and in hi...</p>
                                    <Link to='/blog-details'>Read More <i className="fa fa-long-arrow-right" /></Link>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4}>
                            <div className='blog-side'>
                                <div className='blog-sidebar-box'>
                                    <Form className="d-flex">
                                        <InputGroup className="">
                                            <InputGroup.Text id="basic-addon1"><i className="fa fa-search" /></InputGroup.Text>
                                            <Form.Control
                                                placeholder="Search..."
                                                aria-label="Search Course"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                    </Form>
                                </div>
                                <div className='blog-sidebar-box'>
                                    <h5>Recent Blogs</h5>
                                    <ul>
                                        <li>
                                            <div className='sidebar-blog-item d-flex'>
                                                <div>
                                                    <img src={Blog1} />
                                                </div>
                                                <div>
                                                    <h6>60 Common C# Interview Questions in 2022: Ace Your Next Interview</h6>
                                                    <p>16 Jun, 2022</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='sidebar-blog-item d-flex'>
                                                <div>
                                                    <img src={Blog2} />
                                                </div>
                                                <div>
                                                    <h6>PostgreSQL vs. MySQL: Which SQL Platform Should You Use?</h6>
                                                    <p>16 Jun, 2022</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='sidebar-blog-item d-flex'>
                                                <div>
                                                    <img src={Blog3} />
                                                </div>
                                                <div>
                                                    <h6>Java vs. Python: Which Is the Best Programming Language for You?</h6>
                                                    <p>16 Jun, 2022</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className='blog-sidebar-box blog-sidebar-Categories'>
                                    <h5>Categories</h5>
                                  <ul>
                                    <li>Development (3)</li>
                                    <li>IT & Software (1)</li>
                                    <li>Data Science (0)</li>
                                    <li>Soft Skills (0)</li>
                                    <li>Business (0)</li>
                                    <li>Marketing (0)</li>
                                    <li>Design (0)</li>
                                  </ul>
                                </div>
                                <div className='blog-sidebar-box'>
                                    <h5>Tags</h5>
                                   <ul className='blog-sidebar-tags'>
                                    <li><a>English tutors</a></li>
                                     <li><a>Spanish tutors</a></li> 
                                     <li><a>French tutors</a> </li>
                                     <li><a>German tutors</a> </li>
                                     <li><a>Italian tutors</a> </li>
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

export default Blog
