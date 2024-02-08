import React, { useEffect, useState } from "react";
import "./Register-tutor.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import strings from "../../localzation";
import Button from "../../components/Button";
import tipimg from "../../assets/images/signup/tipsImage.png";
import tipimgone from "../../assets/images/signup/tipsImage2.png";
import tipimgtwo from "../../assets/images/signup/tipsImage3.png";
import Accordion from "react-bootstrap/Accordion";
import VideoRecorder from "../../components/Video_Recorder/Video-recorder";
// import { VideoRecorder } from "react-video-recorder";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCountryShow,
  fetchSpeakShow,
} from "../../redux/action/actionCreators";

const RegisterTutore = () => {
  const dispatch = useDispatch();
  const { countrys } = useSelector((state) => state.countrys);
  const { speaks } = useSelector((state) => state.speaks);
  console.log("countrys: ", countrys);

  useEffect(() => {
    dispatch(fetchCountryShow(countrys));
    dispatch(fetchSpeakShow(speaks));
  }, [dispatch]);
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
  const profiledescriptionData = [
    {
      title: "1. Introduce yourself",
      description:
        "Show potential students who you are! Share your teaching experience and passion for education and briefly mention your interests and hobbies.",
      placeholder: "Hello, my name is... and i'm from...",
      alert:
        "Don’t include your last name or present your information in a CV format",
      eventkey: 0,
    },
    {
      title: "2. Teaching experience",
      description:
        "Provide a detailed description of your relevant teaching experience. Include certifications, teaching methodology, education, and subject expertise.",
      placeholder:
        "I have 5 years of teaching experience. I’m TEFL Certified, and my classes are...",
      eventkey: 1,
    },
    {
      title: "3. Motivate potential students",
      description:
        "Encourage students to book their first lesson. Highlight the benefits of learning with you!",
      placeholder:
        "Book a trial lesson with me so we can discuss your goals and how I can help you reach them...",
      alert:
        "Do not include any information regarding free trial lessons or discounts, or any of your personal contact details",
      eventkey: 2,
    },
    {
      title: "4. Write a catchy headline",
      description:
        "Your headline is the first thing students see about you. Make it attention-grabbing, mention your specific teaching language and encourage students to read your full description.",
      placeholder: "Certified tutor with 5 years of experience",
      eventkey: 3,
    },
  ];
  const [textAreaValue, setTextAreaValue] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleChange = (event, index) => {
    const { value } = event.target;
    setTextAreaValue((prevState) => ({
      ...prevState,
      [index]: value,
    }));
  };
  const handleContinue = () => {
    // Here you can trigger an alert
    setCurrentIndex(currentIndex + 1);
    // alert("Continue button clicked!");
  };

  const [file, setFile] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setFileUploaded(true);
  };

  const handleUpload = () => {
    if (!file) {
      setErrorMessage("Please select a file first");
      return;
    }

    // Perform upload logic here
    console.log("File uploaded:", file);
    // Reset error message if upload succeeds
    setErrorMessage("");
  };

  const handleRemoveFile = () => {
    setFile(null);
    setFileUploaded(false);
  };

  const [isVisible, setIsVisible] = useState(true);
  const [isEductionVisible, setIsEductionVisible] = useState(true);

  // Function to toggle the visibility of the <h1> element
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const toggleEductionVisibility = () => {
    setIsEductionVisible(!isEductionVisible);
  };
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
                      {countrys.map((country) => (
                        <option key={country.id} value={country.id}>
                          {country.country}
                        </option>
                      ))}
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
                          <option>Choose Level...</option>
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
                      <option>Choose Subject taught...</option>
                      {speaks.map((speak) => (
                        <option key={speak.id} value={speak.id}>
                          {speak.speak}
                        </option>
                      ))}
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
                    {/* <Col>
                      <Button
                        className="theme-button1 w-100 mt-3"
                        hoverColor="theme-button1"
                        label={strings.uploadPhoto}
                      />
                    </Col> */}
                    <Col>
                      <p>JPG or PNG format, maximum 5 MB</p>
                    </Col>
                    {/* <input type="file" /> */}
                    <form
                      className="form-container"
                      encType="multipart/form-data"
                    >
                      <div className="upload-files-container">
                        <div className="drag-file-area">
                          <span className="material-icons-outlined upload-icon">
                            file_upload
                          </span>
                          <h3 className="dynamic-message">
                            {fileUploaded
                              ? "File Dropped Successfully!"
                              : "Drag & drop any file here"}
                          </h3>
                          {/* <label className="label">
                            or{" "}
                            <span className="browse-files">
                              {" "} */}
                          <input
                            type="file"
                            className="default-file-input"
                            onChange={handleFileChange}
                          />{" "}
                          {/* <span className="browse-files-text">
                                browse file
                              </span>{" "}
                              <span>from device</span>{" "}
                            </span>{" "}
                          </label> */}
                        </div>
                        <span className="cannot-upload-message">
                          {errorMessage}
                        </span>
                        <div
                          className="file-block"
                          style={{ display: fileUploaded ? "flex" : "none" }}
                        >
                          <div className="file-info">
                            {" "}
                            <span className="material-icons-outlined file-icon">
                              description
                            </span>{" "}
                            <span className="file-name">
                              {file && file.name}
                            </span>{" "}
                            |{" "}
                            <span className="file-size">
                              {file && (file.size / 1024).toFixed(1)} KB
                            </span>{" "}
                          </div>
                          <span
                            className="material-icons remove-file-icon"
                            onClick={handleRemoveFile}
                          >
                            delete
                          </span>
                          <div className="progress-bar"> </div>
                        </div>
                        <button
                          type="button"
                          className="upload-button"
                          onClick={handleUpload}
                        >
                          Upload
                        </button>
                      </div>
                    </form>
                  </Row>

                  {/* after click on step 2 next button step one hide and display step 3 data */}
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
                <h1>Teaching certification</h1>
                {isVisible ? (
                  <p>
                    Do you have teaching certificates? If so, describe them to
                    enhance your profile credibility and get more students.
                  </p>
                ) : (
                  <p>
                    Do you plan on getting certified? You can add your teaching
                    certification later.
                  </p>
                )}
                <Form>
                  {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number (Optional)</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group> */}
                  <Form.Check aria-label="option 1">
                    <Form.Check.Input
                      className="check_box"
                      onChange={toggleVisibility}
                      checked={!isVisible}
                    />
                    <Form.Check.Label>
                      {`I don’t have any teaching certification yet`}
                    </Form.Check.Label>
                  </Form.Check>
                  {isVisible && (
                    <>
                      {" "}
                      <Form.Group
                        className="mb-3 mt-3"
                        controlId="formBasicEmail"
                      >
                        <Form.Label>Subject</Form.Label>
                        <Form.Select aria-label="Choose Subject...">
                          <option>Choose Subject...</option>
                          {speaks.map((speak) => (
                            <option key={speak.id} value={speak.id}>
                              {speak.speak}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                      <Form.Group
                        className="mb-3 mt-3"
                        controlId="formBasicEmail"
                      >
                        <Form.Label>Certificate</Form.Label>
                        <Form.Select aria-label="Choose Certificate...">
                          <option>Choose Certificate...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          className="text-fieldhover"
                          type="text"
                          placeholder="Description"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Issued by</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Issued by
"
                        />
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
                        <Form.Group className="mb-3">
                          <Form.Label>Years of study</Form.Label>
                          <Row>
                            <Col>
                              <Form.Select aria-label="Choose Years of study...">
                                <option>Choose Years of study...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Col>
                            <Col>
                              <Form.Select aria-label="Choose Years of study...">
                                <option>Choose Years of study...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Col>
                          </Row>
                        </Form.Group>
                      </Row>
                      <Link className="addlang">add another Certificate</Link>
                    </>
                  )}
                </Form>
                {isVisible && (
                  <div className="Diplomaarea">
                    <h1>Get a 'Diploma verified' badge</h1>
                    <p>
                      Upload your diploma to boost your credibility! Our team
                      will review it and add the badge to your profile. Once
                      reviewed, your files will be deleted.
                    </p>
                    <p>JPG or PNG format; maximum size of 20MB.</p>
                    <Button
                      className="theme-button1 w-100 mt-3"
                      hoverColor="theme-button1"
                      label={strings.uploadPhoto}
                      // onClick={handleBack}
                    />
                  </div>
                )}
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
                {isEductionVisible ? (
                  <p>
                    Tell students more about the higher education that you've
                    completed or are working on
                  </p>
                ) : (
                  <p>
                    Do you plan on getting certified? You can add your teaching
                    certification later.
                  </p>
                )}
                <Form>
                  <Form.Check aria-label="option 1">
                    <Form.Check.Input
                      className="check_box"
                      onChange={toggleEductionVisibility}
                      checked={!isEductionVisible}
                    />
                    <Form.Check.Label>
                      {`I don’t have a higher education degree`}
                    </Form.Check.Label>
                  </Form.Check>
                  {isEductionVisible && (
                    <>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>University</Form.Label>
                        <Form.Control
                          className="text-fieldhover"
                          type="text"
                          placeholder="E.G Mount Royal University"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Degree</Form.Label>
                        <Form.Control
                          className="text-fieldhover"
                          type="text"
                          placeholder="E.G Bachelor's degree in the Eniglish Language"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Specialization</Form.Label>
                        <Form.Control
                          className="text-fieldhover"
                          type="text"
                          placeholder="E.G Teaching Eniglish as a Foreign Language"
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3 mt-3"
                        controlId="formBasicEmail"
                      >
                        <Form.Label>Degree type</Form.Label>
                        <Form.Select aria-label="Choose Degree type...">
                          <option>Choose Degree type...</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </Form.Group>
                      <Row>
                        <Form.Group className="mb-3">
                          <Form.Label>Years of study</Form.Label>
                          <Row>
                            <Col>
                              <Form.Select aria-label="Choose Years of study...">
                                <option>Choose Years of study...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Col>
                            <Col>
                              <Form.Select aria-label="Choose Years of study...">
                                <option>Choose Years of study...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Col>
                          </Row>
                        </Form.Group>
                      </Row>
                      <Link className="addlang">add another Education</Link>
                    </>
                  )}
                </Form>
                {isEductionVisible && (
                  <div className="Diplomaarea">
                    <h1>Get a 'Diploma verified' badge</h1>
                    <p>
                      Upload your diploma to boost your credibility! Our team
                      will review it and add the badge to your profile. Once
                      reviewed, your files will be deleted.
                    </p>
                    <p>JPG or PNG format; maximum size of 20MB.</p>
                    <Button
                      className="theme-button1 w-100 mt-3"
                      hoverColor="theme-button1"
                      label={strings.uploadPhoto}
                      // onClick={handleBack}
                    />
                  </div>
                )}
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
              <>
                {" "}
                <Col lg={6}>
                  <h1>Profile description</h1>
                  <p>
                    This info will go on your public profile. Write it in the
                    language you’ll be teaching and make sure to follow our{" "}
                    <Link className="description">
                      guidelines to get approved
                    </Link>
                  </p>
                  {profiledescriptionData.map((item, index) => (
                    <Accordion
                      defaultActiveKey={item.eventkey == 0}
                      key={index}
                    >
                      <Accordion.Item eventKey={item.eventkey}>
                        <Accordion.Header>{item.title}</Accordion.Header>
                        <Accordion.Body>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder={item.placeholder}
                            value={textAreaValue[index] || ""}
                            onChange={(e) => handleChange(e, index)}
                          />
                          {item.description}
                          {item.alert && (
                            <div className="cvformate_alert">
                              <p>
                                <span>
                                  {" "}
                                  <i
                                    class="fa fa-info-circle"
                                    aria-hidden="true"
                                  ></i>
                                </span>{" "}
                                {item.alert}
                              </p>
                            </div>
                          )}
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  ))}
                  {/* <Form>
                    {profiledescriptionData.map((item, index) => (
                      <>
                        <div key={index}>
                          <Form.Group
                            className="mb-3"
                            controlId={`textarea-${index}`}
                          >
                            <Form.Label>{item.title}</Form.Label>
                            {index === 0 && (
                              <>
                                <Form.Label>{item.description}</Form.Label>
                                <Form.Control
                                  as="textarea"
                                  rows={3}
                                  placeholder={item.placeholder}
                                  value={textAreaValue[index] || ""}
                                  onChange={(e) => handleChange(e, index)}
                                />
                                {item.alert && (
                                  <div className="cvformate_alert">
                                    <p>
                                      <span>
                                        {" "}
                                        <i
                                          class="fa fa-info-circle"
                                          aria-hidden="true"
                                        ></i>
                                      </span>{" "}
                                      {item.alert}
                                    </p>
                                  </div>
                                )}
                              </>
                            )}
                          </Form.Group>
                          {index === 0 && (
                            <Button
                              className="theme-button1 w-100 mt-3"
                              hoverColor="theme-button1"
                              label={strings.Continue}
                              disabled={!textAreaValue[index]}
                              onClick={handleContinue}
                            />
                          )}
                        </div>
                      </>
                    ))}
                  </Form> */}
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
                  <hr />
                </Col>
              </>
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
                <VideoRecorder />
                {/* <VideoWebRecorder /> */}

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
