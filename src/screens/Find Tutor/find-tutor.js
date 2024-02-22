import React, { useState, useEffect } from "react";
import "../Find Tutor/find-tutor.css";
import Header from "../../directives/Header/header";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import Img5 from "../../assets/images/img/img5.jpg";
import Img6 from "../../assets/images/img/img6.jpg";
import Img7 from "../../assets/images/img/img7.jpg";
import Footer from "../../directives/Footer/footer";
import Allfilter from "../../components/Filter/all-filter";
import TeacherstutorModel from "../../components/models/teachers-tutor-model";
import Button from "../../components/Button";
import Allbg from "../../components/All bg Banner/all-bg";
// import FindgetStarted from "../Home tutors/find-getStarted";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  fetchCountryShow,
  fetchCreateSpeaker,
  fetchCreateTutorCategory,
  fetchLatest,
  fetchRatingShow,
  fetchSpeakShow,
  fetchSpecialtiesShow,
} from "../../redux/action/actionCreators";
import { fetchTutorsShow } from "../../redux/action/actionCreators";
import SendMessage from "../../components/models/send-message";
import BookscheduleSlot from "../../components/models/Book-scheduleSlot";

function Findtutor() {
  const dispatch = useDispatch();
  let { id } = useParams();
  console.log("agayi id : ", id);
  const { products } = useSelector((state) => state.products);
  const { tutors } = useSelector((state) => state.tutors);
  console.log("tutors: ", tutors);
  const { specialties } = useSelector((state) => state.specialties);
  const { speaks } = useSelector((state) => state.speaks);
  const { countrys } = useSelector((state) => state.countrys);
  const { ratings } = useSelector((state) => state.ratings);
  const { speaker } = useSelector((state) => state.createspeaker);
  console.log("speakerrr: ", speaker);
  const [nativeSpeakerSwitch, setNativeSpeakerSwitch] = useState(false);
  const [speakerChecked, setSpeakerChecked] = useState(false);
  const [superTutorsSwitch, setSuperTutorsSwitch] = useState(false);
  const [superTutorsChecked, setSuperTutorsChecked] = useState(false);
  console.log("superTutorsChecked: ", superTutorsChecked);
  const [professionalTutorsSwitch, setProfessionalTutorsSwitch] =
    useState(false);
  const [professionalTutorsChecked, setProfessionalTutorsChecked] =
    useState(false);
  console.log("professionalTutorsChecked: ", professionalTutorsChecked);

  console.log("nativeSpeakerSwitch: ", nativeSpeakerSwitch);

  //   const { createtutor } = useSelector((state) => state.createtutor);
  //   const { createspeaker } = useSelector((state) => state.createspeaker);

  const [currentItems, setCurrentItems] = useState([]);

  useEffect(() => {
    dispatch(fetchLatest(products));
    dispatch(fetchTutorsShow(tutors));
    dispatch(fetchSpecialtiesShow(specialties));
    dispatch(fetchSpeakShow(speaks));
    dispatch(fetchCountryShow(countrys));
    dispatch(fetchRatingShow(ratings));
    // dispatch(fetchCreateTutorCategory(createtutor));
    dispatch(
      fetchCreateTutorCategory({
        superTutors: false,
        professionalTutors: false,
      })
    );
    dispatch(
      fetchCreateSpeaker({
        speaker: false,
      })
    );
  }, [dispatch]);
  // dispatch(fetchCreateSpeaker(createspeaker));

  const [modalShow, setModalShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  const allFindTutor = [
    {
      title: "Valentino M.",
      image: Img7,
      Exprience:
        "Certified TEFL Tutor & Native English Speaker with teaching experience from Florida Atlantic University Greetings! My name is Valentino",
    },
    {
      title: "Johnny Depp",
      image: Img5,
      Exprience:
        "Certified TEFL Tutor & Native English Speaker with teaching experience from Florida Atlantic University Greetings! My name is Valentino",
    },
    {
      title: "Johnny Depp",
      image: Img6,
      Exprience:
        "Certified TEFL Tutor & Native English Speaker with teaching experience from Florida Atlantic University Greetings! My name is Valentino",
    },
    {
      title: "Johnny Depp",
      image: Img5,
      Exprience:
        "Certified TEFL Tutor & Native English Speaker with teaching experience from Florida Atlantic University Greetings! My name is Valentino",
    },
    {
      title: "Johnny Depp",
      image: Img7,
      Exprience:
        "Certified TEFL Tutor & Native English Speaker with teaching experience from Florida Atlantic University Greetings! My name is Valentino",
    },
    {
      title: "Johnny Depp",
      image: Img6,
      Exprience:
        "Certified TEFL Tutor & Native English Speaker with teaching experience from Florida Atlantic University Greetings! My name is Valentino",
    },
    {
      title: "Johnny Depp",
      image: Img5,
      Exprience:
        "Certified TEFL Tutor & Native English Speaker with teaching experience from Florida Atlantic University Greetings! My name is Valentino",
    },
  ];

  const handleCardHover = () => {
    setModalShow(true);
  };

  const handleModalClose = () => {
    setModalShow(false);
  };

  const renderTutorExprience = (Exprience) => {
    const maxCharacters = 90; // Number of characters to show initially

    if (Exprience?.length <= maxCharacters) {
      return <p>{Exprience}</p>; // Show the full Exprience if it's short
    }

    const truncatedExprience = Exprience?.slice(0, maxCharacters);

    return (
      <>
        <p>{truncatedExprience}....</p>
      </>
    );
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  //   const currentItems = products?.slice(indexOfFirstItem, indexOfLastItem);
  // const currentItems = products
  //   ? products?.slice(indexOfFirstItem, indexOfLastItem)
  //   : [];
  const paginatedItems = currentItems?.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    // Initially set the current items to products
    setCurrentItems(products);
  }, [products]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleShow = () => setModalShow(true);
  const handleClose = () => setModalShow(false);
  const [sendMessagesadd, setsendMessagesadd] = React.useState(false);
  const [bookTrial, setBookTrial] = React.useState(false);
  const [selectedSpeaks, setSelectedSpeaks] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState([]);
  const [selectedTutors, setSelectedTutors] = useState([]);
  const [selectedSpecialties, setSelectedSpecialties] = useState([]);
  const handleSpeakCheckboxChange = (speakId) => {
    // Toggle the selected state of the clicked speak
    setSelectedSpeaks((prevSelected) => {
      if (prevSelected.includes(speakId)) {
        return prevSelected.filter((id) => id !== speakId);
      } else {
        return [...prevSelected, speakId];
      }
    });
  };
  const handleCountryCheckboxChange = (country) => {
    // Toggle the selected state of the clicked country
    console.log("country", country);
    setSelectedCountry((prevSelected) => {
      if (prevSelected.includes(country)) {
        return prevSelected.filter((item) => item !== country);
      } else {
        return [...prevSelected, country];
      }
    });
  };
  const handleTutorsCheckboxChange = (tutors) => {
    // Toggle the selected state of the clicked country
    console.log("tutors", tutors);
    setSelectedTutors((prevSelected) => {
      if (prevSelected.includes(tutors)) {
        return prevSelected.filter((item) => item !== tutors);
      } else {
        return [...prevSelected, tutors];
      }
    });
  };
  const handleSpecialtiesCheckboxChange = (specialties) => {
    // Toggle the selected state of the clicked country
    console.log("specialties", specialties);
    setSelectedSpecialties((prevSelected) => {
      if (prevSelected.includes(specialties)) {
        return prevSelected.filter((item) => item !== specialties);
      } else {
        return [...prevSelected, specialties];
      }
    });
  };

  const filteredProducts = products?.filter((product) => {
    // Check if the product meets the conditions for each filter
    const speaksCondition =
      selectedSpeaks.length === 0 || selectedSpeaks.includes(product.speak);
    const tutorsCondition =
      selectedTutors.length === 0 ||
      selectedTutors.includes(product.categories);
    const specialtiesCondition =
      selectedSpecialties.length === 0 ||
      selectedSpecialties.includes(product.specialties);
    const countryCondition =
      selectedCountry.length === 0 || selectedCountry.includes(product.country);

    // Apply additional conditions based on speakerChecked and nativeSpeakerSwitch
    const speakerCondition =
      (speakerChecked && nativeSpeakerSwitch && product.speaker === 1) ||
      (!speakerChecked && true) ||
      (!nativeSpeakerSwitch && product.speaker === 0);

    // Apply additional conditions based on superTutorsChecked and superTutorsSwitch
    const superTutorsCondition =
      (superTutorsChecked && superTutorsSwitch && product.Supertutors === 1) ||
      (!superTutorsChecked && true) ||
      (!superTutorsSwitch && product.Supertutors === 0);

    // Apply additional conditions based on professionalTutorsChecked and professionalTutorsSwitch
    const professionalTutorsCondition =
      (professionalTutorsChecked &&
        professionalTutorsSwitch &&
        product.professionaltutors === 1) ||
      (!professionalTutorsChecked && true) ||
      (!professionalTutorsSwitch && product.professionaltutors === 0);

    // Return true only if all conditions are met
    return (
      speaksCondition &&
      tutorsCondition &&
      specialtiesCondition &&
      countryCondition &&
      speakerCondition &&
      superTutorsCondition &&
      professionalTutorsCondition
    );
  });
  return (
    <>
      <Header />

      <Allbg title="All Tutor" linkTo="/" linkText="Home" />

      {/* <FindgetStarted /> */}
      <section className="section-padding">
        <Container>
          <Allfilter
            iwanttolearnList={tutors}
            countryOptions={countrys}
            alsoSpeaksOptions={speaks}
            specialtiesOptions={specialties}
            iwanttolearn={"I want to learn"}
            Price={"Price"}
            Countryofbirth={"Country of birth"}
            alsoSpeaks={"Also Speaks"}
            Specialties={"Specialties"}
            nativeSpeaker={"Native Speaker"}
            tutorcategories={"Tutor Categories"}
            products={products}
            nativeSpeakerSwitch={nativeSpeakerSwitch}
            setNativeSpeakerSwitch={setNativeSpeakerSwitch}
            speakerChecked={speakerChecked}
            setSpeakerChecked={setSpeakerChecked}
            superTutorsChecked={superTutorsChecked}
            setSuperTutorsChecked={setSuperTutorsChecked}
            professionalTutorsChecked={professionalTutorsChecked}
            setProfessionalTutorsChecked={setProfessionalTutorsChecked}
            superTutorsSwitch={superTutorsSwitch}
            setSuperTutorsSwitch={setSuperTutorsSwitch}
            professionalTutorsSwitch={professionalTutorsSwitch}
            setProfessionalTutorsSwitch={setProfessionalTutorsSwitch}
            selectedSpeaks={selectedSpeaks}
            selectedCountry={selectedCountry}
            selectedTutors={selectedTutors}
            selectedSpecialties={selectedSpecialties}
            handleSpecialtiesCheckboxChange={handleSpecialtiesCheckboxChange}
            handleSpeakCheckboxChange={handleSpeakCheckboxChange}
            handleCountryCheckboxChange={handleCountryCheckboxChange}
            handleTutorsCheckboxChange={handleTutorsCheckboxChange}
          />
        </Container>
      </section>
      <section className="section-padding">
        <Container>
          <div className="filter-cards">
            <Row>
              {filteredProducts &&
                filteredProducts.map((tutor, index) => (
                  <Col lg={4} className="mb-4">
                    <div className="course-cards" key={tutor?.id}>
                      <Link to=""></Link>
                      <img
                        src={
                          "https://storyfy.webzproject.shop/uploads/" +
                          tutor?.image
                        }
                        alt={tutor?.name}
                      />

                      <Row>
                        <Col lg={6}>
                          <h4>{tutor?.name}</h4>
                        </Col>
                        <Col lg={6}>
                          <div className="playvideo-bg">
                            <Link
                              className="play-video"
                              onClick={() => setModalShow(true)}
                              onMouseEnter={handleCardHover}
                            >
                              <i className="fa fa-play" /> Demo Video
                            </Link>
                          </div>
                        </Col>
                      </Row>
                      <p>{renderTutorExprience(tutor?.description)}</p>
                      <p>{tutor?.review} review</p>
                      <p>{tutor?.price}</p>
                      <div>
                        {[...Array(5)].map((_, i) => (
                          <a key={i}>
                            <i
                              // className="fa fa-star"
                              className={`fa fa-star${
                                i < tutor.rating ? "" : "-o"
                              }`}
                              style={{ color: "#ffc014", marginLeft: "4px" }}
                            />
                          </a>
                        ))}
                      </div>
                      <div className="text-center">
                        <Button
                          className="theme-button1 mt-1"
                          hoverColor="theme-button1"
                          label="Book Trial Lesson"
                          onClick={() => setBookTrial(true)}
                        />
                        <BookscheduleSlot
                          show={bookTrial}
                          onHide={() => setBookTrial(false)}
                        />
                        <Button
                          className="theme-button1 mt-1"
                          hoverColor="theme-button1"
                          label="Send Message"
                          onClick={() => setsendMessagesadd(true)}
                        />
                        <SendMessage
                          show={sendMessagesadd}
                          onHide={() => setsendMessagesadd(false)}
                        />
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
            {currentItems &&
              currentItems.map((tutor, index) => (
                <div key={tutor?.id}>
                  <TeacherstutorModel
                    show={modalShow}
                    videourl={
                      "https://storyfy.webzproject.shop/uploads/" + tutor?.video
                    }
                    onHide={() => setModalShow(false)}
                  />
                </div>
              ))}
          </div>
          <div className="pagination-container">
            <ul className="pagination">
              {Array.from({
                length: Math.ceil(allFindTutor.length / itemsPerPage),
              }).map((item, index) => (
                <li key={index} className="page-item">
                  <Link
                    to="#"
                    className="page-link"
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}

export default Findtutor;
