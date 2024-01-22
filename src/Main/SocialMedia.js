import './Main.css';
import './HomePage.css';
import { Link } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import Toolbox from '../Images/Toolbox.png';
import Search from '../Images/Search.png';
import Socials from '../Images/Socials.png';
import Avatar from '../Images/Avatar.png';

const handleInputClick = (setShowOptions, showOptions) => {
    setShowOptions(!showOptions);
  };
  
  function SocialMedia() {
    const [showOptions, setShowOptions] = useState(false);
    const optionsRef = useRef(null);
    const [extendedContent, setExtendedContent] = useState('');
  
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(false);
        setExtendedContent('');
      }
    };
  
    const handleQuestionClick = (content) => {
      if (extendedContent === content) {
        // If clicking on the same question, toggle the extended content
        setExtendedContent('');
      } else {
        setExtendedContent(content);
      }
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, );

  return (
    <div className='Main'>
      <div className='Menu-Top'>
        <div className='Menu-Section'>
            <div className='Logo-Search'>
            <Link to ="/">
        <div className='Logo-Text2'>
              <h1 className='blue'>F</h1>
              <h1 className='red'>r</h1>
              <h1 className='yellow'>o</h1>
              <h1 className='blue'>n</h1>
              <h1 className='green'>c</h1>
              <h1 className='red'>z</h1>
              <h1 className='yellow'>a</h1>
              <h1 className='green'>k</h1>
              </div>
              </Link>
        </div>
        <div className='Input-Wrapper2'>
          <i className='gg-search'></i>
          <input
            placeholder='Search'
            autoComplete='on'
            className='search-input2'
            value=''
            onClick={() => handleInputClick(setShowOptions, showOptions)}
          />
          {showOptions && (
                            <div className='Options2' ref={optionsRef}>
                            {/* Render your 5 options here */}
                            <div className='opcja1' > <Link className='List' to ="/Projects">Projects</Link> </div>
                            <div className='opcja2' > <Link className='List' to ="/Socials">Socials</Link> </div>
                            <div className='opcja2' > <Link className='List' to ="/">Fronczak</Link> </div>
                          </div>
          )}
        </div>
        <div className='Panele-top'>
        <a href='mailto:fronczakdaniel2000@gmail.com'> 
        <img src={Avatar} className='obrazek4' alt='Avatar' />
           </a>
           </div>
        </div>
      </div>
      <div className='Menu-Filter'>
        <div className='Menu-Items'>
            <p className='Menu-Filter-Icons' >  
            <img src={Search} className='FilterIcon' alt='Search' />
            <Link to ="/Main">All</Link> </p>
            <p className='Menu-Filter-Icons' >
            <img src={Toolbox} className='FilterIcon' alt='Toolbox' />
            <Link to ="/Projects">Projects</Link> 
                 </p> 
            <p className='Menu-Filter-Icons'>
            <img src={Socials} className='FilterIcon' alt='Socials' />
            <Link to ="/SocialMedia">Socials</Link> </p>
        </div>
      </div>
      <div className='All-Content'>
        <div className='All-Content-Inside'>
      <p className='All-Result-Time'>
        About 1 result (0.32 seconds)
      </p>
      <div className='All-Result'>
      <div className='All-Result-Container'>
            <a className='hrefek' href='https://daniel-fronczak.carrd.co/'>
                <p>https://daniel-fronczak.carrd.co/</p>
                <h3>Daniel's Social Media</h3>
            </a>
            <p className='description'>List of Daniel's Social medias in one place. </p>
        </div>
      </div>
      </div>
      </div>

    </div>
  );
}
export default SocialMedia;
