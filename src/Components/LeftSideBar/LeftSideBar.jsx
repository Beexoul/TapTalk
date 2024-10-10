import React from 'react';
import './LeftSideBar.css';
import assets from '../../assets/assets';
import { useNavigate } from 'react-router-dom';

const LeftSideBar = () => {

const navigate = useNavigate();

  return (
    <div>
      <div className="ls">
        <div className="ls-top">
          <div className="ls-nav">
            <img src={assets.logo} className='logo' alt="Company Logo" />
            <div className="menu" aria-label="Menu">
              <img src={assets.menu_icon} className='img' alt="Menu Icon" />
               <div className="sub-menu">
                <p onClick={() =>navigate('/profile') } >Edit Profile</p>
                <hr />
                <p>Logout</p>
               </div>
            </div>
          </div>
          <div className="ls1">
            <div className="ls-search">
              <img src={assets.search_icon} className='img' alt="Search Icon" />
              <input type="text" placeholder='Search here' aria-label="Search input" />
            </div>
          </div>
          <div className="ls-list">
            {Array(12).fill("").map((_, index) => (
              <div key={index} className="friends">
                <img src={assets.profile_img} alt="Profile" />
                <div>
                  <p>Safal Neupane</p>
                  <span>Hello, how are you?</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideBar;
