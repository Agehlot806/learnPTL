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
import { toast } from "react-toastify";

const RegisterTutore = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { tutorsusers } = useSelector((state) => state.auth);
  const { countrys } = useSelector((state) => state.countrys);
  const { speaks } = useSelector((state) => state.speaks);
  const { certificationshow } = useSelector((state) => state.certificationshow);
  const [isVisible, setIsVisible] = useState(true);
  console.log("isVisible: ", isVisible);
  const [isEductionVisible, setIsEductionVisible] = useState(true);
  console.log("isEductionVisible: ", isEductionVisible);

  useEffect(() => {
    setCertificate((prevCertificate) => {
      return prevCertificate.map((cert) => ({
        ...cert,
        teachingcertification: isVisible,
      }));
    });
  }, [isVisible]);

  // Function to toggle the visibility of the <h1> element
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  useEffect(() => {
    setContactsEducation((prevCertificate) => {
      return prevCertificate.map((cert) => ({
        ...cert,
        educationdegree: isEductionVisible,
      }));
    });
  }, [isEductionVisible]);
  const toggleEductionVisibility = () => {
    setIsEductionVisible(!isEductionVisible);
  };
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
    // Check if any field is empty
    const isEmpty = Object.values(tutorsRegisterData).some(
      (value) => value === ""
    );

    if (isEmpty) {
      toast.error(tutorsusers.message);
    } else {
      const formData = new FormData();
      // Append all form data
      formData.append("name", tutorsRegisterData.name);
      formData.append("description", tutorsRegisterData.description);
      formData.append("price", tutorsRegisterData.price);
      formData.append("rating", tutorsRegisterData.rating);
      formData.append("level", tutorsRegisterData.level);
      formData.append("categories", tutorsRegisterData.categories);
      formData.append("duration", tutorsRegisterData.duration);
      formData.append("speak", tutorsRegisterData.speak);
      formData.append("country", tutorsRegisterData.country);
      formData.append("specialties", tutorsRegisterData.specialties);
      formData.append("image", tutorsRegisterData.image);
      formData.append("video", tutorsRegisterData.video);
      formData.append("speaker", tutorsRegisterData.speaker);
      formData.append(
        "professionaltutors",
        tutorsRegisterData.professionaltutors
      );
      formData.append("Supertutors", tutorsRegisterData.Supertutors);
      formData.append("lastname", tutorsRegisterData.lastname);
      formData.append("firstprice", tutorsRegisterData.firstprice);
      formData.append("mobileNumber", tutorsRegisterData.mobileNumber);
      formData.append("certificate", tutorsRegisterData.certificate);
      formData.append("Education", tutorsRegisterData.Education);
      formData.append("review", tutorsRegisterData.review);
      formData.append("Schedule", tutorsRegisterData.Schedule);
      // certificate
      formData.append("issuedby", tutorsRegisterData.issuedby);
      formData.append("selectedYear", tutorsRegisterData.selectedYear);
      formData.append("selectedYearend", tutorsRegisterData.selectedYearend);
      // edu
      formData.append("university", tutorsRegisterData.university);
      formData.append("degree", tutorsRegisterData.degree);
      formData.append("specialization", tutorsRegisterData.specialization);
      formData.append("degreeType", tutorsRegisterData.degreetype);
      formData.append(
        "yearsOfStudyStart",
        tutorsRegisterData.yearsOfStudyStart
      );
      formData.append("yearsOfStudyEnd", tutorsRegisterData.yearsOfStudyEnd);
      formData.append("uploadDiploma", tutorsRegisterData.uploadDiploma);
      formData.append(
        "teachingcertification",
        tutorsRegisterData.educationdegree
      );
      // profile details
      formData.append(
        "introduce_yourself",
        tutorsRegisterData.introduce_yourself
      );
      formData.append(
        "teaching_experience",
        tutorsRegisterData.teaching_experience
      );
      formData.append(
        "motivate_potential_students",
        tutorsRegisterData.motivate_potential_students
      );
      formData.append("catchy_headline", tutorsRegisterData.catchy_headline);

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
      case 3:
        if (validateStep3()) {
          setCurrentStep(currentStep + 1);
        }
        break;
      case 4:
        if (validateStep4()) {
          setCurrentStep(currentStep + 1);
        }
        break;
      case 5:
        if (validateStep5()) {
          setCurrentStep(currentStep + 1);
        }
        break;
      // Add validation for other steps as needed
      default:
        break;
    }
  };

  const validateStep1 = () => {
    if (
      tutorsRegisterData.name &&
      tutorsRegisterData.lastname &&
      tutorsRegisterData.country &&
      tutorsRegisterData.speak &&
      tutorsRegisterData.mobileNumber
    ) {
      return true;
    } else {
      toast.error("Please fill all required fields for Step 1.");
      return false;
    }
  };

  const validateStep2 = () => {
    if (file) {
      return true;
    } else {
      toast.error("Please fill all required fields for Step 2.");
      return false;
    }
  };
  const validateStep3 = () => {
    if (tutorsRegisterData.teachingcertification) {
      console.log("trueee");
      return true;
    } else {
      console.log("false else");
      // Check if all other fields are blank
      if (
        tutorsRegisterData.subject &&
        tutorsRegisterData.certificate &&
        tutorsRegisterData.issuedby &&
        tutorsRegisterData.country &&
        tutorsRegisterData.selectedYear &&
        tutorsRegisterData.selectedYearend &&
        tutorsRegisterData.uploadPhoto
      ) {
        console.log("treeee ");
        // If all other fields are blank, return true without checking teachingcertification
        return true;
      } else {
        toast.error("Please provide teaching certification.");
        console.log("false else 222");
        return false;
      }
    }
  };
  const validateStep4 = () => {
    if (tutorsRegisterData.educationdegree) {
      console.log("trueee");
      return true;
    } else {
      console.log("false else");
      // Check if all other fields are blank
      if (
        tutorsRegisterData.university &&
        tutorsRegisterData.degree &&
        tutorsRegisterData.degreetype &&
        tutorsRegisterData.specialization &&
        tutorsRegisterData.selectedYear &&
        tutorsRegisterData.selectedYearend &&
        tutorsRegisterData.uploadDiploma
      ) {
        console.log("treeee ");
        // If all other fields are blank, return true without checking teachingcertification
        return true;
      } else {
        toast.error("Please provide teaching certification.");
        console.log("false else 222");
        return false;
      }
    }
  };

  const validateStep5 = () => {
    if (
      tutorsRegisterData.introduce_yourself &&
      tutorsRegisterData.teaching_experience &&
      tutorsRegisterData.motivate_potential_students &&
      tutorsRegisterData.catchy_headline
    ) {
      return true;
    } else {
      toast.error("Please fill all required fields for Step 5.");
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
      // console.log("Uploading image:", file);
    } else {
      // console.error("No image file selected.");
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
  // ***************************************
  const [contacts, setContacts] = useState([
    { name: "", contact: "", address: "" },
  ]);

  const addContact = () => {
    setContacts([...contacts, { desiredValue: "", contact: "", address: "" }]);
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

  // const [contactsEducation, setContactsEducation] = useState([
  //   { name: "", contact: "", address: "" },
  // ]);

  // const addContactEducation = () => {
  //   setContactsEducation([
  //     ...contactsEducation,
  //     { desiredValue: "", contact: "", address: "" },
  //   ]);
  // };

  // const removeContactEducation = (index) => {
  //   if (index !== 0) {
  //     const updatedContactsEducation = contactsEducation.filter(
  //       (_, i) => i !== index
  //     );
  //     setContactsEducation(updatedContactsEducation);
  //   }
  // };

  // const handleFieldChangeEducation = (index, fieldName, value) => {
  //   const updatedContactsEducation = [...contactsEducation];
  //   updatedContactsEducation[index][fieldName] = value;
  //   setContactsEducation(updatedContactsEducation);
  // };
  // ***************************************************** education
  const degreeTypeData = [
    { type: "Graduate diploma" },
    { type: "Graduate certificate" },
    { type: `Master's degree` },
    { type: `PhD (Doctor of Philosophy)` },
  ];
  const [contactsEducation, setContactsEducation] = useState([
    {
      educationdegree: isEductionVisible,
      university: "",
      degree: "",
      specialization: "",
      degreetype: "",
      selectedYear: "",
      selectedYearend: "",
      uploadDiploma: null,
    },
  ]);

  const addContactEducation = () => {
    setContactsEducation([
      ...contactsEducation,
      {
        educationdegree: isEductionVisible,
        university: "",
        degree: "",
        specialization: "",
        degreetype: "",
        selectedYear: "",
        selectedYearend: "",
        uploadDiploma: null,
      },
    ]);
  };

  const removeContactEducation = (index) => {
    const rows = [...contactsEducation];
    rows.splice(index, 1);
    setContactsEducation(rows);
  };

  const handleFieldChangeEducation = (index, event) => {
    const { name, value, files } = event.target;
    let list = [...contactsEducation];
    // console.log("listt: ", list);
    if (files) {
      list[index][name] = files[0];
    } else {
      list[index][name] = value;
    }
    setContactsEducation(list);
  };
  console.log("edusuyash ", contactsEducation);
  const removeImageEducation = (index, event) => {
    event.preventDefault();
    const list = [...contactsEducation];
    list[index].uploadDiploma = null;
    setContactsEducation(list);
    // console.log("listtt: ", list);
    // Reset the value of the corresponding file input field
    const fileInput = document.getElementById(`fileInput-${index}`);
    if (fileInput) {
      fileInput.value = ""; // Reset the value to clear the file input
    }
  };
  // *****************************************************
  const [certificate, setCertificate] = useState([
    {
      teachingcertification: isVisible,
      subject: "",
      certificate: "",
      description: "",
      issuedby: "",
      country: "",
      selectedYear: "",
      selectedYearend: "",
      uploadPhoto: null,
    },
  ]);

  const addCertificate = () => {
    setCertificate([
      ...certificate,
      {
        teachingcertification: isVisible,
        subject: "",
        certificate: "",
        description: "",
        issuedby: "",
        country: "",
        selectedYear: "",
        selectedYearend: "",
        uploadPhoto: null,
      },
    ]);
  };

  const removeCertificate = (index) => {
    const rows = [...certificate];
    rows.splice(index, 1);
    setCertificate(rows);
  };

  const handleChangeCertificate = (index, event) => {
    const { name, value, files } = event.target;
    let list = [...certificate];
    // console.log("listt: ", list);
    if (files) {
      list[index][name] = files[0];
    } else {
      list[index][name] = value;
    }
    setCertificate(list);
  };
  console.log("certificatesuyash ", certificate);
  const removeImageCertificate = (index, event) => {
    event.preventDefault();
    const list = [...certificate];
    list[index].uploadPhoto = null;
    setCertificate(list);
    // console.log("listtt: ", list);
    // Reset the value of the corresponding file input field
    const fileInput = document.getElementById(`fileInput-${index}`);
    if (fileInput) {
      fileInput.value = ""; // Reset the value to clear the file input
    }
  };
  // *************************************

  const [profileDescriptionDetails, setprofileDescriptionDetails] = useState([
    {
      introduce_yourself: "",
      teaching_experience: "",
      motivate_potential_students: "",
      catchy_headline: "",
    },
  ]);
  console.log("profileDescriptionDetails: ", profileDescriptionDetails);
  const handleChangeProfileDescription = (index, event) => {
    const { name, value } = event.target;
    let list = [...profileDescriptionDetails];
    list[index][name] = value;
    setprofileDescriptionDetails(list);
  };
  const [tutorsRegisterData, settutorsRegisterData] = useState({
    name: "",
    price: "",
    rating: "",
    level: "",
    categories: "",
    duration: "",
    speak: "",
    specialties: "",
    image: "",
    video: "",
    speaker: "",
    professionaltutors: "",
    Supertutors: "",
    lastname: "",
    firstprice: "",
    mobileNumber: "",
    certificate: "",
    Education: "",
    Schedule: "",
    // certificate
    // description: "",
    // subject: "",
    // country: "",
    // issuedby: "",
    // selectedYear: "",
    // selectedYearend: "",
    // uploadPhoto: "",
    teachingcertification: isVisible,
    // certificate

    // edu
    educationdegree: isEductionVisible,
    // university: "",
    // degree: "",
    // degreetype: "",
    // specialization: "",
    // yearsOfStudyStart: "",
    // yearsOfStudyEnd: "",
    // uploadDiploma: "",
    // Profile description
    introduce_yourself: "",
    teaching_experience: "",
    motivate_potential_students: "",
    catchy_headline: "",
  });
  console.log("tutorsRegisterData: ", tutorsRegisterData);
  return (
    <>
      <Header />

      <Allbg title="Register A Tutor" linkTo="/" linkText="Home" />

      <section className="section-padding">
        <div>
          <ul className="registermenu">
            <li>
              <a>
                {" "}
                <span className={step1Completed ? "completed" : ""}>1</span>
                About
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
                          placeholder="Enter First Name"
                          value={tutorsRegisterData.name}
                          onChange={(e) => {
                            settutorsRegisterData({
                              ...tutorsRegisterData,
                              name: e.target.value,
                            });
                          }}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter Last Name"
                          value={tutorsRegisterData.lastname}
                          onChange={(e) => {
                            settutorsRegisterData({
                              ...tutorsRegisterData,
                              lastname: e.target.value,
                            });
                          }}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Country of origin</Form.Label>
                        <Form.Select
                          aria-label="Choose Country..."
                          value={tutorsRegisterData.country}
                          onChange={(e) => {
                            settutorsRegisterData({
                              ...tutorsRegisterData,
                              country: e.target.value,
                            });
                          }}
                        >
                          <option defaultValue="">Select Country</option>
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
                        <Form.Select
                          aria-label="Choose Subject..."
                          value={tutorsRegisterData.speak}
                          onChange={(e) => {
                            settutorsRegisterData({
                              ...tutorsRegisterData,
                              speak: e.target.value,
                            });
                          }}
                        >
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
                        <Form.Control
                          type="number"
                          placeholder="Enter phone number"
                          value={tutorsRegisterData.mobileNumber}
                          onChange={(e) => {
                            settutorsRegisterData({
                              ...tutorsRegisterData,
                              mobileNumber: e.target.value,
                            });
                          }}
                        />
                      </Form.Group>
                      <Form.Check aria-label="option 1">
                        <Form.Check.Input
                          className="check_box"
                          checked={over18Checked}
                          onChange={(e) => setOver18Checked(e.target.checked)}
                        />
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
                    {/* {contacts.map((contact, index) => ( */}
                    <div
                      // key={index}
                      className="mt-4"
                    >
                      <Form>
                        {certificate.map((data, index) => {
                          const {
                            teachingcertification,
                            subject,
                            certificate,
                            description,
                            issuedby,
                            country,
                            selectedYear,
                            selectedYearend,
                            uploadPhoto,
                          } = data;
                          return (
                            <>
                              <div className="d-flex justify-content-between">
                                <Form.Check aria-label="option 1">
                                  <Form.Check.Input
                                    className="check_box"
                                    onChange={toggleVisibility}
                                    checked={!isVisible}
                                    value={isVisible}
                                    name="teachingcertification"
                                  />
                                  <Form.Check.Label>
                                    {`I don’t have any teaching certification yet`}
                                  </Form.Check.Label>
                                </Form.Check>
                                {index > 0 && (
                                  <Link
                                    onClick={() => removeCertificate(index)}
                                  >
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
                                      // value={contact.desiredValue}
                                      // onChange={(e) =>
                                      //   handleFieldChange(
                                      //     index,
                                      //     "name",
                                      //     e.target.value
                                      //   )
                                      // }
                                    >
                                      <Form.Label>Subject</Form.Label>
                                      <Form.Select
                                        aria-label="Choose Subject..."
                                        onChange={(event) =>
                                          handleChangeCertificate(index, event)
                                        }
                                        value={subject}
                                        name="subject"
                                      >
                                        <option>Choose Subject...</option>
                                        {speaks?.map((speak) => (
                                          <option
                                            key={speak?.id}
                                            value={speak?.name}
                                          >
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
                                      <Form.Select
                                        aria-label="Choose Certificate..."
                                        onChange={(event) =>
                                          handleChangeCertificate(index, event)
                                        }
                                        value={certificate}
                                        name="certificate"
                                      >
                                        <option>Choose Certificate...</option>
                                        {certificationshow.map((item) => (
                                          <option
                                            key={item?.id}
                                            value={item?.name}
                                          >
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
                                        onChange={(event) =>
                                          handleChangeCertificate(index, event)
                                        }
                                        value={description}
                                        name="description"
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
                                        onChange={(event) =>
                                          handleChangeCertificate(index, event)
                                        }
                                        value={issuedby}
                                        name="issuedby"
                                      />
                                    </Form.Group>
                                    <Form.Group
                                      className="mb-3"
                                      controlId="formBasicEmail"
                                    >
                                      <Form.Label>Country of origin</Form.Label>
                                      <Form.Select
                                        aria-label="Choose Country..."
                                        onChange={(event) =>
                                          handleChangeCertificate(index, event)
                                        }
                                        value={country}
                                        name="country"
                                      >
                                        <option>Choose Country...</option>
                                        {countrys?.map((country) => (
                                          <option
                                            key={country.id}
                                            value={country.id}
                                          >
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
                                              onInput={(event) =>
                                                handleChangeCertificate(
                                                  index,
                                                  event
                                                )
                                              }
                                              name="selectedYear"
                                            >
                                              <option>
                                                Choose Years of study...
                                              </option>
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
                                              onInput={(event) =>
                                                handleChangeCertificate(
                                                  index,
                                                  event
                                                )
                                              }
                                              name="selectedYearend"
                                            >
                                              <option>
                                                Choose Years of study...
                                              </option>
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
                                        Upload your diploma to boost your
                                        credibility! Our team will review it and
                                        add the badge to your profile. Once
                                        reviewed, your files will be deleted.
                                      </p>
                                      <p>
                                        JPG or PNG format; maximum size of 20MB.
                                      </p>
                                    </div>
                                    <Form.Group className="mb-3">
                                      <Form.Label>
                                        {strings.uploadPhoto}
                                      </Form.Label>
                                      <Form.Control
                                        type="file"
                                        placeholder={strings.uploadPhoto}
                                        onChange={(event) =>
                                          handleChangeCertificate(index, event)
                                        }
                                        name="uploadPhoto"
                                        id={`fileInput-${index}`}
                                      />
                                    </Form.Group>
                                  </div>
                                  <div className="col-2">
                                    {uploadPhoto && (
                                      // certificate.length !== 1 ? (
                                      <button
                                        className="btn btn-outline-danger"
                                        onClick={(event) =>
                                          removeImageCertificate(index, event)
                                        }
                                      >
                                        Remove
                                      </button>

                                      // ) : (
                                      //   ""
                                    )}
                                  </div>
                                </div>
                              )}
                            </>
                          );
                        })}
                      </Form>
                    </div>
                    {/* ))} */}
                    {isVisible && (
                      <Link className="addlang" onClick={addCertificate}>
                        add another Certificate
                      </Link>
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
                    {/* {contactsEducation.map((contactEducation, index) => ( */}
                    {contactsEducation.map((data, index) => {
                      const {
                        educationdegree,
                        degree,
                        degreetype,
                        specialization,
                        university,
                        selectedYear,
                        selectedYearend,
                        uploadDiploma,
                      } = data;
                      return (
                        <>
                          <div className="mt-4">
                            <Form>
                              <Form.Check aria-label="option 1">
                                <Form.Check.Input
                                  className="check_box"
                                  onChange={toggleEductionVisibility}
                                  checked={!isEductionVisible}
                                  value={isEductionVisible}
                                  name="educationdegree"
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
                                    key={index}
                                  >
                                    <Form.Label>University</Form.Label>
                                    <Form.Control
                                      className="text-fieldhover"
                                      type="text"
                                      placeholder="E.G Mount Royal University"
                                      onChange={(event) =>
                                        handleFieldChangeEducation(index, event)
                                      }
                                      value={university}
                                      name="university"
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
                                      onChange={(event) =>
                                        handleFieldChangeEducation(index, event)
                                      }
                                      value={degree}
                                      name="degree"
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
                                      onChange={(event) =>
                                        handleFieldChangeEducation(index, event)
                                      }
                                      value={specialization}
                                      name="specialization"
                                    />
                                  </Form.Group>
                                  <Form.Group
                                    className="mb-3 mt-3"
                                    controlId="formBasicEmail"
                                  >
                                    <Form.Label>Degree type</Form.Label>
                                    <Form.Select
                                      aria-label="Choose Degree type..."
                                      onChange={(event) =>
                                        handleFieldChangeEducation(index, event)
                                      }
                                      value={degreetype}
                                      name="degreetype"
                                    >
                                      <option>Choose Degree type...</option>
                                      {degreeTypeData.map((item, index) => (
                                        <option
                                          key={item?.index}
                                          value={item?.type}
                                        >
                                          {item?.type}
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
                                            onInput={(event) =>
                                              handleFieldChangeEducation(
                                                index,
                                                event
                                              )
                                            }
                                            name="selectedYear"
                                          >
                                            <option>
                                              Choose Years of study...
                                            </option>
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
                                            onInput={(event) =>
                                              handleFieldChangeEducation(
                                                index,
                                                event
                                              )
                                            }
                                            name="selectedYearend"
                                          >
                                            <option>
                                              Choose Years of study...
                                            </option>
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
                            {/* {isEductionVisible && ( */}
                            <div className="Diplomaarea">
                              <h1>Get a 'Diploma verified' badge</h1>
                              <p>
                                Upload your diploma to boost your credibility!
                                Our team will review it and add the badge to
                                your profile. Once reviewed, your files will be
                                deleted.
                              </p>
                              <p>JPG or PNG format; maximum size of 20MB.</p>
                            </div>
                            <Form.Group className="mb-3">
                              <Form.Label>{strings.uploadPhoto}</Form.Label>
                              <Form.Control
                                type="file"
                                placeholder={strings.uploadPhoto}
                                onChange={(event) =>
                                  handleFieldChangeEducation(index, event)
                                }
                                name="uploadDiploma"
                                id={`fileInput-${index}`}
                              />
                            </Form.Group>

                            {uploadDiploma && (
                              <div className="col-2">
                                <button
                                  className="btn btn-outline-danger"
                                  onClick={(event) =>
                                    removeImageEducation(index, event)
                                  }
                                >
                                  Remove
                                </button>
                              </div>
                            )}
                          </div>
                        </>
                      );
                    })}
                    {isEductionVisible && (
                      <Link className="addlang" onClick={addContactEducation}>
                        add another Education
                      </Link>
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
                      {/* 1 */}
                      <Accordion defaultActiveKey={0} key={0}>
                        <Accordion.Item eventKey={0}>
                          <Accordion.Header>
                            1. Introduce yourself
                          </Accordion.Header>
                          <Accordion.Body>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              placeholder={`Hello, my name is... and i'm from...`}
                              // name="introduce_yourself"
                              value={tutorsRegisterData.introduce_yourself}
                              // onChange={(e) =>
                              //   handleChangeProfileDescription(0, e)
                              // }
                              onChange={(e) => {
                                settutorsRegisterData({
                                  ...tutorsRegisterData,
                                  introduce_yourself: e.target.value,
                                });
                              }}
                            />
                            Show potential students who you are! Share your
                            teaching experience and passion for education and
                            briefly mention your interests and hobbies.
                            {/* {item.alert && ( */}
                            <div className="cvformate_alert">
                              <p>
                                <span>
                                  {" "}
                                  <i
                                    class="fa fa-info-circle"
                                    aria-hidden="true"
                                  ></i>
                                </span>{" "}
                                Don’t include your last name or present your
                                information in a CV format
                              </p>
                            </div>
                            {/* )} */}
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      {/* 2 */}
                      <Accordion defaultActiveKey={0} key={1}>
                        <Accordion.Item eventKey={1}>
                          <Accordion.Header>
                            2. Teaching experience
                          </Accordion.Header>
                          <Accordion.Body>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              placeholder={`I have 5 years of teaching experience. I’m TEFL Certified, and my classes are...`}
                              // name="teaching_experience"
                              value={tutorsRegisterData.teaching_experience}
                              // onChange={(e) =>
                              //   handleChangeProfileDescription(0, e)
                              // }
                              onChange={(e) => {
                                settutorsRegisterData({
                                  ...tutorsRegisterData,
                                  teaching_experience: e.target.value,
                                });
                              }}
                            />
                            Provide a detailed description of your relevant
                            teaching experience. Include certifications,
                            teaching methodology, education, and subject
                            expertise.
                            {/* {item.alert && ( */}
                            {/* <div className="cvformate_alert">
                              <p>
                                <span>
                                  {" "}
                                  <i
                                    class="fa fa-info-circle"
                                    aria-hidden="true"
                                  ></i>
                                </span>{" "}
                                Don’t include your last name or present your
                                information in a CV format
                              </p>
                            </div> */}
                            {/* )} */}
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      {/* 3 */}
                      <Accordion defaultActiveKey={0} key={2}>
                        <Accordion.Item eventKey={2}>
                          <Accordion.Header>
                            3. Motivate potential students
                          </Accordion.Header>
                          <Accordion.Body>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              placeholder={`Book a trial lesson with me so we can discuss your goals and how I can help you reach them...`}
                              // name="motivate_potential_students"
                              value={
                                tutorsRegisterData.motivate_potential_students
                              }
                              // onChange={(e) =>
                              //   handleChangeProfileDescription(0, e)
                              // }
                              onChange={(e) => {
                                settutorsRegisterData({
                                  ...tutorsRegisterData,
                                  motivate_potential_students: e.target.value,
                                });
                              }}
                            />
                            Encourage students to book their first lesson.
                            Highlight the benefits of learning with you!
                            {/* {item.alert && ( */}
                            <div className="cvformate_alert">
                              <p>
                                <span>
                                  {" "}
                                  <i
                                    class="fa fa-info-circle"
                                    aria-hidden="true"
                                  ></i>
                                </span>{" "}
                                Do not include any information regarding free
                                trial lessons or discounts, or any of your
                                personal contact details
                              </p>
                            </div>
                            {/* )} */}
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      {/* 4 */}
                      <Accordion defaultActiveKey={0} key={3}>
                        <Accordion.Item eventKey={3}>
                          <Accordion.Header>
                            4. Write a catchy headline
                          </Accordion.Header>
                          <Accordion.Body>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              placeholder={`Certified tutor with 5 years of experience`}
                              // name="catchy_headline"
                              value={tutorsRegisterData.catchy_headline}
                              // onChange={(e) =>
                              //   handleChangeProfileDescription(0, e)
                              // }
                              onChange={(e) => {
                                settutorsRegisterData({
                                  ...tutorsRegisterData,
                                  catchy_headline: e.target.value,
                                });
                              }}
                            />
                            Your headline is the first thing students see about
                            you. Make it attention-grabbing, mention your
                            specific teaching language and encourage students to
                            read your full description.
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      {/* <Form>
                  
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
                              <Button
                                onClick={() => removeMonday(index)}
                                className="red-button w-100 mt-3 mb-3"
                                hoverColor="theme-button1"
                                label="Remove"
                              />
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
                              <Button
                                onClick={() => removeTuesday(index)}
                                className="red-button w-100 mt-3 mb-3"
                                hoverColor="theme-button1"
                                label="Remove"
                              />
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
                              <Button
                                onClick={() => removeWednesday(index)}
                                className="red-button w-100 mt-3 mb-3"
                                hoverColor="theme-button1"
                                label="Remove"
                              />
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
                              <Button
                                onClick={() => removeThursday(index)}
                                className="red-button w-100 mt-3 mb-3"
                                hoverColor="theme-button1"
                                label="Remove"
                              />
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
                            <Button
                              onClick={() => removeFriday(index)}
                              className="red-button w-100 mt-3 mb-3"
                              hoverColor="theme-button1"
                              label="Remove"
                            />
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
                            <Button
                              onClick={() => removeSaturday(index)}
                              className="red-button w-100 mt-3 mb-3"
                              hoverColor="theme-button1"
                              label="Remove"
                            />
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
                            <Button
                              onClick={() => removeSunday(index)}
                              className="red-button w-100 mt-3 mb-3"
                              hoverColor="theme-button1"
                              label="Remove"
                            />
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
