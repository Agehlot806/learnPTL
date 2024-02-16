import React, { useState } from 'react'
import { Col, OverlayTrigger, Row, Tab, Tabs, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Scheduleslot() {
    const [currentDate, setCurrentDate] = useState(new Date());
    console.log('currentDate: ', currentDate);

    const getWeekDates = (date) => {
        const weekStart = new Date(date);
        weekStart.setDate(date.getDate() - date.getDay());
        const weekEnd = new Date(date);
        weekEnd.setDate(date.getDate() - date.getDay() + 1);
        return { start: weekStart, end: weekEnd };
    };

    const handlePreviousWeek = () => {
        const previousWeek = new Date(currentDate);
        previousWeek.setDate(currentDate.getDate() - 1); // Decrease date by 1 day
        setCurrentDate(previousWeek);
    };
    
    const handleNextWeek = () => {
        const nextWeek = new Date(currentDate);
        nextWeek.setDate(currentDate.getDate() + 1); // Increase date by 1 day
        setCurrentDate(nextWeek);
    };

    const { start, end } = getWeekDates(currentDate);

    const isToday = (date) => {
        const today = new Date();
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    };

    return (
        <>
            <div className='Schedule-box'>
                <h3>Book Your Schedule Time</h3>
                {/* <p>Feb 8–14, 2024</p> */}
                <div className='pro-next-btn'>
                    <button onClick={handlePreviousWeek} disabled={isToday(currentDate)}>Previous</button>
                    <span>{currentDate.toLocaleDateString()}</span>
                    <button onClick={handleNextWeek}>Next</button>
                </div>
                <Tabs
                    defaultActiveKey="Sunday"
                    transition={false}
                    id="noanim-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="Sunday" title="Sunday">
                        <Row>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="Monday" title="Monday">
                        <Row>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>

                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>

                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                        </Row>
                    </Tab>
                    <Tab eventKey="Tuesday" title="Tuesday">
                        <Row>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>
                            <Col lg={2}>
                                <div className='slot-time-content'>
                                    <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Book Available Time</Tooltip>}>
                                        <h6><Link to="/checkout">10:00-11:00</Link></h6>
                                    </OverlayTrigger>
                                </div>
                            </Col>

                        </Row>
                    </Tab>
                    <Tab eventKey="Wednesday" title="Wednesday">
                        No data.
                    </Tab>
                    <Tab eventKey="Thursday" title="Thursday">
                        No data.
                    </Tab>
                    <Tab eventKey="Friday" title="Friday">
                        No data.
                    </Tab>
                    <Tab eventKey="Saturday" title="Saturday">
                        No data.
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default Scheduleslot
