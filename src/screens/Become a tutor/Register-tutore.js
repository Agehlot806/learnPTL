import React, { useState } from "react";
import "./Register-tutor.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import strings from "../../localzation";
import Button from "../../components/Button";
import tipimg from "../../assets/images/signup/tipsImage.png";
import tipimgone from "../../assets/images/signup/tipsImage2.png";
import tipimgtwo from "../../assets/images/signup/tipsImage3.png";

const RegisterTutore = () => {
  // State to track the current step
  const [currentStep, setCurrentStep] = useState(1);

  // Function to handle click on the "Next" button
  const handleNext = () => {
    // Increment the current step
    setCurrentStep(currentStep + 1);
  };
  // Function to handle click on the "Back" button
  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const tipsImages = [{ img: tipimg }, { img: tipimgone }, { img: tipimgtwo }];
  const tipsData = [
    { tips: "Smile and look at the camera" },
    { tips: "Frame your head and shoulders" },
    { tips: "Your photo is centered and upright" },
    { tips: "Use neutral lighting and background" },
    {
      tips: "Your face and eyes are fully visible (except for religious reasons)",
    },
    { tips: "Avoid logos or contact information" },
    { tips: "You are the only person in the photo" },
  ];
  return (
    <>
      <div>
        <ul className="registermenu">
          <li>
            <a>
              {" "}
              <span>1</span>About
            </a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </li>
          <li>
            <a>
              <span>2</span>Photo
            </a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </li>
          <li>
            <a>
              <span>3</span>Certification
            </a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </li>
          <li>
            <a>
              <span>4</span>Education
            </a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </li>
          <li>
            <a>
              <span>5</span>Description
            </a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </li>
          <li>
            <a>
              <span>6</span>Video
            </a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </li>
          <li>
            <a>
              <span>7</span>Availability
            </a>
            <i class="fa fa-angle-right" aria-hidden="true"></i>
          </li>
          <li>
            <a>
              <span>8</span>Pricing
            </a>
            {/* <i class="fa fa-angle-right" aria-hidden="true"></i> */}
          </li>
        </ul>
      </div>
      <section className="sec-tut">
        <Container>
          <Row className="col-set">
            {/* starting  here step 1 part  */}
            {/* Conditionally render step one */}
            {currentStep === 1 && (
              <Col lg={6}>
                <h1>About</h1>
                <p>
                  Start creating your public tutor profile. Your progress will
                  be automatically saved as you complete each section. You can
                  return at any time to finish your registration.
                </p>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      className="text-fieldhover"
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Country of origin</Form.Label>
                    <Form.Select aria-label="Choose Country...">
                      <option>Choose Country...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Languages spoken</Form.Label>
                        <Form.Select disabled>
                          <option>Disabled select</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Level</Form.Label>
                        <Form.Select aria-label="Choose Level...">
                          <option>Choose Country...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Link className="addlang">add another language</Link>
                  <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label>Subject taught</Form.Label>
                    <Form.Select aria-label="Choose Subject...">
                      <option>Choose Country...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number (Optional)</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Check aria-label="option 1">
                    <Form.Check.Input className="check_box" />
                    <Form.Check.Label>{`
  I confirm I’m over 18`}</Form.Check.Label>
                  </Form.Check>
                </Form>
                {/* after click on next button step one hide and display step 2 data */}
                <Button
                  className="theme-button1 w-100 mt-3"
                  hoverColor="theme-button1"
                  label={strings.next}
                  onClick={handleNext}
                />
              </Col>
            )}
            {/* starting here step 2 part */}
            {/* Conditionally render step two */}
            {currentStep === 2 && (
              <>
                <h1>Profile Photo</h1>
                <Col lg={5}>
                  <h1>Make a great first impression</h1>
                  <p>
                    Tutors who look friendly and professional get the most
                    students.
                  </p>
                  <Row>
                    <Col>
                      <Button
                        className="theme-button1 w-100 mt-3"
                        hoverColor="theme-button1"
                        label={strings.uploadPhoto}
                      />
                    </Col>
                    <Col>
                      <p>JPG or PNG format, maximum 5 MB</p>
                    </Col>
                  </Row>

                  {/* after click on step 2 next button step one hide and display step 3 data */}
                  {/* <Row>
                    <Col>
                      <Button
                        className="theme-button1 w-100 mt-3"
                        hoverColor="theme-button1"
                        label={strings.back}
                        onClick={handleBack}
                      />
                    </Col>
                    <Col>
                      <Button
                        className="theme-button1 w-100 mt-3"
                        hoverColor="theme-button1"
                        label={strings.next}
                        onClick={handleNext}
                      />
                    </Col>
                  </Row> */}
                </Col>
                <Col lg={4}>
                  <h1>Tips for an amazing photo </h1>
                  <Row>
                    {tipsImages.map((tip, index) => (
                      <Col lg={4} key={index}>
                        <img className="tipImages" src={tip.img} />
                      </Col>
                    ))}
                  </Row>
                  <Row>
                    <Col>
                      {/* <h1>Tips</h1> */}
                      <ul>
                        {tipsData.map((tip, index) => (
                          <li className="mb-3" key={index}>
                            {tip.tips}
                          </li>
                        ))}
                      </ul>
                    </Col>
                  </Row>

                  {/* after click on step 2 next button step one hide and display step 3 data */}
                  <Row>
                    <Col>
                      <Button
                        className="theme-button1 w-100 mt-3"
                        hoverColor="theme-button1"
                        label={strings.back}
                        onClick={handleBack}
                      />
                    </Col>
                    <Col>
                      <Button
                        className="theme-button1 w-100 mt-3"
                        hoverColor="theme-button1"
                        label={strings.next}
                        onClick={handleNext}
                      />
                    </Col>
                  </Row>
                </Col>
              </>
            )}
            {/* starting here step 3 part */}
            {/* Conditionally render step two */}
            {currentStep === 3 && (
              <Col lg={6}>
                <h1>Certification</h1>
                <p>
                  Start creating your public tutor profile. Your progress will
                  be automatically saved as you complete each section. You can
                  return at any time to finish your registration.
                </p>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      className="text-fieldhover"
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Country of origin</Form.Label>
                    <Form.Select aria-label="Choose Country...">
                      <option>Choose Country...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Languages spoken</Form.Label>
                        <Form.Select disabled>
                          <option>Disabled select</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Level</Form.Label>
                        <Form.Select aria-label="Choose Level...">
                          <option>Choose Country...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Link className="addlang">add another language</Link>
                  <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label>Subject taught</Form.Label>
                    <Form.Select aria-label="Choose Subject...">
                      <option>Choose Country...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number (Optional)</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Check aria-label="option 1">
                    <Form.Check.Input className="check_box" />
                    <Form.Check.Label>{`
  I confirm I’m over 18`}</Form.Check.Label>
                  </Form.Check>
                </Form>
                {/* after click on step 2 next button step one hide and display step 3 data */}
                <Row>
                  <Col>
                    <Button
                      className="theme-button1 w-100 mt-3"
                      hoverColor="theme-button1"
                      label={strings.back}
                      onClick={handleBack}
                    />
                  </Col>
                  <Col>
                    <Button
                      className="theme-button1 w-100 mt-3"
                      hoverColor="theme-button1"
                      label={strings.next}
                      onClick={handleNext}
                    />
                  </Col>
                </Row>
              </Col>
            )}
            {/* starting here step 4 part */}
            {/* Conditionally render step two */}
            {currentStep === 4 && (
              <Col lg={6}>
                <h1>Education</h1>
                <p>
                  Start creating your public tutor profile. Your progress will
                  be automatically saved as you complete each section. You can
                  return at any time to finish your registration.
                </p>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      className="text-fieldhover"
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Country of origin</Form.Label>
                    <Form.Select aria-label="Choose Country...">
                      <option>Choose Country...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Languages spoken</Form.Label>
                        <Form.Select disabled>
                          <option>Disabled select</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Level</Form.Label>
                        <Form.Select aria-label="Choose Level...">
                          <option>Choose Country...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Link className="addlang">add another language</Link>
                  <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label>Subject taught</Form.Label>
                    <Form.Select aria-label="Choose Subject...">
                      <option>Choose Country...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number (Optional)</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Check aria-label="option 1">
                    <Form.Check.Input className="check_box" />
                    <Form.Check.Label>{`
  I confirm I’m over 18`}</Form.Check.Label>
                  </Form.Check>
                </Form>
                {/* after click on step 2 next button step one hide and display step 3 data */}
                <Row>
                  <Col>
                    <Button
                      className="theme-button1 w-100 mt-3"
                      hoverColor="theme-button1"
                      label={strings.back}
                      onClick={handleBack}
                    />
                  </Col>
                  <Col>
                    <Button
                      className="theme-button1 w-100 mt-3"
                      hoverColor="theme-button1"
                      label={strings.next}
                      onClick={handleNext}
                    />
                  </Col>
                </Row>
              </Col>
            )}
            {/* starting here step 5 part */}
            {/* Conditionally render step two */}
            {currentStep === 5 && (
              <Col lg={6}>
                <h1>Description</h1>
                <p>
                  Start creating your public tutor profile. Your progress will
                  be automatically saved as you complete each section. You can
                  return at any time to finish your registration.
                </p>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      className="text-fieldhover"
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Country of origin</Form.Label>
                    <Form.Select aria-label="Choose Country...">
                      <option>Choose Country...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Languages spoken</Form.Label>
                        <Form.Select disabled>
                          <option>Disabled select</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Level</Form.Label>
                        <Form.Select aria-label="Choose Level...">
                          <option>Choose Country...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Link className="addlang">add another language</Link>
                  <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label>Subject taught</Form.Label>
                    <Form.Select aria-label="Choose Subject...">
                      <option>Choose Country...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number (Optional)</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Check aria-label="option 1">
                    <Form.Check.Input className="check_box" />
                    <Form.Check.Label>{`
  I confirm I’m over 18`}</Form.Check.Label>
                  </Form.Check>
                </Form>
                {/* after click on step 2 next button step one hide and display step 3 data */}
                <Row>
                  <Col>
                    <Button
                      className="theme-button1 w-100 mt-3"
                      hoverColor="theme-button1"
                      label={strings.back}
                      onClick={handleBack}
                    />
                  </Col>
                  <Col>
                    <Button
                      className="theme-button1 w-100 mt-3"
                      hoverColor="theme-button1"
                      label={strings.next}
                      onClick={handleNext}
                    />
                  </Col>
                </Row>
              </Col>
            )}
            {/* starting here step 6 part */}
            {/* Conditionally render step two */}
            {currentStep === 6 && (
              <Col lg={6}>
                <h1>Video</h1>
                <p>
                  Start creating your public tutor profile. Your progress will
                  be automatically saved as you complete each section. You can
                  return at any time to finish your registration.
                </p>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      className="text-fieldhover"
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Country of origin</Form.Label>
                    <Form.Select aria-label="Choose Country...">
                      <option>Choose Country...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Languages spoken</Form.Label>
                        <Form.Select disabled>
                          <option>Disabled select</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Level</Form.Label>
                        <Form.Select aria-label="Choose Level...">
                          <option>Choose Country...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Link className="addlang">add another language</Link>
                  <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label>Subject taught</Form.Label>
                    <Form.Select aria-label="Choose Subject...">
                      <option>Choose Country...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number (Optional)</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Check aria-label="option 1">
                    <Form.Check.Input className="check_box" />
                    <Form.Check.Label>{`
  I confirm I’m over 18`}</Form.Check.Label>
                  </Form.Check>
                </Form>
                {/* after click on step 2 next button step one hide and display step 3 data */}
                <Row>
                  <Col>
                    <Button
                      className="theme-button1 w-100 mt-3"
                      hoverColor="theme-button1"
                      label={strings.back}
                      onClick={handleBack}
                    />
                  </Col>
                  <Col>
                    <Button
                      className="theme-button1 w-100 mt-3"
                      hoverColor="theme-button1"
                      label={strings.next}
                      onClick={handleNext}
                    />
                  </Col>
                </Row>
              </Col>
            )}
            {/* starting here step 7 part */}
            {/* Conditionally render step two */}
            {currentStep === 7 && (
              <Col lg={6}>
                <h1>Availability</h1>
                <p>
                  Start creating your public tutor profile. Your progress will
                  be automatically saved as you complete each section. You can
                  return at any time to finish your registration.
                </p>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      className="text-fieldhover"
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Country of origin</Form.Label>
                    <Form.Select aria-label="Choose Country...">
                      <option>Choose Country...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Languages spoken</Form.Label>
                        <Form.Select disabled>
                          <option>Disabled select</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Level</Form.Label>
                        <Form.Select aria-label="Choose Level...">
                          <option>Choose Country...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Link className="addlang">add another language</Link>
                  <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label>Subject taught</Form.Label>
                    <Form.Select aria-label="Choose Subject...">
                      <option>Choose Country...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number (Optional)</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Check aria-label="option 1">
                    <Form.Check.Input className="check_box" />
                    <Form.Check.Label>{`
  I confirm I’m over 18`}</Form.Check.Label>
                  </Form.Check>
                </Form>
                {/* after click on step 2 next button step one hide and display step 3 data */}
                <Row>
                  <Col>
                    <Button
                      className="theme-button1 w-100 mt-3"
                      hoverColor="theme-button1"
                      label={strings.back}
                      onClick={handleBack}
                    />
                  </Col>
                  <Col>
                    <Button
                      className="theme-button1 w-100 mt-3"
                      hoverColor="theme-button1"
                      label={strings.next}
                      onClick={handleNext}
                    />
                  </Col>
                </Row>
              </Col>
            )}
            {/* starting here step 8 part */}
            {/* Conditionally render step two */}
            {currentStep === 8 && (
              <Col lg={6}>
                <h1>Pricing</h1>
                <p>
                  Start creating your public tutor profile. Your progress will
                  be automatically saved as you complete each section. You can
                  return at any time to finish your registration.
                </p>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      className="text-fieldhover"
                      type="email"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Country of origin</Form.Label>
                    <Form.Select aria-label="Choose Country...">
                      <option>Choose Country...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Row>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Languages spoken</Form.Label>
                        <Form.Select disabled>
                          <option>Disabled select</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mb-3">
                        <Form.Label>Level</Form.Label>
                        <Form.Select aria-label="Choose Level...">
                          <option>Choose Country...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Link className="addlang">add another language</Link>
                  <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                    <Form.Label>Subject taught</Form.Label>
                    <Form.Select aria-label="Choose Subject...">
                      <option>Choose Country...</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number (Optional)</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Check aria-label="option 1">
                    <Form.Check.Input className="check_box" />
                    <Form.Check.Label>{`
  I confirm I’m over 18`}</Form.Check.Label>
                  </Form.Check>
                </Form>
                {/* after click on step 2 next button step one hide and display step 3 data */}
                <Row>
                  <Col>
                    <Button
                      className="theme-button1 w-100 mt-3"
                      hoverColor="theme-button1"
                      label={strings.back}
                      onClick={handleBack}
                    />
                  </Col>
                  <Col>
                    <Button
                      className="theme-button1 w-100 mt-3"
                      hoverColor="theme-button1"
                      label={strings.next}
                      onClick={handleNext}
                    />
                  </Col>
                </Row>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default RegisterTutore;
