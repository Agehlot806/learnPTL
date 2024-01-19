import React from 'react';
import { Link } from 'react-router-dom';

const Allbg = ({ title, linkTo, linkText, imageUrl, profileSetting }) => {
  return (
    <div className='gradient-bg'>
      <div className='overlay-bg'>
        <div className='all-bg'>
          <h1>{title} {imageUrl && <img src={imageUrl} alt="Image" />}</h1>
          <Link to={linkTo}>{linkText}</Link>
          {profileSetting ? (
            <>
              <span>/ {profileSetting}</span>
            </>
          ) : (
            <span>/ {title}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Allbg;
