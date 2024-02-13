import React, { useState } from 'react'
import Header from '../../../directives/Header/header'
import Footer from '../../../directives/Footer/footer'
import { Col, Container, Row, Tab, Tabs } from 'react-bootstrap'
import Img5 from '../../../assets/images/img/img3.jpg'
import Button from '../../../components/Button'
import strings from '../../../localzation'
import '../messages/message.css'
import { Link } from 'react-router-dom'

function Message() {

    return (
        <>
            <Header /><section className='section-padding'></section>
            <section className='section-padding'>
                <Container>
                    <div className="container">
                        <div className="row clearfix">
                            <div className="col-lg-12">
                                <div className="card chat-app">
                                    <div id="plist" className="people-list">
                                        <div className="d-grid gap-2">
                                            <button className="btn btn-outline-secondary"><i className="fa fa-user-plus" /> Invite someone</button>
                                        </div>
                                        <div className="input-group mt10">
                                            <span className="input-group-text"><i className="fa fa-search" /></span>
                                            <input type="text" className="form-control" placeholder="Search..." />
                                        </div>
                                        <ul className="list-unstyled chat-list mt-2 mb-0">
                                            <li className="clearfix active">
                                                <img src="https://w7.pngwing.com/pngs/821/381/png-transparent-computer-user-icon-peolpe-avatar-group.png" alt="avatar" />
                                                <div className="about">
                                                    <div className="name">All</div>
                                                    <div className="status"> <i className="fa fa-circle online" /> online 5 </div>
                                                </div>

                                            </li>
                                            <li className="clearfix">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="avatar" />
                                                <div className="about">
                                                    <div className="name">Aiden Chavez</div>
                                                    <div className="status"> <i className="fa fa-circle online" /> online </div>
                                                </div>
                                            </li>
                                            <li className="clearfix">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                                                <div className="about">
                                                    <div className="name">Mike Thomas</div>
                                                    <div className="status"> <i className="fa fa-circle online" /> online </div>
                                                </div>

                                            </li>
                                            <li className="clearfix">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                                                <div className="about">
                                                    <div className="name">Christian Kelly</div>
                                                    <div className="status"> <i className="fa fa-circle online" /> online </div>
                                                </div>

                                            </li>
                                            <li className="clearfix">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar" />
                                                <div className="about">
                                                    <div className="name">Monica Ward</div>
                                                    <div className="status"> <i className="fa fa-circle online" /> online </div>
                                                </div>

                                            </li>
                                            <li className="clearfix">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="avatar" />
                                                <div className="about">
                                                    <div className="name">Dean Henry</div>
                                                    <div className="status"> <i className="fa fa-circle online" /> online </div>
                                                </div>

                                            </li>
                                        </ul>
                                    </div>
                                    <div className="chat">
                                        <div className="chat-header clearfix">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <a data-toggle="modal" data-target="#view_info">
                                                        <img src="https://w7.pngwing.com/pngs/821/381/png-transparent-computer-user-icon-peolpe-avatar-group.png" alt="avatar" />
                                                    </a>
                                                    <div className="chat-about">
                                                        <h6 className="m-b-0">Public chat group</h6>
                                                        <small>Participants: 5</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-history">
                                            <ul className="m-b-0">
                                                <li className="clearfix">
                                                    <div className="message-data text-end">
                                                        <span className="message-data-time">10:10 AM, Today</span>
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="avatar" />
                                                    </div>
                                                    <div className="message other-message float-right">
                                                        Hi Monica, how are you? How is the project coming along?
                                                        <div className="about-buttons mt5">
                                                            <button className="btn btn-outline-secondary btn-sm mr5"><i className="fa fa-trash" /></button>
                                                            <button className="btn btn-outline-secondary btn-sm mr5"><i className="fa fa-paste" /></button>
                                                            <button className="btn btn-outline-secondary btn-sm mr5"><i className="fa fa-volume-up" /></button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="clearfix">
                                                    <div className="message-data">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar" />
                                                        <span className="message-data-time">10:12 AM, Today</span>
                                                    </div>
                                                    <div className="message my-message">
                                                        Are we meeting today?
                                                        <div className="about-buttons mt5">
                                                            <button className="btn btn-outline-secondary btn-sm mr5"><i className="fa fa-trash" /></button>
                                                            <button className="btn btn-outline-secondary btn-sm mr5"><i className="fa fa-paste" /></button>
                                                            <button className="btn btn-outline-secondary btn-sm mr5"><i className="fa fa-volume-up" /></button>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="clearfix">
                                                    <div className="message-data">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar8.png" alt="avatar" />
                                                        <span className="message-data-time">10:15 AM, Today</span>
                                                    </div>
                                                    <div className="message my-message">
                                                        Project has been already finished and I have results to show you.
                                                        <div className="about-buttons mt5">
                                                            <button className="btn btn-outline-secondary btn-sm mr5"><i className="fa fa-trash" /></button>
                                                            <button className="btn btn-outline-secondary btn-sm mr5"><i className="fa fa-paste" /></button>
                                                            <button className="btn btn-outline-secondary btn-sm mr5"><i className="fa fa-volume-up" /></button>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="chat-message clearfix">
                                            <div className="input-group mb-0">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text"><i className="fa fa-comments-o" /></span>
                                                    <textarea className="form-control" placeholder="Enter text here..." rows={1} defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="mt10">
                                                {/* <button className="btn btn-outline-secondary btn-sm"><i className="fa fa-smile" /></button> */}
                                                <button className="btn btn-outline-secondary btn-sm"><i className="fa fa-paperclip" /></button>
                                                <button className="btn btn-outline-secondary btn-sm"><i className="fa fa-microphone-slash" /></button>
                                                <button className="btn btn-outline-secondary btn-sm"><i className="fa fa-paste" /></button>
                                                <button className="btn btn-outline-secondary btn-sm"><i className="fa fa-trash" /></button>
                                                <button className="btn btn-outline-secondary btn-sm float-right"><i className="fa fa-paper-plane" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
            <Footer />
        </>
    )
}

export default Message
