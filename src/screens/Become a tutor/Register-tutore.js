import React, { useEffect, useState } from "react";
import "./Register-tutor.css";
import { Alert, Col, Container, Form, Row } from "react-bootstrap";
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
  fetchcertificationShow,
  tutorsRegister,
} from "../../redux/action/actionCreators";
import Header from "../../directives/Header/header";
import Footer from "../../directives/Footer/footer";
import Allbg from "../../components/All bg Banner/all-bg";
import { toast } from 'react-toastify';

const RegisterTutore = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { tutorsusers } = useSelector(state => state.auth)
  const { countrys } = useSelector((state) => state.countrys);
  const { speaks } = useSelector((state) => state.speaks);
  const { certificationshow } = useSelector((state) => state.certificationshow);
  const [tutorsRegisterData, settutorsRegisterData] = useState({
    name: '',
    description: '',
    price: '',
    rating: '',
    level: '',
    categories: '',
    duration: '',
    speak: '',
    country: '',
    specialties: '',
    image: '',
    video: '',
    speaker: '',
    professionaltutors: '',
    Supertutors: '',
    lastname: '',
    firstprice: '',
    mobileNumber: '',
    certificate: '',
    Education: '',
    Schedule: '',

  })
  const [step1Completed, setStep1Completed] = useState(false);
  useEffect(() => {
    dispatch(fetchCountryShow(countrys));
    dispatch(fetchSpeakShow(speaks));
    dispatch(fetchcertificationShow(certificationshow));
  }, [dispatch]);
  const [currentStep, setCurrentStep] = useState(1);
  const [over18Checked, setOver18Checked] = useState(false);
  // Tutors Register api code 

  const handleTutorsRegister = () => {
    if (tutorsRegisterData.email === '') {
      toast.error(tutorsusers.message);
    } else {
      const formData = new FormData();
      formData.append('name', tutorsRegisterData.name);
      formData.append('description', tutorsRegisterData.description);
      formData.append('price', tutorsRegisterData.price);
      formData.append('rating', tutorsRegisterData.rating);
      formData.append('level', tutorsRegisterData.level);
      formData.append('categories', tutorsRegisterData.categories);
      formData.append('duration', tutorsRegisterData.duration);
      formData.append('speak', tutorsRegisterData.speak);
      formData.append('country', tutorsRegisterData.country);
      formData.append('specialties', tutorsRegisterData.specialties);
      formData.append('image', tutorsRegisterData.image);
      formData.append('video', tutorsRegisterData.video);
      formData.append('speaker', tutorsRegisterData.speaker);
      formData.append('professionaltutors', tutorsRegisterData.professionaltutors);
      formData.append('Supertutors', tutorsRegisterData.Supertutors);
      formData.append('lastname', tutorsRegisterData.lastname);
      formData.append('firstprice', tutorsRegisterData.firstprice);
      formData.append('mobileNumber', tutorsRegisterData.mobileNumber);
      formData.append('certificate', tutorsRegisterData.certificate);
      formData.append('Education', tutorsRegisterData.Education);
      formData.append('review', tutorsRegisterData.review);
      formData.append('Schedule', tutorsRegisterData.Schedule);

      dispatch(tutorsRegister(formData));
    }

  };

  useEffect(() => {
    if (tutorsusers?.success) {
      toast.success(tutorsusers.message);
    } else if (tutorsusers?.success === false) {
      toast.error(tutorsusers.message);
    }
  }, [tutorsusers]);



  // Function to handle click on the "Next" button
  const handleNext = () => {
    // Validate form data for the current step before proceeding
    switch (currentStep) {
      case 1:
        if (validateStep1()) {
          setCurrentStep(currentStep + 1);
          setStep1Completed(true);
        }
        break;
      case 2:
        if (validateStep2()) {
          setCurrentStep(currentStep + 1);
        }
        break;
      // Add validation for other steps as needed
      default:
        break;
    }
  };

  const validateStep1 = () => {
    if (tutorsRegisterData.name && tutorsRegisterData.lastname && tutorsRegisterData.country && tutorsRegisterData.speak && tutorsRegisterData.mobileNumber) {
      return true;
    } else {
      toast.error('Please fill all required fields for Step 1.');
      return false;
    }
  };

  const validateStep2 = () => {
    if (file) {
      return true;
    } else {
      toast.error('Please fill all required fields for Step 2.');
      return false;
    }
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

  // const [file, setFile] = useState(null);
  // const [fileUploaded, setFileUploaded] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

  // const handleFileChange = (event) => {
  //   const selectedFile = event.target.files[0];
  //   setFile(selectedFile);
  //   setFileUploaded(true);
  // };

  // const handleUpload = () => {
  //   if (!file) {
  //     setErrorMessage("Please select a file first");
  //     return;
  //   }

  //   // Perform upload logic here
  //   console.log("File uploaded:", file);
  //   // Reset error message if upload succeeds
  //   setErrorMessage("");
  // };

  // const handleRemoveFile = () => {
  //   setFile(null);
  //   setFileUploaded(false);
  // };

  const [isVisible, setIsVisible] = useState(true);
  const [isEductionVisible, setIsEductionVisible] = useState(true);

  // Function to toggle the visibility of the <h1> element
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const toggleEductionVisibility = () => {
    setIsEductionVisible(!isEductionVisible);
  };
  // about languages spokes
  const [languageFields, setLanguageFields] = useState([{ id: 1 }]); // Initial language field

  // Function to add a new language field
  const addLanguageField = () => {
    const newLanguageFields = [
      ...languageFields,
      { id: languageFields.length + 1 },
    ];
    setLanguageFields(newLanguageFields);
  };
  // Function to remove a language field
  const removeLanguageField = (indexToRemove) => {
    const updatedLanguageFields = languageFields.filter(
      (field, index) => index !== indexToRemove
    );
    setLanguageFields(updatedLanguageFields);
  };
  // drag and drop image step 2
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setFile(files[0]);
      setDragging(false);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };
  const removeFile = () => {
    setFile(null);
  };


  const handleImageUpload = () => {
    if (file) {
      console.log('Uploading image:', file);
    } else {
      console.error('No image file selected.');
    }
  };

  const [selectedYear, setSelectedYear] = useState("");
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => currentYear - index);

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const [Monday, setMonday] = useState([{ from: "09:00", to: "09:00" }]);
  const [Tuesday, setTuesday] = useState([{ from: "09:00", to: "09:00" }]);
  const [Wednesday, setWednesday] = useState([{ from: "09:00", to: "09:00" }]);
  const [Thursday, setThursday] = useState([{ from: "09:00", to: "09:00" }]);
  const [Friday, setFriday] = useState([{ from: "09:00", to: "09:00" }]);
  const [Saturday, setSaturday] = useState([{ from: "09:00", to: "09:00" }]);
  const [Sunday, setSunday] = useState([{ from: "09:00", to: "09:00" }]);

  const addTimeSlotMonday = () => {
    setMonday([...Monday, { from: "09:00", to: "09:00" }]);
  };
  const addTimeSlotTuesday = () => {
    setTuesday([...Tuesday, { from: "09:00", to: "09:00" }]);
  };
  const addTimeSlotWednesday = () => {
    setWednesday([...Wednesday, { from: "09:00", to: "09:00" }]);
  };
  const addTimeSlotThursday = () => {
    setThursday([...Thursday, { from: "09:00", to: "09:00" }]);
  };
  const addTimeSlotFriday = () => {
    setFriday([...Friday, { from: "09:00", to: "09:00" }]);
  };
  const addTimeSlotSaturday = () => {
    setSaturday([...Saturday, { from: "09:00", to: "09:00" }]);
  };
  const addTimeSlotSunday = () => {
    setSunday([...Sunday, { from: "09:00", to: "09:00" }]);
  };

  const removeMonday = (index) => {
    if (index !== 0) {
      const updatedContacts = Monday.filter((_, i) => i !== index);
      setMonday(updatedContacts);
    }
  };
  const removeTuesday = (index) => {
    if (index !== 0) {
      const updatedContacts = Tuesday.filter((_, i) => i !== index);
      setMonday(updatedContacts);
    }
  };
  const removeWednesday = (index) => {
    if (index !== 0) {
      const updatedContacts = Wednesday.filter((_, i) => i !== index);
      setMonday(updatedContacts);
    }
  };
  const removeThursday = (index) => {
    if (index !== 0) {
      const updatedContacts = Thursday.filter((_, i) => i !== index);
      setMonday(updatedContacts);
    }
  };
  const removeFriday = (index) => {
    if (index !== 0) {
      const updatedContacts = Friday.filter((_, i) => i !== index);
      setMonday(updatedContacts);
    }
  };
  const removeSaturday = (index) => {
    if (index !== 0) {
      const updatedContacts = Saturday.filter((_, i) => i !== index);
      setMonday(updatedContacts);
    }
  };
  const removeSunday = (index) => {
    if (index !== 0) {
      const updatedContacts = Sunday.filter((_, i) => i !== index);
      setMonday(updatedContacts);
    }
  };

  const [contacts, setContacts] = useState([{ name: '', contact: '', address: '' }]);

  const addContact = () => {
    setContacts([...contacts, { desiredValue: '', contact: '', address: '' }]);
  };

  const removeContact = (index) => {
    if (index !== 0) {
      const updatedContacts = contacts.filter((_, i) => i !== index);
      setContacts(updatedContacts);
    }
  };

  const handleFieldChange = (index, fieldName, value) => {
    const updatedContacts = [...contacts];
    updatedContacts[index][fieldName] = value;
    setContacts(updatedContacts);
  };

  const [contactsEducation, setContactsEducation] = useState([{ name: '', contact: '', address: '' }]);

  const addContactEducation = () => {
    setContactsEducation([...contactsEducation, { desiredValue: '', contact: '', address: '' }]);
  };

  const removeContactEducation = (index) => {
    if (index !== 0) {
      const updatedContactsEducation = contactsEducation.filter((_, i) => i !== index);
      setContactsEducation(updatedContactsEducation);
    }
  };

  const handleFieldChangeEducation = (index, fieldName, value) => {
    const updatedContactsEducation = [...contactsEducation];
    updatedContactsEducation[index][fieldName] = value;
    setContactsEducation(updatedContactsEducation);
  };
  /////tarun/////

  const [inputFields, setInputFields] = useState([{
    teachingcertification: '',
    subject: '',
    certificate: '',
    description: '',
    selectedYearend: ''
  }]);
  const addInputField = () => {
    setInputFields([...inputFields, {
      teachingcertification: '',
      subject: '',
      certificate: '',
      description: '',  
      selectedYearend: ''
    }])
  }
  const removeInputFields = (index) => {
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
  }
  const handleChangetarun = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
  }

  console.log("inputFieldsinputFields", inputFields);
  return (
    <>
      <Header />


      <Allbg title="Register A Tutor" linkTo="/" linkText="Home" />


      <section className="section-padding">

        <div>
          <ul className="registermenu">
            <li >
              <a>
                {" "}
                <span className={step1Completed ? 'completed' : ''}>1</span>About
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
                  <div className="tutor-registepone">
                    <h1>About</h1>
                    <p>
                      Start creating your public tutor profile. Your progress
                      will be automatically saved as you complete each section.
                      You can return at any time to finish your registration.
                    </p>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          className="text-fieldhover"
                          type="text"
                          placeholder="Enter first name"
                          onChange={(e) => {
                            settutorsRegisterData({
                              ...tutorsRegisterData,
                              name: e.target.value
                            })
                          }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                          onChange={(e) => {
                            settutorsRegisterData({
                              ...tutorsRegisterData,
                              lastname: e.target.value
                            })
                          }} />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Country of origin</Form.Label>
                        <Form.Select aria-label="Choose Country..." onChange={(e) => {
                          settutorsRegisterData({
                            ...tutorsRegisterData,
                            country: e.target.value
                          })
                        }}>
                          {countrys?.map((country) => (
                            <option key={country?.id} value={country?.id}>
                              {country?.country}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                      {/* {languageFields.map((languageField, index) => (
                        <Row key={index}>
                          {index !== 0 ? (
                            <>
                              <Col lg={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Languages spoken</Form.Label>
                                  <Form.Select disabled>
                                    <option>Disabled select</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col lg={5}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Level</Form.Label>
                                  <Form.Select aria-label="Choose Level..."
                                    onChange={(e) => {
                                      settutorsRegisterData({
                                        ...tutorsRegisterData,
                                        level: e.target.value
                                      })
                                    }}>
                                    <option>Choose Level...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col lg={1} className="align-self-center">
                                <i
                                  className="fa fa-close"
                                  onClick={() => removeLanguageField(index)}
                                ></i>
                              </Col>
                            </>
                          ) : (
                            <>
                              <Col lg={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Languages spoken</Form.Label>
                                  <Form.Select disabled>
                                    <option>Disabled select</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                              <Col lg={6}>
                                <Form.Group className="mb-3">
                                  <Form.Label>Level</Form.Label>
                                  <Form.Select aria-label="Choose Level..."
                                  onChange={(e) => {
                                    settutorsRegisterData({
                                      ...tutorsRegisterData,
                                      level: e.target.value
                                    })
                                  }}>
                                    <option>Choose Level...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                  </Form.Select>
                                </Form.Group>
                              </Col>
                            </>
                          )}
                        </Row>
                      ))} */}

                      {/* "Add another language" link */}
                      {/* <Link className="addlang" onClick={addLanguageField}>
                        Add Another Language{" "}
                        <i className="fa fa-angle-double-right" />
                      </Link> */}

                      <Form.Group
                        className="mb-3 mt-3"
                        controlId="formBasicEmail"
                      >
                        <Form.Label>Subject taught</Form.Label>
                        <Form.Select aria-label="Choose Subject..." onChange={(e) => {
                          settutorsRegisterData({
                            ...tutorsRegisterData,
                            speak: e.target.value
                          })
                        }}>
                          <option>Choose Subject taught...</option>
                          {speaks?.map((speak) => (
                            <option key={speak.id} value={speak.id}>
                              {speak.speak}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone Number (Optional)</Form.Label>
                        <Form.Control type="number" placeholder="Enter phone number" onChange={(e) => {
                          settutorsRegisterData({
                            ...tutorsRegisterData,
                            mobileNumber: e.target.value
                          })
                        }} />
                      </Form.Group>
                      <Form.Check aria-label="option 1">
                        <Form.Check.Input className="check_box" checked={over18Checked}
                          onChange={(e) => setOver18Checked(e.target.checked)} />
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
                  </div>
                </Col>
              )}
              {/* starting here step 2 part */}
              {/* Conditionally render step two */}
              {currentStep === 2 && (
                <>
                  <Col lg={5}>
                    <div className="tutor-registepone">
                      <h1>Profile Photo</h1>
                      <h4>Make a great first impression</h4>
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
                        <div className="dragg">
                          <h1>Drag & Drop File Upload</h1>
                          <div
                            className={
                              dragging ? "drop-zone dragging" : "drop-zone"
                            }
                            onDragEnter={handleDragEnter}
                            onDragLeave={handleDragLeave}
                            onDragOver={handleDragOver}
                            onDrop={handleDrop}
                          >
                            {!file && (
                              <>
                                <p>Drag & Drop a file here</p>
                                <input
                                  type="file"
                                  id="fileInput"
                                  onChange={handleFileInputChange}
                                  className="file-input"
                                  onInput={handleImageUpload}
                                />
                                <label htmlFor="fileInput">
                                  or click to select a file
                                </label>
                              </>
                            )}
                            {file && (
                              <>
                                <p>Selected File: {file.name}</p>
                                <button onClick={removeFile}>
                                  Remove File
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </Row>
                    </div>
                    {/* after click on step 2 next button step one hide and display step 3 data */}
                  </Col>
                  <Col lg={7}>
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
                <Col lg={7}>
                  <div className="tutor-registepone">
                    <h1>Teaching certification</h1>
                    {isVisible ? (
                      <p>
                        Do you have teaching certificates? If so, describe them
                        to enhance your profile credibility and get more
                        students.
                      </p>
                    ) : (
                      <p>
                        Do you plan on getting certified? You can add your
                        teaching certification later.
                      </p>
                    )}
                    {contacts.map((contact, index) => (
                      <div key={index} className="mt-4">
                        <Form>
                          {
                            inputFields.map((data, index) => {
                              const { teachingcertification, subject, certificate, description, issuedby, country, selectedYear, selectedYearend, uploadPhoto } = data;
                              return (
                                <>
                                  <div className="d-flex justify-content-between">
                                    <Form.Check aria-label="option 1">
                                      <Form.Check.Input
                                        className="check_box"
                                        onChange={toggleVisibility}
                                        checked={!isVisible}
                                        onInput={(evnt) => handleChangetarun(index, evnt)}
                                        value={teachingcertification} name="teachingcertification"
                                      />
                                      <Form.Check.Label>
                                        {`I don’t have any teaching certification yet`}
                                      </Form.Check.Label>
                                    </Form.Check>
                                    {index > 0 && (
                                      <Link onClick={() => removeContact(index)}>
                                        <i className="fa fa-times-circle-o" />
                                      </Link>
                                    )}
                                  </div>
                                  {isVisible && (
                                    <div className="row" key={index}>
                                      <div className="col-12">
                                        <Form.Group
                                          className="mb-3 mt-3"
                                          controlId="formBasicEmail"
                                          value={contact.desiredValue}
                                          onChange={(e) => handleFieldChange(index, 'name', e.target.value)}
                                        >
                                          <Form.Label>Subject</Form.Label>
                                          <Form.Select aria-label="Choose Subject..."
                                            onChange={(evnt) => handleChangetarun(index, evnt)}
                                            value={subject} name="subject">
                                            <option>Choose Subject...</option>
                                            {speaks?.map((speak) => (
                                              <option key={speak?.id} value={speak?.name}>
                                                {speak?.speak}
                                              </option>
                                            ))}
                                          </Form.Select>
                                        </Form.Group>
                                        <Form.Group
                                          className="mb-3 mt-3"
                                          controlId="formBasicEmail"
                                        >
                                          <Form.Label>Certificate</Form.Label>
                                          <Form.Select aria-label="Choose Certificate..."
                                            onChange={(evnt) => handleChangetarun(index, evnt)}
                                            value={certificate} name="certificate">
                                            <option>Choose Certificate...</option>
                                            {certificationshow.map((item) => (
                                              <option key={item?.id} value={item?.name}>
                                                {item?.certification}
                                              </option>
                                            ))}
                                          </Form.Select>
                                        </Form.Group>
                                        <Form.Group
                                          className="mb-3"
                                          controlId="formBasicEmail"
                                        >
                                          <Form.Label>Description</Form.Label>
                                          <Form.Control
                                            className="text-fieldhover"
                                            type="text"
                                            placeholder="Description"
                                            onChange={(evnt) => handleChangetarun(index, evnt)}
                                            value={description} name="description"
                                          />
                                        </Form.Group>
                                        <Form.Group
                                          className="mb-3"
                                          controlId="formBasicEmail"
                                        >
                                          <Form.Label>Issued by</Form.Label>
                                          <Form.Control
                                            type="text"
                                            placeholder="Issued by"
                                            onChange={(evnt) => handleChangetarun(index, evnt)}
                                            value={issuedby} name="issuedby"
                                          />
                                        </Form.Group>
                                        <Form.Group
                                          className="mb-3"
                                          controlId="formBasicEmail"
                                        >
                                          <Form.Label>Country of origin</Form.Label>
                                          <Form.Select aria-label="Choose Country..."
                                            onChange={(evnt) => handleChangetarun(index, evnt)}
                                            value={country} name="country">
                                            <option>Choose Country...</option>
                                            {countrys?.map((country) => (
                                              <option key={country.id} value={country.id}>
                                                {country.country}
                                              </option>
                                            ))}
                                          </Form.Select>
                                        </Form.Group>
                                        <Row>
                                          <Form.Group className="mb-3">
                                            <Form.Label>Years of study</Form.Label>
                                            <Row>
                                              <Col>
                                                <Form.Select
                                                  aria-label="Choose Years of study..."
                                                  value={selectedYear}
                                                  onChange={handleYearChange}
                                                  onInput={(evnt) => handleChangetarun(index, evnt)}
                                                  name="selectedYear"
                                                >
                                                  <option>Choose Years of study...</option>
                                                  {years.map((year) => (
                                                    <option key={year} value={year}>
                                                      {year}
                                                    </option>
                                                  ))}
                                                </Form.Select>
                                              </Col>
                                              <Col>
                                                <Form.Select
                                                  aria-label="Choose Years of study..."
                                                  value={selectedYearend}
                                                  onChange={handleYearChange}
                                                  onInput={(evnt) => handleChangetarun(index, evnt)}
                                                  name="selectedYearend"
                                                >
                                                  <option>Choose Years of study...</option>
                                                  {years.map((year) => (
                                                    <option key={year} value={year}>
                                                      {year}
                                                    </option>
                                                  ))}
                                                </Form.Select>
                                              </Col>
                                            </Row>
                                          </Form.Group>
                                        </Row>
                                        <div className="Diplomaarea">
                                          <h1>Get a 'Diploma verified' badge</h1>
                                          <p>
                                            Upload your diploma to boost your credibility! Our
                                            team will review it and add the badge to your profile.
                                            Once reviewed, your files will be deleted.
                                          </p>
                                          <p>JPG or PNG format; maximum size of 20MB.</p>
                                        </div>
                                        <Form.Group
                                          className="mb-3"
                                          controlId="formBasicEmail"
                                        >
                                          <Form.Label>{strings.uploadPhoto}</Form.Label>
                                          <Form.Control
                                            type="file"
                                            placeholder={strings.uploadPhoto}
                                            onChange={(evnt) => handleChangetarun(index, evnt)}
                                            value={uploadPhoto} name="uploadPhoto"
                                          />
                                        </Form.Group>
                                      </div>
                                      <div className="col-2">
                                        {(inputFields.length !== 1) ? <button className="btn btn-outline-danger" onClick={removeInputFields}>Remove</button> : ''}
                                      </div>
                                    </div>
                                  )}
                                </>
                              )
                            })
                          }
                        </Form>
                      </div>
                    ))}
                    <Link className="addlang" onClick={addContact}>add another Certificate</Link>
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
                  </div>
                </Col>
              )}
              {/* starting here step 4 part */}
              {/* Conditionally render step two */}
              {currentStep === 4 && (
                <Col lg={7}>
                  <div className="tutor-registepone">
                    <h1>Education</h1>
                    {isEductionVisible ? (
                      <p>
                        Tell students more about the higher education that
                        you've completed or are working on
                      </p>
                    ) : (
                      <p>
                        Do you plan on getting certified? You can add your
                        teaching certification later.
                      </p>
                    )}
                    {contactsEducation.map((contactEducation, index) => (
                      <div key={index} className="mt-4">
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
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>University</Form.Label>
                                <Form.Control
                                  className="text-fieldhover"
                                  type="text"
                                  placeholder="E.G Mount Royal University"
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Degree</Form.Label>
                                <Form.Control
                                  className="text-fieldhover"
                                  type="text"
                                  placeholder="E.G Bachelor's degree in the Eniglish Language"
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
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
                                      <Form.Select
                                        aria-label="Choose Years of study..."
                                        value={selectedYear}
                                        onChange={handleYearChange}
                                      >
                                        <option>Choose Years of study...</option>
                                        {years.map((year) => (
                                          <option key={year} value={year}>
                                            {year}
                                          </option>
                                        ))}
                                      </Form.Select>
                                    </Col>
                                    <Col>
                                      <Form.Select
                                        aria-label="Choose Years of study..."
                                        value={selectedYear}
                                        onChange={handleYearChange}
                                      >
                                        <option>Choose Years of study...</option>
                                        {years.map((year) => (
                                          <option key={year} value={year}>
                                            {year}
                                          </option>
                                        ))}
                                      </Form.Select>
                                    </Col>
                                  </Row>
                                </Form.Group>
                              </Row>

                            </>
                          )}
                        </Form>
                        {isEductionVisible && (
                          <div className="Diplomaarea">
                            <h1>Get a 'Diploma verified' badge</h1>
                            <p>
                              Upload your diploma to boost your credibility! Our
                              team will review it and add the badge to your profile.
                              Once reviewed, your files will be deleted.
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
                        {index > 0 && (
                          <Button onClick={() => removeContactEducation(index)} className="red-button w-100 mt-3 mb-3" hoverColor="theme-button1"
                            label="Remove" />
                        )}
                      </div>
                    ))}
                    <Link className="addlang" onClick={addContactEducation}>add another Education</Link>
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
                  </div>
                </Col>
              )}
              {/* starting here step 5 part */}
              {/* Conditionally render step two */}
              {currentStep === 5 && (
                <>
                  {" "}
                  <Col lg={7}>
                    <div className="tutor-registepone">
                      <h1>Profile description</h1>
                      <p>
                        This info will go on your public profile. Write it in
                        the language you’ll be teaching and make sure to follow
                        our{" "}
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
                    </div>
                  </Col>
                </>
              )}
              {/* starting here step 6 part */}
              {/* Conditionally render step two */}
              {currentStep === 6 && (
                <>
                  <Col lg={5}>
                    <div className="tutor-registepone video-mainArea">
                      <h1>Video introduction</h1>
                      <p>
                        Introduce yourself to students in the language you'll be
                        teaching.{" "}
                      </p>
                      <VideoRecorder />
                      {/* <VideoWebRecorder /> */}
                      <h5>Or paste a link to your video</h5>
                      <input
                        type="link"
                        placeholder="www.youtube.com/watch?v=l5aZJBLAu1E"
                      />
                      {/* after click on step 2 next button step one hide and display step 3 data */}
                    </div>
                  </Col>
                  <Col lg={7}>
                    <div className="video-req">
                      <h4>Video requirements</h4>
                      <p>
                        Make sure your video meets the requirements to get
                        approved
                      </p>
                    </div>
                    <div className="do-no">
                      <h5>
                        <i className="fa fa-check" /> Do
                      </h5>
                      <ul>
                        <li>
                          Your video should be between 30 seconds and 2 minutes
                          long
                        </li>
                        <li>Record in horizontal mode and at eye level</li>
                        <li>Use good lighting and a neutral background</li>
                        <li>
                          Use a stable surface so that your video does not
                          appear shaky
                        </li>
                        <li>
                          Make sure your face and eyes are fully visible (except
                          for religious reasons)
                        </li>
                        <li>
                          Highlight your teaching experience and any relevant
                          teaching certification(s)
                        </li>
                        <li>
                          Greet your students warmly and invite them to book a
                          lesson
                        </li>
                      </ul>
                      <h5>
                        <i className="fa fa-times" /> Don't
                      </h5>
                      <ul>
                        <li>Include your surname or any contact details</li>
                        <li>Include logos or links</li>
                        <li>Use slideshows or presentations</li>
                        <li>Have any other people visible in your video</li>
                      </ul>
                    </div>
                  </Col>
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
                </>
              )}
              {/* starting here step 7 part */}
              {/* Conditionally render step two */}
              {currentStep === 7 && (
                <Col lg={7}>
                  <div className="tutor-registepone">
                    <h1>Availability</h1>
                    <h6>Set your timezone</h6>
                    <p>
                      A correct timezone is essential to coordinate lessons with
                      international students
                    </p>
                    <Form className="ava-slottime">
                      <Form.Group className="mb-3">
                        <Form.Label>Choose your timezone</Form.Label>
                        <Form.Select aria-label="Choose your timezone...">
                          <option>Choose Country...</option>
                          {countrys?.map((country) => (
                            <option key={country.id} value={country.id}>
                              {country.country}
                            </option>
                          ))}
                        </Form.Select>
                      </Form.Group>
                      <h4>Set your availability</h4>
                      <p>
                        Availability shows your potential working hours.
                        Students can book lessons at these times.
                      </p>
                      <h5>
                        <i className="fa fa-check-square" /> Monday
                      </h5>
                      {Monday.map((slot, index) => (
                        <Row key={index}>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId={`from-${index}`}
                            >
                              <Form.Label>From</Form.Label>
                              <Form.Select
                                aria-label={`from-${index}`}
                                value={slot.from}
                              >
                                <option>09:00</option>
                                <option>10:00</option>
                                <option>11:00</option>
                                <option>12:00</option>
                                <option>13:00</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId={`to-${index}`}
                            >
                              <Form.Label>To</Form.Label>
                              <Form.Select
                                aria-label={`to-${index}`}
                                value={slot.to}
                              >
                                <option>09:00</option>
                                <option>10:00</option>
                                <option>11:00</option>
                                <option>12:00</option>
                                <option>13:00</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            {index > 0 && (
                              <Button onClick={() => removeMonday(index)} className="red-button w-100 mt-3 mb-3" hoverColor="theme-button1"
                                label="Remove" />
                            )}
                          </Col>
                        </Row>
                      ))}

                      <Link
                        className="add-slottime"
                        onClick={addTimeSlotMonday}
                      >
                        Add another timeslot
                      </Link>
                      <h5>
                        <i className="fa fa-check-square" /> Tuesday
                      </h5>
                      {Tuesday.map((slot, index) => (
                        <Row key={index}>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId={`from-${index}`}
                            >
                              <Form.Label>From</Form.Label>
                              <Form.Select
                                aria-label={`from-${index}`}
                                value={slot.from}
                              >
                                <option>09:00</option>
                                <option>10:00</option>
                                <option>11:00</option>
                                <option>12:00</option>
                                <option>13:00</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId={`to-${index}`}
                            >
                              <Form.Label>To</Form.Label>
                              <Form.Select
                                aria-label={`to-${index}`}
                                value={slot.to}
                              >
                                <option>09:00</option>
                                <option>10:00</option>
                                <option>11:00</option>
                                <option>12:00</option>
                                <option>13:00</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            {index > 0 && (
                              <Button onClick={() => removeTuesday(index)} className="red-button w-100 mt-3 mb-3" hoverColor="theme-button1"
                                label="Remove" />
                            )}
                          </Col>
                        </Row>
                      ))}

                      <Link
                        className="add-slottime"
                        onClick={addTimeSlotTuesday}
                      >
                        Add another timeslot
                      </Link>
                      <h5>
                        <i className="fa fa-check-square" /> Wednesday
                      </h5>
                      {Wednesday.map((slot, index) => (
                        <Row key={index}>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId={`from-${index}`}
                            >
                              <Form.Label>From</Form.Label>
                              <Form.Select
                                aria-label={`from-${index}`}
                                value={slot.from}
                              >
                                <option>09:00</option>
                                <option>10:00</option>
                                <option>11:00</option>
                                <option>12:00</option>
                                <option>13:00</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId={`to-${index}`}
                            >
                              <Form.Label>To</Form.Label>
                              <Form.Select
                                aria-label={`to-${index}`}
                                value={slot.to}
                              >
                                <option>09:00</option>
                                <option>10:00</option>
                                <option>11:00</option>
                                <option>12:00</option>
                                <option>13:00</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            {index > 0 && (
                              <Button onClick={() => removeWednesday(index)} className="red-button w-100 mt-3 mb-3" hoverColor="theme-button1"
                                label="Remove" />
                            )}
                          </Col>
                        </Row>
                      ))}

                      <Link
                        className="add-slottime"
                        onClick={addTimeSlotWednesday}
                      >
                        Add another timeslot
                      </Link>
                      <h5>
                        <i className="fa fa-check-square" /> Thursday
                      </h5>
                      {Thursday.map((slot, index) => (
                        <Row key={index}>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId={`from-${index}`}
                            >
                              <Form.Label>From</Form.Label>
                              <Form.Select
                                aria-label={`from-${index}`}
                                value={slot.from}
                              >
                                <option>09:00</option>
                                <option>10:00</option>
                                <option>11:00</option>
                                <option>12:00</option>
                                <option>13:00</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId={`to-${index}`}
                            >
                              <Form.Label>To</Form.Label>
                              <Form.Select
                                aria-label={`to-${index}`}
                                value={slot.to}
                              >
                                <option>09:00</option>
                                <option>10:00</option>
                                <option>11:00</option>
                                <option>12:00</option>
                                <option>13:00</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            {index > 0 && (
                              <Button onClick={() => removeThursday(index)} className="red-button w-100 mt-3 mb-3" hoverColor="theme-button1"
                                label="Remove" />
                            )}
                          </Col>
                        </Row>
                      ))}

                      <Link
                        className="add-slottime"
                        onClick={addTimeSlotThursday}
                      >
                        Add another timeslot
                      </Link>
                      <h5>
                        <i className="fa fa-check-square" /> Friday
                      </h5>
                      {Friday.map((slot, index) => (
                        <Row key={index}>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId={`from-${index}`}
                            >
                              <Form.Label>From</Form.Label>
                              <Form.Select
                                aria-label={`from-${index}`}
                                value={slot.from}
                              >
                                <option>09:00</option>
                                <option>10:00</option>
                                <option>11:00</option>
                                <option>12:00</option>
                                <option>13:00</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId={`to-${index}`}
                            >
                              <Form.Label>To</Form.Label>
                              <Form.Select
                                aria-label={`to-${index}`}
                                value={slot.to}
                              >
                                <option>09:00</option>
                                <option>10:00</option>
                                <option>11:00</option>
                                <option>12:00</option>
                                <option>13:00</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          {index > 0 && (
                            <Button onClick={() => removeFriday(index)} className="red-button w-100 mt-3 mb-3" hoverColor="theme-button1"
                              label="Remove" />
                          )}
                        </Row>
                      ))}

                      <Link
                        className="add-slottime"
                        onClick={addTimeSlotFriday}
                      >
                        Add another timeslot
                      </Link>
                      <h5>
                        <i className="fa fa-check-square" /> Saturday
                      </h5>
                      {Saturday.map((slot, index) => (
                        <Row key={index}>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId={`from-${index}`}
                            >
                              <Form.Label>From</Form.Label>
                              <Form.Select
                                aria-label={`from-${index}`}
                                value={slot.from}
                              >
                                <option>09:00</option>
                                <option>10:00</option>
                                <option>11:00</option>
                                <option>12:00</option>
                                <option>13:00</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId={`to-${index}`}
                            >
                              <Form.Label>To</Form.Label>
                              <Form.Select
                                aria-label={`to-${index}`}
                                value={slot.to}
                              >
                                <option>09:00</option>
                                <option>10:00</option>
                                <option>11:00</option>
                                <option>12:00</option>
                                <option>13:00</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          {index > 0 && (
                            <Button onClick={() => removeSaturday(index)} className="red-button w-100 mt-3 mb-3" hoverColor="theme-button1"
                              label="Remove" />
                          )}
                        </Row>
                      ))}

                      <Link
                        className="add-slottime"
                        onClick={addTimeSlotSaturday}
                      >
                        Add another timeslot
                      </Link>
                      <h5>
                        <i className="fa fa-check-square" /> Saturday
                      </h5>
                      {Sunday.map((slot, index) => (
                        <Row key={index}>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId={`from-${index}`}
                            >
                              <Form.Label>From</Form.Label>
                              <Form.Select
                                aria-label={`from-${index}`}
                                value={slot.from}
                              >
                                <option>09:00</option>
                                <option>10:00</option>
                                <option>11:00</option>
                                <option>12:00</option>
                                <option>13:00</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Group
                              className="mb-3"
                              controlId={`to-${index}`}
                            >
                              <Form.Label>To</Form.Label>
                              <Form.Select
                                aria-label={`to-${index}`}
                                value={slot.to}
                              >
                                <option>09:00</option>
                                <option>10:00</option>
                                <option>11:00</option>
                                <option>12:00</option>
                                <option>13:00</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          {index > 0 && (
                            <Button onClick={() => removeSunday(index)} className="red-button w-100 mt-3 mb-3" hoverColor="theme-button1"
                              label="Remove" />
                          )}
                        </Row>
                      ))}

                      <Link
                        className="add-slottime"
                        onClick={addTimeSlotSunday}
                      >
                        Add another timeslot
                      </Link>
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
                  </div>
                </Col>
              )}
              {/* starting here step 8 part */}
              {/* Conditionally render step two */}
              {currentStep === 8 && (
                <Col lg={7}>
                  <div className="tutor-registepone">
                    <h1>Set your hourly base rate</h1>
                    <p>
                      To get more students to your profile, we recommend a base
                      price of $6 per hour for new tutors in your subject and
                      with your experience level.
                    </p>
                    <Form className="a">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price in USD only</Form.Label>
                        <Form.Control
                          className="text-fieldhover"
                          type="text"
                          placeholder="Enter email"
                        />
                      </Form.Group>
                    </Form>

                    <div classname="pricing-alrt">
                      <Alert variant="warning">
                        Change your base rate in settings after approval
                      </Alert>
                    </div>
                    <Accordion defaultActiveKey="0" className="learn-comm">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>LearnPTL commission</Accordion.Header>
                        <Accordion.Body>
                          <p>
                            We use the funds for getting more students and for
                            constant improvements of our learning platform
                          </p>
                          <ul>
                            <li>
                              For every trial lesson with a new student Preply’s
                              commission is 100%
                            </li>
                            <li>
                              For all the subsequent lessons, Preply charges a
                              percentage (18%-33%) of the hourly rate
                            </li>
                            <li>
                              The more hours you teach, the lower your rate of
                              commission will be
                            </li>
                          </ul>
                          <div className="Completed-hours">
                            <div className="completed-lst">
                              <div>
                                <p>Completed hours</p>
                              </div>
                              <div>
                                <p>Commission rate</p>
                              </div>
                            </div>
                            <div className="completed-lst">
                              <div>
                                <h6>0 - 20 hours</h6>
                              </div>
                              <div>
                                <h6>
                                  <strong>33%</strong>
                                </h6>
                              </div>
                            </div>
                            <div className="completed-lst">
                              <div>
                                <h6>21 - 50 hours</h6>
                              </div>
                              <div>
                                <h6>
                                  <strong>28%</strong>
                                </h6>
                              </div>
                            </div>
                            <div className="completed-lst">
                              <div>
                                <h6>51 - 200 hours</h6>
                              </div>
                              <div>
                                <h6>
                                  <strong>25%</strong>
                                </h6>
                              </div>
                            </div>
                            <div className="completed-lst">
                              <div>
                                <h6>201 - 400 hours</h6>
                              </div>
                              <div>
                                <h6>
                                  <strong>22%</strong>
                                </h6>
                              </div>
                            </div>
                            <div className="completed-lst">
                              <div>
                                <h6>400+ hours</h6>
                              </div>
                              <div>
                                <h6>
                                  <strong>18%</strong>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <div classname="pricing-alrt">
                      <Alert variant="warning">
                        Students can subscribe to monthly or yearly plans based
                        on the frequency of lessons they’ll take. Automatic
                        recurring payment takes place every 28 days.
                      </Alert>
                    </div>
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
                          onClick={() => handleTutorsRegister()}
                          className="theme-button1 w-100 mt-3"
                          hoverColor="theme-button1"
                          label="Complete Registration"
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              )}
            </Row>
          </Container>
        </section>
      </section>


      <Footer />
    </>
  );
};

export default RegisterTutore;
