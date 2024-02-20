import React, { useEffect, useState } from "react";
// import '../Home tutors/home-tutor.css'
import "../Home tutors/get-started.css";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "../../components/Button";
import strings from "../../localzation";
import { Link, useNavigate } from "react-router-dom";
import Goals from "../../assets/images/img/goals.webp";
import Au from "../../assets/images/icons/au.svg";
import Ca from "../../assets/images/icons/ca.svg";
import In from "../../assets/images/icons/in.svg";
import Us from "../../assets/images/icons/us.svg";
import Uk from "../../assets/images/icons/uk.svg";
import Pricefilter from "../../components/price-filter";
import shape6 from "../../assets/images/img/shape6.webp";
import shape4 from "../../assets/images/img/shape4.webp";
import Img3 from "../../assets/images/img/img3.webp";
import Logo from "../../assets/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatest } from "../../redux/action/actionCreators";
import Header from "../../directives/Header/header";
import Footer from "../../directives/Footer/footer";

function Getstarted() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchLatest(products));
  }, [dispatch]);

  // Step Functionality
  const [step, setStep] = useState(1);
  const { speaks } = useSelector((state) => state.speaks);
  console.log("speaks: ", speaks);
  const navigate = useNavigate();
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/find-tutor");
  };

  const [highestPrice, setHighestPrice] = useState(0);
  console.log("getstartedhighestPrice: ", highestPrice);
  useEffect(() => {
    if (products && products) {
      let maxPrice = 0;
      products.forEach((product) => {
        const price = parseFloat(product.price);
        if (price > maxPrice) {
          maxPrice = price;
        }
      });
      setHighestPrice(maxPrice);
    }
  }, [products]);
  return (
    <>
      <section>
        <div className="Getstarted-form-area ">
          <Form>
            {step === 1 && (
              <>
                <Header />
                <div className="section-padding">
                  <Container>
                    <Row>
                      <Col lg={6} sm={6}>
                        <div className="iconcoin-mask-bg-wrap iconcoin-mask-bg-wrap-1 mb-4 mb-lg-0">
                          <img
                            className="ico-image-sm top_image_bounce"
                            src={shape6}
                            alt="img"
                          />
                          <img
                            className="ico-shape-image"
                            src={shape4}
                            alt="img"
                          />
                          <div className="thumb top_image_bounce">
                            <img src={Img3} alt="img" />
                          </div>
                        </div>
                      </Col>
                      <Col lg={6} sm={6}>
                        <div className="find-tutors">
                          <div className="text-center">
                            <img src={Logo} alt="logo" />
                          </div>
                          <div className="main-heading">
                            <h1>Find the right tutor for you.</h1>
                            <p>
                              Tell us how you’d like to learn to get a
                              personalized choice of tutors
                            </p>
                          </div>
                          <Row className="mb-4">
                            <Col lg={7}>
                              <Form.Group>
                                <Form.Label>
                                  What do you want to learn?
                                </Form.Label>
                                <Form.Select defaultValue="Choose...">
                                  <option>Choose...</option>
                                  {speaks &&
                                    speaks.map((speak) => (
                                      <option
                                        key={speak.id}
                                        value={speak?.speak}
                                      >
                                        {speak?.speak}
                                      </option>
                                    ))}
                                </Form.Select>
                              </Form.Group>
                            </Col>
                            <Col lg={5} className="align-self-center mt-4">
                              <Link to="/get-started">
                                <Button
                                  onClick={nextStep}
                                  className="theme-button1 mt-1"
                                  hoverColor="theme-button1"
                                  label="Get Started"
                                  icon="fa fa-long-arrow-right"
                                  iconPosition="right"
                                />
                              </Link>
                            </Col>
                          </Row>
                          <Link to="">
                            I want to choose from 17,222 Tutors{" "}
                            <i className="fa fa-long-arrow-right" />
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <Footer />
              </>
            )}
            {step === 2 && (
              <Row>
                <Col lg={6} className="">
                  <div className="full-screen">
                    <div className="all-overlay-bg">
                      <div className="get-start-bg">
                        <Button
                          onClick={prevStep}
                          className="white-button"
                          icon="fa fa-arrow-left"
                          iconPosition="left"
                          label={strings.back}
                        ></Button>
                        <div class="typewriter-area">
                          <div class="typewriter">What's your goal?</div>
                        </div>
                        <img className="top_image_bounce" src={Goals} />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6} className="">
                  <section className="section-padding">
                    <div className="presearch-option-select">
                      <div className="text-right">
                        <Link onClick={nextStep}>
                          Skip <i className="fa fa-angle-double-right" />
                        </Link>
                      </div>
                      <div className="presearch-option">
                        <Row>
                          <Col lg={1} sm={1}>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M5.674 15a6.951 6.951 0 0 1-.603-2H11v2H5.674ZM7.1 17a6.98 6.98 0 0 0 3.9 1.93V17H7.101Zm5.9 0v1.93A6.98 6.98 0 0 0 16.899 17H13Zm5.326-2a6.952 6.952 0 0 0 .603-2H13v2h5.326ZM13 11h5.93a6.952 6.952 0 0 0-.604-2H13v2Zm3.899-4H13V5.07A6.98 6.98 0 0 1 16.899 7ZM7.101 7H11V5.07A6.98 6.98 0 0 0 7.101 7ZM11 9H5.674a6.951 6.951 0 0 0-.603 2H11V9Zm1-6a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </Col>
                          <Col lg={10} sm={10} className="align-self-center">
                            <h6>Career and business</h6>
                          </Col>
                          <Col lg={1} sm={1}>
                            <Form.Check
                              type="radio"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                        </Row>
                      </div>
                      <div className="presearch-option">
                        <Row>
                          <Col lg={1} sm={1}>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm-9-7a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm8-3H8v3h3V9Zm2 0h3v3h-3V9Zm-1 8a5.001 5.001 0 0 0 4.584-3H7.416A5.001 5.001 0 0 0 12 17Z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </Col>
                          <Col lg={10} sm={10} className="align-self-center">
                            <h6>Lessons for kids</h6>
                          </Col>
                          <Col lg={1} sm={1}>
                            <Form.Check
                              type="radio"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                        </Row>
                      </div>
                      <div className="presearch-option">
                        <Row>
                          <Col lg={1} sm={1}>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12 19a7 7 0 1 1 0-14 7 7 0 0 1 0 14Zm-9-7a9 9 0 1 1 18 0 9 9 0 0 1-18 0Zm7-2 6-2-2 6-6 2 2-6Zm3 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </Col>
                          <Col lg={10} sm={10} className="align-self-center">
                            <h6>Living abroad</h6>
                          </Col>
                          <Col lg={1} sm={1}>
                            <Form.Check
                              type="radio"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                        </Row>
                      </div>
                      <div className="presearch-option">
                        <Row>
                          <Col lg={1} sm={1}>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="m14 3 .707.707 2 2 .707.707-.707.707-10 10-.293.293H3V14l.293-.293 10-10L14 3ZM5 14.828v.586h.586l7.207-7.207-.586-.586L5 14.828Zm9 6.586H3v-2h11v2Zm7 0h-5v-2h5v2Z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>{" "}
                          </Col>
                          <Col lg={10} sm={10} className="align-self-center">
                            <h6>Exams and course work</h6>
                          </Col>
                          <Col lg={1} sm={1}>
                            <Form.Check
                              type="radio"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                        </Row>
                      </div>
                      <div className="presearch-option">
                        <Row>
                          <Col lg={1} sm={1}>
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9 3H7v3H3v14h18V6h-4V3H9Zm6 2H9v1h6V5ZM9 8h6v10H9V8Zm10 10h-2V8h2v10ZM7 8H5v10h2V8Z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>{" "}
                          </Col>
                          <Col lg={10} sm={10} className="align-self-center">
                            <h6>Culture, travel and hobby</h6>
                          </Col>
                          <Col lg={1} sm={1}>
                            <Form.Check
                              type="radio"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                        </Row>
                      </div>
                      <Button
                        onClick={nextStep}
                        className="theme-button1 w-100 mt-1"
                        hoverColor="theme-button1"
                        label={strings.Continue}
                        icon="fa fa-long-arrow-right"
                        iconPosition="right"
                      />
                    </div>
                  </section>
                </Col>
              </Row>
            )}
            {step === 3 && (
              <Row>
                <Col lg={6} className="">
                  <div className="full-screen">
                    <div className="all-overlay-bg">
                      <div className="get-start-bg">
                        <Button
                          onClick={prevStep}
                          className="white-button"
                          icon="fa fa-arrow-left"
                          iconPosition="left"
                          label={strings.back}
                        ></Button>
                        <div class="typewriter-area">
                          <div class="typewriter">
                            What's your English level?
                          </div>
                        </div>
                        <img className="top_image_bounce" src={Goals} />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6} className="">
                  <section className="section-padding">
                    <div className="presearch-option-select">
                      <div className="text-right">
                        <Link onClick={nextStep}>
                          Skip <i className="fa fa-angle-double-right" />
                        </Link>
                      </div>
                      <div className="presearch-option">
                        <Row>
                          <Col lg={11} sm={11} className="align-self-center">
                            <h6>I'm just starting</h6>
                          </Col>
                          <Col lg={1} sm={1}>
                            <Form.Check
                              type="radio"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                        </Row>
                      </div>
                      <div className="presearch-option">
                        <Row>
                          <Col lg={11} sm={11} className="align-self-center">
                            <h6>I know the basics</h6>
                          </Col>
                          <Col lg={1} sm={1}>
                            <Form.Check
                              type="radio"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                        </Row>
                      </div>
                      <div className="presearch-option">
                        <Row>
                          <Col lg={11} sm={11} className="align-self-center">
                            <h6>I'm conversational</h6>
                          </Col>
                          <Col lg={1} sm={1}>
                            <Form.Check
                              type="radio"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                        </Row>
                      </div>
                      <div className="presearch-option">
                        <Row>
                          <Col lg={11} sm={11} className="align-self-center">
                            <h6>I'm fluent in most situations</h6>
                          </Col>
                          <Col lg={1} sm={1}>
                            <Form.Check
                              type="radio"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                        </Row>
                      </div>
                      <Button
                        onClick={nextStep}
                        className="theme-button1 w-100 mt-1"
                        hoverColor="theme-button1"
                        label={strings.Continue}
                        icon="fa fa-long-arrow-right"
                        iconPosition="right"
                      />
                    </div>
                  </section>
                </Col>
              </Row>
            )}
            {step === 4 && (
              <Row>
                <Col lg={6} className="">
                  <div className="full-screen">
                    <div className="all-overlay-bg">
                      <div className="get-start-bg">
                        <Button
                          onClick={prevStep}
                          className="white-button"
                          icon="fa fa-arrow-left"
                          iconPosition="left"
                          label={strings.back}
                        ></Button>
                        <div class="typewriter-area">
                          <div class="typewriter">
                            Looking for a best accent?
                          </div>
                        </div>
                        <img className="top_image_bounce" src={Goals} />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6} className="">
                  <section className="section-padding">
                    <div className="presearch-option-select">
                      <Row>
                        <Col lg={8} sm={8}>
                          <p>You can select multiple options</p>
                        </Col>
                        <Col lg={4} sm={4}>
                          <div className="skip-area">
                            <Link onClick={nextStep}>
                              Skip <i className="fa fa-angle-double-right" />
                            </Link>
                          </div>
                        </Col>
                      </Row>
                      <Row className="mt-1 mb-3">
                        <Col lg={8}>
                          <h6>Only English native speakers</h6>
                        </Col>
                        <Col lg={4} sm={4}>
                          <div className="skip-area">
                            <Form.Check type="switch" />
                          </div>
                        </Col>
                      </Row>

                      <div className="presearch-option">
                        <Row>
                          <Col lg={1} sm={1}>
                            <img src={Au} />
                          </Col>
                          <Col lg={10} sm={10} className="align-self-center">
                            <h6>Australia</h6>
                          </Col>
                          <Col lg={1} sm={1}>
                            <Form.Check
                              type="checkbox"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                        </Row>
                      </div>
                      <div className="presearch-option">
                        <Row>
                          <Col lg={1} sm={1}>
                            <img src={Ca} />
                          </Col>
                          <Col lg={10} sm={10} className="align-self-center">
                            <h6>Canada</h6>
                          </Col>
                          <Col lg={1} sm={1}>
                            <Form.Check
                              type="checkbox"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                        </Row>
                      </div>
                      <div className="presearch-option">
                        <Row>
                          <Col lg={1} sm={1}>
                            <img src={In} />
                          </Col>
                          <Col lg={10} sm={10} className="align-self-center">
                            <h6>India</h6>
                          </Col>
                          <Col lg={1} sm={1}>
                            <Form.Check
                              type="checkbox"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                        </Row>
                      </div>
                      <div className="presearch-option">
                        <Row>
                          <Col lg={1} sm={1}>
                            <img src={Uk} />
                          </Col>
                          <Col lg={10} sm={10} className="align-self-center">
                            <h6>United Kingdom</h6>
                          </Col>
                          <Col lg={1} sm={1}>
                            <Form.Check
                              type="checkbox"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                        </Row>
                      </div>
                      <div className="presearch-option">
                        <Row>
                          <Col lg={1} sm={1}>
                            <img src={Us} />
                          </Col>
                          <Col lg={10} sm={10} className="align-self-center">
                            <h6>United States of America</h6>
                          </Col>
                          <Col lg={1} sm={1}>
                            <Form.Check
                              type="checkbox"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                        </Row>
                      </div>
                      <Button
                        onClick={nextStep}
                        className="theme-button1 w-100 mt-1"
                        hoverColor="theme-button1"
                        label={strings.Continue}
                        icon="fa fa-long-arrow-right"
                        iconPosition="right"
                      />
                    </div>
                  </section>
                </Col>
              </Row>
              // <Row>
              //     <Col lg={6} sm={6}>
              //         <Button
              //             style={{ width: "180px", margin: "4px" }}
              //             onClick={prevStep}
              //         >
              //             Previous
              //         </Button>
              //     </Col>
              //     <Col lg={6} sm={6}>
              //         <Button onClick={nextStepTwo}>Next</Button>

              //     </Col>
              // </Row>
            )}
            {step === 5 && (
              <Row>
                <Col lg={6} className="">
                  <div className="full-screen">
                    <div className="all-overlay-bg">
                      <div className="get-start-bg">
                        <Button
                          onClick={prevStep}
                          className="white-button"
                          icon="fa fa-arrow-left"
                          iconPosition="left"
                          label={strings.back}
                        ></Button>
                        <div class="typewriter-area">
                          <div class="typewriter">Any specific interests?</div>
                        </div>
                        <img className="top_image_bounce" src={Goals} />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6} className="">
                  <section className="section-padding">
                    <div className="presearch-option-select">
                      <Row>
                        <Col lg={8} sm={8}>
                          <p>You can select multiple options</p>
                        </Col>
                        <Col lg={4} sm={4}>
                          <div className="skip-area">
                            <Link onClick={nextStep}>
                              Skip <i className="fa fa-angle-double-right" />
                            </Link>
                          </div>
                        </Col>
                      </Row>
                      <Row className="">
                        <Col lg={8}>
                          <h6>Popular</h6>
                        </Col>
                      </Row>

                      <div className="presearch-option">
                        <Row>
                          <Col lg={11} sm={11} className="align-self-center">
                            <h6>Conversational English</h6>
                          </Col>
                          <Col lg={1} sm={1}>
                            <Form.Check
                              type="checkbox"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                        </Row>
                      </div>
                      <div className="presearch-option">
                        <Row>
                          <Col lg={11} sm={11} className="align-self-center">
                            <h6>Business English</h6>
                          </Col>
                          <Col lg={1} sm={1}>
                            <Form.Check
                              type="checkbox"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                        </Row>
                      </div>
                      <div className="presearch-option">
                        <Row>
                          <Col lg={11} sm={11} className="align-self-center">
                            <h6>IELTS</h6>
                          </Col>
                          <Col lg={1} sm={1}>
                            <Form.Check
                              type="checkbox"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                        </Row>
                      </div>
                      <div className="presearch-option">
                        <Row>
                          <Col lg={11} sm={11} className="align-self-center">
                            <h6>English for beginners</h6>
                          </Col>
                          <Col lg={1} sm={1}>
                            <Form.Check
                              type="checkbox"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                        </Row>
                      </div>
                      <div className="presearch-option">
                        <Row>
                          <Col lg={11} sm={11} className="align-self-center">
                            <h6>English for kids</h6>
                          </Col>
                          <Col lg={1} sm={1}>
                            <Form.Check
                              type="checkbox"
                              name="formHorizontalRadios"
                              id="formHorizontalRadios1"
                            />
                          </Col>
                        </Row>
                      </div>
                      <Button
                        onClick={nextStep}
                        className="theme-button1 w-100 mt-1"
                        hoverColor="theme-button1"
                        label={strings.Continue}
                        icon="fa fa-long-arrow-right"
                        iconPosition="right"
                      />
                    </div>
                  </section>
                </Col>
              </Row>
            )}
            {step === 6 && (
              <Row>
                <Col lg={6} className="">
                  <div className="full-screen">
                    <div className="all-overlay-bg">
                      <div className="get-start-bg">
                        <Button
                          onClick={prevStep}
                          className="white-button"
                          icon="fa fa-arrow-left"
                          iconPosition="left"
                          label={strings.back}
                        ></Button>
                        <div class="typewriter-area">
                          <div class="typewriter">
                            When can you take lessons?
                          </div>
                        </div>
                        <img className="top_image_bounce" src={Goals} />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6} className="">
                  <section className="section-padding">
                    <div className="presearch-option-select">
                      <Row>
                        <Col lg={8} sm={8}>
                          <p>You can select multiple options</p>
                        </Col>
                        <Col lg={4} sm={4}>
                          <div className="skip-area">
                            <Link onClick={nextStep}>
                              Skip <i className="fa fa-angle-double-right" />
                            </Link>
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={8}>
                          <h5>Times</h5>
                        </Col>
                      </Row>
                      <div className="day-timeScroll">
                        <Row>
                          <h3>Day time</h3>
                          <Col lg={4} sm={4}>
                            <div className="selectTime-list">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M13 4a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V4Zm5.293 2.293a1 1 0 1 1 1.414 1.414l-1 1a1 1 0 1 1-1.414-1.414l1-1ZM1 18a1 1 0 0 1 1-1h4.342a6 6 0 1 1 11.316 0H22a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Zm14.465-1a4 4 0 1 0-6.93 0h6.93ZM21 12a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1ZM1 13a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Zm3.293-6.707a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <Row>
                                <Col lg={6} sm={6}>
                                  <h6>9-12</h6>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <Form.Check type="checkbox" />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          <Col lg={4} sm={4}>
                            <div className="selectTime-list">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Zm7.707 4.707-1 1a1 1 0 1 1-1.414-1.414l1-1a1 1 0 1 1 1.414 1.414ZM19 13a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM2 12a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H2Zm3.707-7.707a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1Zm11.586 14.414 1 1a1 1 0 0 0 1.414-1.414l-1-1a1 1 0 0 0-1.414 1.414ZM13 22a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0v2Zm-7.293-2.293 1-1a1 1 0 1 0-1.414-1.414l-1 1a1 1 0 1 0 1.414 1.414ZM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-4 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <Row>
                                <Col lg={6} sm={6}>
                                  <h6>12-15</h6>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <Form.Check type="checkbox" />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          <Col lg={4} sm={4}>
                            <div className="selectTime-list">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Zm7.707 4.707-1 1a1 1 0 1 1-1.414-1.414l1-1a1 1 0 1 1 1.414 1.414ZM19 13a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM2 12a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H2Zm3.707-7.707a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414-1.414l-1-1Zm11.586 14.414 1 1a1 1 0 0 0 1.414-1.414l-1-1a1 1 0 0 0-1.414 1.414ZM13 22a1 1 0 1 1-2 0v-2a1 1 0 1 1 2 0v2Zm-7.293-2.293 1-1a1 1 0 1 0-1.414-1.414l-1 1a1 1 0 1 0 1.414 1.414ZM12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-4 6a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <Row>
                                <Col lg={6} sm={6}>
                                  <h6>15-18</h6>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <Form.Check type="checkbox" />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <h3>Evening and night</h3>
                          <Col lg={4} sm={4}>
                            <div className="selectTime-list">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M13 5a1 1 0 1 0-2 0v1.5a1 1 0 1 0 2 0V5Zm5.293 3.293a1 1 0 1 1 1.414 1.414l-.5.5a1 1 0 0 1-1.414-1.414l.5-.5ZM2 14a1 1 0 1 0 0 2h20a1 1 0 1 0 0-2h-3.344c-.909-2.882-3.524-5-6.656-5-3.132 0-5.747 2.118-6.656 5H2Zm5.48 0h9.04c-.809-1.788-2.545-3-4.52-3-1.975 0-3.711 1.212-4.52 3ZM7 18a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H7ZM4.293 8.293a1 1 0 0 1 1.414 0l.5.5a1 1 0 0 1-1.414 1.414l-.5-.5a1 1 0 0 1 0-1.414Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <Row>
                                <Col lg={6} sm={6}>
                                  <h6>18-21</h6>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <Form.Check type="checkbox" />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          <Col lg={4} sm={4}>
                            <div className="selectTime-list">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8 4a3.333 3.333 0 0 0-3.056 2 3 3 0 0 0 .1 6h5.623a2.667 2.667 0 0 0 .613-5.262A3.334 3.334 0 0 0 8 4ZM6.672 7.209a1.334 1.334 0 1 1 2.644.339 1 1 0 0 0 1.204 1.135.667.667 0 1 1 .146 1.317H5a1 1 0 1 1 .338-1.941 1 1 0 0 0 1.334-.85Zm9.995-.185a1 1 0 0 0-.937 1.516c.471.774.75 1.712.75 2.729 0 2.778-2.04 4.875-4.375 4.875-.336 0-.662-.042-.975-.121a1 1 0 0 0-1.113 1.468 7 7 0 1 0 6.65-10.467Zm1.813 4.245c0-.611-.074-1.204-.213-1.77a5.002 5.002 0 1 1-5.112 8.554c3.078-.545 5.325-3.443 5.325-6.784Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <Row>
                                <Col lg={6} sm={6}>
                                  <h6>21-24</h6>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <Form.Check type="checkbox" />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          <Col lg={4} sm={4}>
                            <div className="selectTime-list">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M13.926 5.287A8.072 8.072 0 0 1 7.03 16.994a7 7 0 1 0 6.896-11.707Zm-2.15-2.286.16-.001a9 9 0 1 1-7.949 13.225 1 1 0 0 1 1.144-1.435 6.071 6.071 0 0 0 5.945-10.092 1 1 0 0 1 .7-1.697Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <Row>
                                <Col lg={6} sm={6}>
                                  <h6>0-3</h6>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <Form.Check type="checkbox" />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <h3>Morning</h3>
                          <Col lg={4} sm={4}>
                            <div className="selectTime-list">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M9 2a1 1 0 0 0 0 2h.382L8.106 6.553A1 1 0 0 0 9 8h2a1 1 0 1 0 0-2h-.382l1.276-2.553A1 1 0 0 0 11 2H9ZM3 7a1 1 0 0 1 1-1h2a1 1 0 0 1 .894 1.447L5.618 10H6a1 1 0 1 1 0 2H4a1 1 0 0 1-.894-1.447L4.382 8H4a1 1 0 0 1-1-1Zm13.033 1.335a7.188 7.188 0 0 1-5.975 10.143 6 6 0 1 0 5.975-10.143ZM13.91 6h.142a8 8 0 1 1-7.065 11.756 1 1 0 0 1 1.144-1.436 5.188 5.188 0 0 0 5.08-8.623 1 1 0 0 1 .7-1.696Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <Row>
                                <Col lg={6} sm={6}>
                                  <h6>3-6</h6>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <Form.Check type="checkbox" />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          <Col lg={4} sm={4}>
                            <div className="selectTime-list">
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M13 7.5a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Zm5.707 2.793a1 1 0 0 1 0 1.414l-1 1a1 1 0 0 1-1.414-1.414l1-1a1 1 0 0 1 1.414 0ZM1 18a1 1 0 0 1 1-1h5.007A4.577 4.577 0 0 1 7 16.75C7 14.067 9.3 12 12 12s5 2.067 5 4.75c0 .084-.002.167-.007.25H22a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Zm13.988-1a2.55 2.55 0 0 0 .012-.25c0-1.459-1.281-2.75-3-2.75s-3 1.291-3 2.75c0 .084.004.168.012.25h5.976ZM5.293 9.293a1 1 0 0 1 1.414 0l1 1a1 1 0 1 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <Row>
                                <Col lg={6} sm={6}>
                                  <h6>6-9</h6>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <Form.Check type="checkbox" />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <h3>Days</h3>
                          <Col lg={2} sm={2} className="mb-3">
                            <div className="selectDay-list">
                              <Row>
                                <Col lg={6} sm={6}>
                                  <h5>Sun</h5>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <Form.Check type="checkbox" />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          <Col lg={2} sm={2} className="mb-3">
                            <div className="selectDay-list">
                              <Row>
                                <Col lg={6} sm={6}>
                                  <h5>Mon</h5>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <Form.Check type="checkbox" />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          <Col lg={2} sm={2} className="mb-3">
                            <div className="selectDay-list">
                              <Row>
                                <Col lg={6} sm={6}>
                                  <h5>Tue</h5>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <Form.Check type="checkbox" />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          <Col lg={2} sm={2} className="mb-3">
                            <div className="selectDay-list">
                              <Row>
                                <Col lg={6} sm={6}>
                                  <h5>Wed</h5>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <Form.Check type="checkbox" />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          <Col lg={2} sm={2} className="mb-3">
                            <div className="selectDay-list">
                              <Row>
                                <Col lg={6} sm={6}>
                                  <h5>Thu</h5>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <Form.Check type="checkbox" />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          <Col lg={2} sm={2} className="mb-3">
                            <div className="selectDay-list">
                              <Row>
                                <Col lg={6} sm={6}>
                                  <h5>Fri</h5>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <Form.Check type="checkbox" />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                          <Col lg={2} sm={2} className="mb-3">
                            <div className="selectDay-list">
                              <Row>
                                <Col lg={6} sm={6}>
                                  <h5>Sat</h5>
                                </Col>
                                <Col lg={6} sm={6}>
                                  <Form.Check type="checkbox" />
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <Button
                        onClick={nextStep}
                        className="theme-button1 w-100 mt-1"
                        hoverColor="theme-button1"
                        label={strings.Continue}
                        icon="fa fa-long-arrow-right"
                        iconPosition="right"
                      />
                    </div>
                  </section>
                </Col>
              </Row>
            )}
            {step === 7 && (
              <Row>
                <Col lg={6} className="">
                  <div className="full-screen">
                    <div className="all-overlay-bg">
                      <div className="get-start-bg">
                        <Button
                          onClick={prevStep}
                          className="white-button"
                          icon="fa fa-arrow-left"
                          iconPosition="left"
                          label={strings.back}
                        ></Button>
                        <div class="typewriter-area">
                          <div class="typewriter">
                            What's your budget per lesson?
                          </div>
                        </div>
                        <img className="top_image_bounce" src={Goals} />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={6} className="">
                  <section className="section-padding">
                    <div className="presearch-option-select">
                      <Row>
                        <Col lg={8}>
                          <p>Price per 50-min lesson</p>
                        </Col>
                        <Col lg={4} sm={4}>
                          <div className="skip-area">
                            <Link onClick={nextStep}>
                              Skip <i className="fa fa-angle-double-right" />
                            </Link>
                          </div>
                        </Col>
                      </Row>
                      {/* <Pricefilter /> */}
                      <Pricefilter price={highestPrice} firstprice={0} />
                      {/* <Link to="/find-tutor"> */}
                      <Button
                        onClick={handleSubmit}
                        className="theme-button1 w-100 mt-1"
                        hoverColor="theme-button1"
                        label={strings.submitbtn}
                        icon="fa fa-long-arrow-right"
                        iconPosition="right"
                      />
                      {/* </Link> */}
                    </div>
                  </section>
                </Col>
              </Row>
            )}
          </Form>
        </div>
      </section>
    </>
  );
}

export default Getstarted;
