import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import Customer from '../../assets/images/icons/customers-say.png';
import Quote from '../../assets/images/icons/quote.svg';


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

function HomeTestimonials(props) {
  return (
    <section className='section-padding'>
    <div className='gradient-bg'>
        <div className='overlay-bg'>
            <Container fluid>
                <div className='text-center main-heading'>
                    <img src={Customer} />
                    <h1 className='text-black'>Find the right tutor for you.</h1>
                    <p>With over 30,000 tutors and 1M+ learners, we know language learning.</p>
                </div>
                <Carousel
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={props.deviceType !== "mobile" ? true : false}
                    autoPlaySpeed={2000}
                    keyBoardControl={true}
                    customTransition="all 1s"
                    transitionDuration={1000}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={props.deviceType}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className="testimonial-item">
                        <div className='testimonial-text'>
                            <div>
                                <img src={Quote} alt="quote" />
                            </div>
                            <div>
                                <h6>Filip</h6>
                                <p >English learner on Preply</p>
                            </div>
                        </div>
                        <hr />
                        <div className="testimonial-bottom-content">
                            <h4 className="text-black">Great instructor, great course</h4>
                            <p>Wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot</p>
                            <div>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className='testimonial-text'>
                            <div>
                                <img src={Quote} alt="quote" />
                            </div>
                            <div>
                                <h6>Justyna</h6>
                                <p >English learner on Preply</p>
                            </div>
                        </div>
                        <hr />
                        <div className="testimonial-bottom-content">
                            <h4 className="text-black">The best choice I made for self-development in a long time.</h4>
                            <p>Wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot</p>
                            <div>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className='testimonial-text'>
                            <div>
                                <img src={Quote} alt="quote" />
                            </div>
                            <div>
                                <h6>Filip</h6>
                                <p >English learner on Preply</p>
                            </div>
                        </div>
                        <hr />
                        <div className="testimonial-bottom-content">
                            <h4 className="text-black">With just a few lessons, you can already see the difference.</h4>
                            <p>Wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot</p>
                            <div>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-item">
                        <div className='testimonial-text'>
                            <div>
                                <img src={Quote} alt="quote" />
                            </div>
                            <div>
                                <h6>Ismael</h6>
                                <p >English learner on Preply</p>
                            </div>
                        </div>
                        <hr />
                        <div className="testimonial-bottom-content">
                            <h4 className="text-black">The energy she brings to each lesson is amazing.</h4>
                            <p>Wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot</p>
                            <div>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                                <a><i className="fa fa-star" /></a>
                            </div>
                        </div>
                    </div>


                </Carousel>
            </Container>
        </div>
    </div>
</section>
  )
}

export default HomeTestimonials
