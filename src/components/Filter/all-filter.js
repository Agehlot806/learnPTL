import React from 'react'
import { Accordion, Col, Form, Row } from 'react-bootstrap'
import Button from '../../components/Button'
import strings from '../../localzation';
import Sortby from '../Sort By/sort-by';
import Pricefilter from '../price-filter';

function Allfilter(props) {
    const iwanttolearnList = [
        { optionName: "English tutors" },
        { optionName: "Spanish tutors" },
        { optionName: "French tutors" },
        { optionName: "German tutors" },
        { optionName: "Chinese tutors" },
    ];




    return (
        <div className='filter-All'>
            <Button className='filtertext' label={strings.Filter} icon="fa fa-filter" iconPosition="left" />
            <Accordion defaultActiveKey="">
                <Row>
                    <Col lg={3} className='mb-4'>
                        {props?.iwanttolearn && (
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{props?.iwanttolearn}</Accordion.Header>
                                <Accordion.Body>
                                    <div className='filter-options'>
                                        {Array.isArray(props?.iwanttolearnList) && props?.iwanttolearnList.map((option, index) => (
                                            <div key={index} className="form-group form-check">
                                                <input type="checkbox" className="form-check-input" id={`checkbox_${index}`} />
                                                <label className="form-check-label" htmlFor={`checkbox_${index}`}>
                                                    {option?.optionName}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Col>
                    <Col lg={3} className='mb-4'>
                        {props?.Price && (
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>{props.Price}</Accordion.Header>
                                <Accordion.Body>
                                    <Pricefilter />
                                </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Col>
                    <Col lg={3} className='mb-4'>
                        {props?.Countryofbirth && (
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>{props.Countryofbirth}</Accordion.Header>
                                <Accordion.Body>
                                    <div className='filter-options'>
                                        {Array.isArray(props?.countryOptions) && props.countryOptions.map((option, index) => (
                                            <div key={index} className="form-group form-check">
                                                <input type="checkbox" className="form-check-input" id={`checkbox_${index}`} />
                                                <label className="form-check-label" htmlFor={`checkbox_${index}`}>
                                                    {option.optionName}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Col>
                    <Col lg={3} className='mb-4'>
                        {props?.Specialties && (
                            <Accordion.Item eventKey="7">
                                <Accordion.Header>{props.Specialties}</Accordion.Header>
                                <Accordion.Body>
                                    <div className='filter-options'>
                                        {Array.isArray(props?.specialtiesOptions) && props.specialtiesOptions.map((option, index) => (
                                            <div key={index} className="form-group form-check">
                                                <input type="checkbox" className="form-check-input" id={`checkbox_${index}`} />
                                                <label className="form-check-label" htmlFor={`checkbox_${index}`}>
                                                    {option.optionName}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Col>
                    <Col lg={3} className='mb-4'>
                        {props?.alsoSpeaks && (
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>{props.alsoSpeaks}</Accordion.Header>
                                <Accordion.Body>
                                    <div className='filter-options'>
                                        {Array.isArray(props?.alsoSpeaksOptions) && props.alsoSpeaksOptions.map((option, index) => (
                                            <div key={index} className="form-group form-check">
                                                <input type="checkbox" className="form-check-input" id={`checkbox_${index}`} />
                                                <label className="form-check-label" htmlFor={`checkbox_${index}`}>
                                                    {option.optionName}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Col>
                    <Col lg={3} className='mb-4'>
                        {props?.nativeSpeaker && (
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>{props?.nativeSpeaker}</Accordion.Header>
                                <Accordion.Body>
                                    <div className='filter-options'>
                                        <Row>
                                            <Col lg={8}>
                                                <h6>Only English native speakers</h6>
                                                <p>We will only show tutors who teach in their native language</p>
                                            </Col>
                                            <Col lg={4}>
                                                <Form.Check
                                                    type="switch"
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Col>
                    <Col lg={3} className='mb-4'>
                        {props?.tutorcategories && (
                            <Accordion.Item eventKey="12">
                                <Accordion.Header>{props?.tutorcategories}</Accordion.Header>
                                <Accordion.Body>
                                    <div className='filter-options'>
                                        <Row>
                                            <Col lg={8}>
                                                <h6>Only Super tutors</h6>
                                                <p>Only show highly rated and experienced tutors</p>
                                            </Col>
                                            <Col lg={4}>
                                                <Form.Check
                                                    type="switch"
                                                />
                                            </Col>
                                        </Row>
                                        <hr />
                                        <Row>
                                            <Col lg={8}>
                                                <h6>Only professional tutors</h6>
                                                <p>Only show tutors with a teaching certificate or relevant education</p>
                                            </Col>
                                            <Col lg={4}>
                                                <Form.Check
                                                    type="switch"
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Col>
                   
                    <Col lg={3} className='mb-4'>
                        {props?.SearchInstructorName && (<Accordion.Item eventKey="8">
                            <Accordion.Header>{props.SearchInstructorName}</Accordion.Header>
                            <Accordion.Body>
                                <div className='filter-options'>
                                    <div className="form-range">
                                        <input type="search" placeholder="Search" /><i className="fa fa-arrow-right" />
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>)}
                    </Col>
                    <Col lg={3} className='mb-4'>
                        {props?.Type && (<Accordion.Item eventKey="9">
                            <Accordion.Header>{props.Type}</Accordion.Header>
                            <Accordion.Body>
                                <div className='filter-options'>
                                    {Array.isArray(props?.Type) && props.Type.map((option, index) => (
                                        <div key={index} className="form-group form-check">
                                            <input type="checkbox" className="form-check-input" id={`checkbox_${index}`} />
                                            <label className="form-check-label" htmlFor={`checkbox_${index}`}>
                                                {option.optionName}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>)}
                    </Col>
                    <Col lg={3} className='mb-4'>
                        {props?.HourlyRate && (<Accordion.Item eventKey="10">
                            <Accordion.Header>{props.HourlyRate}</Accordion.Header>
                            <Accordion.Body>
                                <div>
                                    <div className="form-range">
                                        <span>Min:</span> <input type="number" placeholder="0" />
                                    </div>
                                    <div className="form-range">
                                        Max: <input type="number" placeholder="99" /><i className="fa fa-arrow-right" />
                                    </div>

                                </div>
                                <div className='filter-options'>
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label" >Free</label>
                                    </div>
                                    <div className="form-group form-check">
                                        <input type="checkbox" className="form-check-input" />
                                        <label className="form-check-label">Paid</label>
                                    </div>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>)}
                    </Col>
                    <Col lg={3} className='mb-4'>
                        {props?.InstructorRating && (
                            <Accordion.Item eventKey="11">
                                <Accordion.Header>{props.InstructorRating}</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor
                                </Accordion.Body>
                            </Accordion.Item>
                        )}
                    </Col>




                </Row>
                <Sortby />
            </Accordion>











        </div>
    )
}

export default Allfilter
