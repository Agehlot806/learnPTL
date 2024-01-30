import React, { useState, useEffect } from "react";
import "../Find Tutor/find-tutor.css";
import Header from "../../directives/Header/header";
import { Link } from "react-router-dom";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import Img5 from "../../assets/images/img/img5.jpg";
import Img6 from "../../assets/images/img/img6.jpg";
import Img7 from "../../assets/images/img/img7.jpg";
import Footer from "../../directives/Footer/footer";
import Allfilter from "../../components/Filter/all-filter";
import TeacherstutorModel from "../../components/models/teachers-tutor-model";
import Button from "../../components/Button";
import Allbg from "../../components/All bg Banner/all-bg";
import FindgetStarted from "../Home tutors/find-getStarted";
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

function Findtutor() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const { tutors } = useSelector((state) => state.tutors);
  const { specialties } = useSelector((state) => state.specialties);
  const { speaks } = useSelector((state) => state.speaks);
  const { countrys } = useSelector((state) => state.countrys);
  const { ratings } = useSelector((state) => state.ratings);
  //   const { createtutor } = useSelector((state) => state.createtutor);
  //   const { createspeaker } = useSelector((state) => state.createspeaker);

  console.log("ratings: ", ratings);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  // Function to receive filtered products from Allfilter component
  const handleFilterChange = (filtered, products) => {
    // setFilteredProducts(filtered);
    if (filteredProducts == tutors) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(filtered);
    }
  };

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

  const iwanttolearnList = [
    { optionName: "English tutors" },
    { optionName: "Spanish tutors" },
    { optionName: "French tutors" },
    { optionName: "German tutors" },
    { optionName: "Chinese tutors" },
  ];

  const countryOptions = [
    { optionName: "India" },
    { optionName: "United States of America" },
    { optionName: "United Kingdom" },
    { optionName: "Canada" },
    { optionName: "Australia" },
    { optionName: "Afghanistan" },
    { optionName: "Åland Islands" },
    { optionName: "Eritrea" },
    { optionName: "Ghana" },
    { optionName: "Maldives" },
    { optionName: "New Zealand" },
    { optionName: "Sri Lanka" },
  ];

  const alsoSpeaksOptions = [
    { optionName: "Albanian" },
    { optionName: "Hindi" },
    { optionName: "English" },
    { optionName: "Chinese (Mandarin)" },
    { optionName: "Farsi" },
    { optionName: "Italian" },
    { optionName: "Punjabi" },
    { optionName: "Russian" },
    { optionName: "Tamil" },
  ];

  const specialtiesOptions = [
    { optionName: "Business English" },
    { optionName: "English for beginners" },
    { optionName: "English for kids" },
    { optionName: "English for traveling" },
    { optionName: "English Literature" },
    { optionName: "Australian English" },
    { optionName: "English for ADHD students" },
    { optionName: "Ap english language & composition" },
  ];

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
  //   const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  // const  currentItems = products
  //   ? products.slice(indexOfFirstItem, indexOfLastItem)
  //   : [];
  const paginatedItems = currentItems.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    // Initially set the current items to products
    setCurrentItems(products);
  }, [products]);

  useEffect(() => {
    // Update current items when filters change
    setCurrentItems(filteredProducts.length > 0 ? filteredProducts : products);
  }, [filteredProducts, products]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Header />

      <Allbg title="Find Tutor" linkTo="/" linkText="Home" />

      <FindgetStarted />
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
            onFilterChange={handleFilterChange}
            products={products}
            filteredProducts={filteredProducts}
          />
        </Container>
      </section>
      <section className="section-padding">
        <Container>
          <div className="filter-cards">
            {/* <label>
              Filter 1
              <input
                type="checkbox"
                checked={filter1}
                onChange={handleFilter1Change}
              />
            </label>

            <label>
              Filter 2
              <input
                type="checkbox"
                checked={filter2}
                onChange={handleFilter2Change}
              />
            </label>

            <ul>{generateItemList()}</ul> */}
            <Row>
              {paginatedItems &&
                paginatedItems.map((tutor, index) => (
                  <Col lg={4} className="mb-4">
                    <div className="course-cards" key={tutor?.id}>
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
                        />
                        <Button
                          className="theme-button1 mt-1"
                          hoverColor="theme-button1"
                          label="Send Message"
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
