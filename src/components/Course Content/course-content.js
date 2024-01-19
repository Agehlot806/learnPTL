import React, { useState } from 'react';
import { Accordion, Form, ProgressBar } from 'react-bootstrap'

function Coursecontent() {
  const courseContentData = [
    {
      title: 'new Home',
      lectures: '3 lectures',
      videoDuration: '43 sec',
      playlist: [
        { id: 1, title: 'Introduction', time: '00:18' },
        { id: 2, title: 'Section Intro', time: '00:25' },
        { id: 3, title: 'Slide Document', time: '00:25' },
      ],
    },
    {
      title: 'JavaScript Fundamentals',
      lectures: '3 lectures',
      videoDuration: '43 sec',
      playlist: [
        { id: 1, title: 'Values and Variables', time: '00:18' },
        { id: 2, title: 'Block label variables', time: '00:25' },
        { id: 3, title: 'This is pdf document', time: '00:25' },
      ],
    },
    {
      title: 'Developer Skills',
      lectures: '3 lectures',
      videoDuration: '43 sec',
      playlist: [
        { id: 1, title: 'Data Types', time: '00:18' },
        { id: 2, title: 'let, const and var', time: '00:25' },
        { id: 3, title: 'Javscript Scope', time: '00:25' },
      ],
    },

  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const handleRadioChange = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <div className='Course-Content'>
        <div className='d-flex'>
          <div><h4>Course Content</h4></div>
          <div><span>0.00%</span></div>
        </div>
        <ProgressBar striped now={50} />
        <div className="course-watch-right-accordion-wrap custom-scrollbar">
          <Accordion>
            {courseContentData.map((item, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>
                  <h6 className="">{item.title}</h6>
                  <span className="watch-course-title-right-btns d-flex">
                    <span><i className="fa fa-clock-o" /> {item.lectures}</span>
                    <span><i className="fa fa-video-camera" /> {item.videoDuration}</span>
                  </span>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="play-list">
                    {item.playlist.map((playlistItem) => (
                      <div key={playlistItem.id} className="play-list-item d-flex justify-content-between">
                        <div className="play-list-left d-flex">
                          <div>
                            <Form.Check
                              name="group1"
                              type="radio"
                              checked={selectedItem && selectedItem.id === playlistItem.id}
                              onChange={() => handleRadioChange(playlistItem)}
                            />
                          </div>
                          <a href="">
                            <p className="ps-2 mb-0">{playlistItem.title}</p>
                          </a>
                        </div>
                        <div className="play-list-right d-flex">
                          <span className="video-time-count">{playlistItem.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>  
        </div>
      </div>
    </>
  )
}

export default Coursecontent
