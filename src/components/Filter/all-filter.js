import React, { useEffect, useState } from "react";
import { Accordion, Col, Form, Row } from "react-bootstrap";
import Button from "../../components/Button";
import strings from "../../localzation";
import Sortby from "../Sort By/sort-by";
import Pricefilter from "../price-filter";
import { useDispatch } from "react-redux";
import {
  fetchCreateSpeaker,
  fetchCreateTutorCategory,
} from "../../redux/action/actionCreators";

function Allfilter(props) {
  const dispatch = useDispatch();

  let maxPrice = 100;
  const price =
    props.products?.length > 0 &&
    props.products.forEach((product) => {
      const price = parseFloat(product.price);
      if (price > maxPrice) {
        maxPrice = price;
      }
    });
  const [minPriceUpdate, setMinPriceUpdate] = useState(0);

  // Function to update minPriceUpdate
  // const updateMinPrice = (newMinPrice) => {
  //   setMinPriceUpdate(newMinPrice);
  // };
  const handleSwitchClickone = (checked) => {
    props.setSuperTutorsSwitch(checked);
    props.setAllFilterData({
      ...props.allFilterData,
      supertutors: checked ? 1 : 0,
    });
    dispatch(
      fetchCreateTutorCategory({
        user_id: 1,
        superTutors: checked,
        professionalTutors: props.professionalTutorsSwitch,
      })
    );
  };

  const handleSwitchChangetwo = (checked) => {
    props.setProfessionalTutorsSwitch(checked);
    dispatch(
      fetchCreateTutorCategory({
        user_id: 1,
        superTutors: props.superTutorsSwitch,
        professionalTutors: checked,
      })
    );
  };
  const handleSwitchChangeSpeaker = (checked) => {
    console.log("handleSwitchChangeSpeaker: ", checked);
    props.setNativeSpeakerSwitch(checked);
    props.setAllFilterData({
      ...props.allFilterData,
      speaker: checked ? 1 : 0,
    });
    dispatch(
      fetchCreateSpeaker({
        user_id: 1,
        speaker: checked,
      })
    );
  };
  // -----------------------------------------------
  const handleSwitchChangeSpeakerNew = (isChecked) => {
    props.setAllFilterData({
      ...props.allFilterData,
      speaker: isChecked ? 0 : "",
    });
    props.setSpeakerChecked(isChecked);
  };
  //   superTutorsChecked

  // professionalTutorsChecked

  const handleSuperTutorsSwitch = (isChecked) => {
    props.setSuperTutorsChecked(isChecked);

    props.setAllFilterData({
      ...props.allFilterData,
      supertutors: isChecked ? 0 : "",
    });
  };
  const handleProfessionalTutors = (isChecked) => {
    props.setProfessionalTutorsChecked(isChecked);
  };
  return (
    <div className="filter-All">
      <Button
        className="filtertext"
        label={strings.Filter}
        icon="fa fa-filter"
        iconPosition="left"
      />
      <Accordion defaultActiveKey="">
        <Row>
          <Col lg={3} className="mb-4">
            {props?.iwanttolearn && (
              <Accordion.Item eventKey="0">
                <Accordion.Header>{props?.iwanttolearn}</Accordion.Header>
                <Accordion.Body>
                  <div className="filter-options">
                    {Array.isArray(props?.iwanttolearnList) &&
                      props?.iwanttolearnList.map((option, index) => (
                        <div
                          key={index}
                          className="form-group form-check"
                          // onClick={() =>
                          //   handleTutorCategorySelect(option.tutors)
                          // }
                        >
                          {console.log("option.tutors: ", option.tutors)}
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={props.selectedTutors.includes(
                              option.tutors
                            )}
                            onChange={() =>
                              props.handleTutorsCheckboxChange(option.tutors)
                            }
                            // id={`checkbox_${index}`}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`checkbox_${index}`}
                          >
                            {option?.tutors}
                          </label>
                        </div>
                      ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            )}
          </Col>
          <Col lg={3} className="mb-4">
            {props?.Price && (
              <Accordion.Item eventKey="3">
                <Accordion.Header>{props.Price}</Accordion.Header>
                <Accordion.Body>
                  <Pricefilter
                    firstprice={minPriceUpdate}
                    price={maxPrice}
                    onChangePrice={props.onChangePrice}
                  />
                  {/* <Pricefilter price={maxPrice} firstprice={minPriceUpdate} /> */}
                </Accordion.Body>
              </Accordion.Item>
            )}
          </Col>
          <Col lg={3} className="mb-4">
            {props?.Countryofbirth && (
              <Accordion.Item eventKey="5">
                <Accordion.Header>{props.Countryofbirth}</Accordion.Header>
                <Accordion.Body>
                  <div className="filter-options">
                    {Array.isArray(props?.countryOptions) &&
                      props.countryOptions.map((option, index) => (
                        <div
                          key={index}
                          className="form-group form-check"
                          // onClick={() =>
                          //   handleTutorCountrySelect(option.country)
                          // }
                        >
                          <input
                            type="checkbox"
                            className="form-check-input"
                            // id={`checkbox_${index}`}
                            checked={props.allFilterData.country.includes(
                              option.country
                            )}
                            onChange={() =>
                              props.handleCountryCheckboxChange(option.country)
                            }
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`checkbox_${index}`}
                          >
                            {option.country}
                          </label>
                        </div>
                      ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            )}
          </Col>
          <Col lg={3} className="mb-4">
            {props?.Specialties && (
              <Accordion.Item eventKey="7">
                <Accordion.Header>{props.Specialties}</Accordion.Header>
                <Accordion.Body>
                  <div className="filter-options">
                    {Array.isArray(props?.specialtiesOptions) &&
                      props.specialtiesOptions.map((option, index) => (
                        <div
                          key={index}
                          className="form-group form-check"
                          // onClick={() =>
                          //   handleTutorSpecialtiesSelect(option.specialties)
                          // }
                        >
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={props.selectedSpecialties.includes(
                              option.specialties
                            )}
                            onChange={() =>
                              props.handleSpecialtiesCheckboxChange(
                                option.specialties
                              )
                            }
                            // id={`checkbox_${index}`}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`checkbox_${index}`}
                          >
                            {option.specialties}
                          </label>
                        </div>
                      ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            )}
          </Col>
          <Col lg={3} className="mb-4">
            {props?.alsoSpeaks && (
              <Accordion.Item eventKey="6">
                <Accordion.Header>{props.alsoSpeaks}</Accordion.Header>
                <Accordion.Body>
                  <div className="filter-options">
                    {Array.isArray(props?.alsoSpeaksOptions) &&
                      props.alsoSpeaksOptions.map((option, index) => (
                        <div
                          key={index}
                          className="form-group form-check"
                          // onClick={() => handleTutorSpeakSelect(option.speak)}
                        >
                          <input
                            type="checkbox"
                            className="form-check-input"
                            checked={props.selectedSpeaks.includes(
                              option.speak
                            )}
                            onChange={() =>
                              props.handleSpeakCheckboxChange(option.speak)
                            }

                            // id={`checkbox_${index}`}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`checkbox_${index}`}
                          >
                            {option.speak}
                          </label>
                        </div>
                      ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            )}
          </Col>
          <Col lg={3} className="mb-4">
            {props?.nativeSpeaker && (
              <Accordion.Item eventKey="1">
                <Accordion.Header>{props?.nativeSpeaker}</Accordion.Header>
                <Accordion.Body>
                  <div className="filter-options">
                    <Row>
                      <>
                        <Col lg={2}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            onChange={(e) =>
                              handleSwitchChangeSpeakerNew(e.target.checked)
                            }
                            checked={props.speakerChecked}
                          />
                        </Col>
                        <Col lg={10}>
                          <h6>Native speakers</h6>
                        </Col>

                        {props.speakerChecked && (
                          <>
                            <Col lg={8}>
                              <h6>Only English native speakers</h6>
                              <p>
                                We will only show tutors who teach in their
                                native language
                              </p>
                            </Col>
                            <Col lg={4}>
                              <Form.Check
                                type="switch"
                                onChange={(e) =>
                                  handleSwitchChangeSpeaker(e.target.checked)
                                }
                                id="nativeSpeakerSwitch"
                                checked={props.nativeSpeakerSwitch}
                              />
                            </Col>
                          </>
                        )}
                      </>
                    </Row>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            )}
          </Col>
          <Col lg={3} className="mb-4">
            {props?.tutorcategories && (
              <Accordion.Item eventKey="12">
                <Accordion.Header>{props?.tutorcategories}</Accordion.Header>
                <Accordion.Body>
                  <div className="filter-options">
                    <Row>
                      <>
                        <Col lg={2}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            onChange={(e) =>
                              handleSuperTutorsSwitch(e.target.checked)
                            }
                            checked={props.superTutorsChecked}
                          />
                        </Col>
                        <Col lg={10}>
                          <h6>Only Super tutors</h6>
                        </Col>
                        {props.superTutorsChecked && (
                          <>
                            <Col lg={8}>
                              <h6>Super tutors</h6>
                              <p>
                                Only show highly rated and experienced tutors
                              </p>
                            </Col>
                            <Col lg={4}>
                              <Form.Check
                                type="switch"
                                onClick={(e) =>
                                  handleSwitchClickone(e.target.checked)
                                }
                                id="superTutorsSwitch"
                                checked={props.superTutorsSwitch}
                              />
                            </Col>
                          </>
                        )}
                      </>
                    </Row>
                    <hr />
                    <Row>
                      <>
                        <Col lg={2}>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            onChange={(e) =>
                              handleProfessionalTutors(e.target.checked)
                            }
                            checked={props.professionalTutorsChecked}
                          />
                        </Col>
                        <Col lg={10}>
                          <h6>Only Experience tutors</h6>
                        </Col>
                        {props.professionalTutorsChecked && (
                          <>
                            <Col lg={8}>
                              <h6>Experience tutors</h6>
                              <p>
                                Only show tutors with a teaching certificate or
                                relevant education
                              </p>
                            </Col>
                            <Col lg={4}>
                              <Form.Check
                                type="switch"
                                onChange={(e) =>
                                  handleSwitchChangetwo(e.target.checked)
                                }
                                id="professionalTutorsSwitch"
                                checked={props.professionalTutorsSwitch}
                              />
                            </Col>
                          </>
                        )}
                      </>
                    </Row>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            )}
          </Col>

          <Col lg={3} className="mb-4">
            {props?.SearchInstructorName && (
              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  {props.SearchInstructorName}
                </Accordion.Header>
                <Accordion.Body>
                  <div className="filter-options">
                    <div className="form-range">
                      <input type="search" placeholder="Search" />
                      <i className="fa fa-arrow-right" />
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            )}
          </Col>
          <Col lg={3} className="mb-4">
            {props?.Type && (
              <Accordion.Item eventKey="9">
                <Accordion.Header>{props.Type}</Accordion.Header>
                <Accordion.Body>
                  <div className="filter-options">
                    {Array.isArray(props?.Type) &&
                      props.Type.map((option, index) => (
                        <div key={index} className="form-group form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id={`checkbox_${index}`}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`checkbox_${index}`}
                          >
                            {option.optionName}
                          </label>
                        </div>
                      ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            )}
          </Col>
          <Col lg={3} className="mb-4">
            {props?.HourlyRate && (
              <Accordion.Item eventKey="10">
                <Accordion.Header>{props.HourlyRate}</Accordion.Header>
                <Accordion.Body>
                  <div>
                    <div className="form-range">
                      <span>Min:</span> <input type="number" placeholder="0" />
                    </div>
                    <div className="form-range">
                      Max: <input type="number" placeholder="99" />
                      <i className="fa fa-arrow-right" />
                    </div>
                  </div>
                  <div className="filter-options">
                    <div className="form-group form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label className="form-check-label">Free</label>
                    </div>
                    <div className="form-group form-check">
                      <input type="checkbox" className="form-check-input" />
                      <label className="form-check-label">Paid</label>
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            )}
          </Col>
          <Col lg={3} className="mb-4">
            {props?.InstructorRating && (
              <Accordion.Item eventKey="11">
                <Accordion.Header>{props.InstructorRating}</Accordion.Header>
                <Accordion.Body>Lorem ipsum dolor</Accordion.Body>
              </Accordion.Item>
            )}
          </Col>
        </Row>
        {/* Display filtered products */}
        {/* {filteredProducts.map((product) => (
          <div key={product.id}>
            console.log('aja: ', product);
            <h1>new</h1>
            <h4>{product.name}</h4>
          </div>
        ))} */}
        {/* Display other product details */}
        <Sortby />
      </Accordion>
    </div>
  );
}

export default Allfilter;
