import React, { useEffect, useState } from 'react'
import '../Blogs/blog.css'
import Header from '../../directives/Header/header'
import Footer from '../../directives/Footer/footer'
import { Link, useParams } from 'react-router-dom';
import { Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import Blog1 from '../../assets/images/img/blog1.jpg';
import Blog2 from '../../assets/images/img/blog2.jpg';
import Blog3 from '../../assets/images/img/blog3.jpg';
import Allbg from '../../components/All bg Banner/all-bg'
import { useDispatch, useSelector } from "react-redux";
import {
    fetchTutorsShow,
    fetchblogDetails, fetchblogShow,
} from "../../redux/action/actionCreators";

function Blogdetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { blogdetails } = useSelector((state) => state.blogdetails);
    const { blogs } = useSelector((state) => state.blogs);
    const [searchTerm, setSearchTerm] = useState("");
    const { tutors } = useSelector((state) => state.tutors);

    useEffect(() => {
        dispatch(fetchblogShow(blogs));
        dispatch(fetchblogDetails(id));
        dispatch(fetchTutorsShow(tutors));
    }, [dispatch, id]);

    const filteredBlogs = blogs.filter(blog => blog.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <Header />

            <Allbg title="Blog Details" linkTo="/" linkText="Home" />

            <section className='section-padding'>
                <Container>
                    <Row>
                        <Col lg={8}>
                            <div className='blog-area'>
                                {blogdetails && (
                                    <div className='blog-item'>
                                        <img src={`https://storyfy.webzproject.shop/uploads/${blogdetails.image}`} alt={blogdetails.title} />
                                        <h2>{blogdetails.title}</h2>
                                        <p>By: Administration - {blogdetails.dates}</p>
                                        <p>{blogdetails.description}</p>
                                        <p>Comments: {blogdetails.comments}</p>
                                    </div>
                                )}

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
                                                value={searchTerm}
                                                onChange={handleSearch}
                                            />
                                        </InputGroup>
                                    </Form>
                                </div>
                                <div className='blog-sidebar-box'>
                                    <h5>Recent Blogs</h5>
                                    <ul>
                                        {filteredBlogs.slice(0, 3).map((blog, index) => (
                                            <li key={index}>
                                                <div className='sidebar-blog-item d-flex'>
                                                    <div>
                                                        <img src={"https://storyfy.webzproject.shop/uploads/" + blog?.image} alt={blog?.title} />
                                                    </div>
                                                    <div>
                                                        <h6>{blog?.title}</h6>
                                                        <p>{blog?.dates}</p>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='blog-sidebar-box blog-sidebar-Categories'>
                                    <h5>Categories</h5>
                                    <ul>
                                        {blogs &&
                                            blogs.map((blog, index) => (
                                                <li key={index}>{blog.categories}</li>
                                            ))}
                                    </ul>
                                </div>
                                <div className='blog-sidebar-box'>
                                    <h5>Tags</h5>
                                    <ul className='blog-sidebar-tags'>
                                        {tutors.map((tutors) => (
                                            <li><a>{tutors.tutors}</a></li>
                                        ))}
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

export default Blogdetails
