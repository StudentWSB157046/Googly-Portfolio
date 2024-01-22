import React, { useState, useRef, useEffect } from 'react';
import './HomePage.css';
import Email from '../Images/Email.png';
import Github from '../Images/Github.png';
import {Link} from "react-router-dom";
import Avatar from '../Images/Avatar.png';


export const HomePage = () => {
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef(null);

  const handleInputClick = () => {
    setShowOptions(!showOptions);
  };

  const handleClickOutside = (event) => {
    if (optionsRef.current && !optionsRef.current.contains(event.target)) {
      setShowOptions(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='HomePage'>
      <div className='Top-Menu'>
        <a href='mailto:fronczakdaniel2000@gmail.com'>
          <img src={Email} className='obrazek1' alt='Email' />
        </a>
        <a href='https://github.com/PolishTango'>
          <img src={Github} className='obrazek2' alt='Github' />
        </a>
        <a href='mailto:fronczakdaniel2000@gmail.com'>
        <img src={Avatar} className='obrazek4' alt='Avatar' />
           </a>
      </div>
      <div className='Mid-Menu'>
        <div className='Search-Container'>
          <div className='Input-Container'>
            <div className='Logo-Text'>
              <h1 className='blue'>F</h1>
              <h1 className='red'>r</h1>
              <h1 className='yellow'>o</h1>
              <h1 className='blue'>n</h1>
              <h1 className='green'>c</h1>
              <h1 className='red'>z</h1>
              <h1 className='yellow'>a</h1>
              <h1 className='green'>k</h1>
            </div>
            <div className='Input-Wrapper'>
              <i className='gg-search'></i>
              <input
                placeholder='Search'
                autoComplete='on'
                className='search-input'
                value=''
                onClick={handleInputClick}
              />
              {showOptions && (
                <div className='Options' ref={optionsRef}>
                  {/* Render your 5 options here */}
                  <div className='opcja1' > <Link className='List' to ="/Main">Who is Daniel Fronczak?</Link> </div>
                  <div className='opcja2' > <Link className='List' to ="/Projects">What are Daniel's Projects?</Link> </div>
                  <div className='opcja2' > <Link className='List' to ="/Socials">Does Daniel have Social Media?</Link> </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
      <div className='Lower_Nav'>
        <ul>
          <li> About me </li>
          <li> Projects </li>
          <li> Socials</li>
        </ul>
      </div>
    </div>
  );
};
