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

function Main() {
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
        About 6 results (0.72 seconds)
      </p>
      <div className='All-Result'>
        <div className='All-Result-Container'>
            <a className='hrefek' href='sss'>
                <p>Link /</p>
                <h3> Who is Daniel?  </h3>
            </a>
            <p className='description'> Daniel is a 23 years old student which wants to develop his front-end programming skills.<br></br>     
            In a free time he loves to edit Youtube films where he can give free rein to his creativity... 
            </p>
        </div>
        <div className='Who-Asked'>
        <div className='Who-Asked-Container'>
          <div className='Questions'>
            <h2>People also ask:</h2>
            <div className='Question'>
              <p className='Question-Paragraph' onClick={() => handleQuestionClick('Extended content for question 1')}>
                What are your hobbies?
              </p>
              {extendedContent === 'Extended content for question 1' && (
                <div className='Extended-Content'>
                  <p>I have a deep passion for editing films, and lately,  I've been<br></br>
                    immersing myself in learning SourceFilmmaker to create 3D animations. <br></br>
                    Engaging in activities that highlight creativity or physical activity is likely to bring me joy.             
                  </p>
                </div>
              )}
            </div>
            <div className='Question'>
              <p className='Question-Paragraph' onClick={() => handleQuestionClick('Extended content for question 2')}>
              When can you start work?
              </p>
              {extendedContent === 'Extended content for question 2' && (
                <div className='Extended-Content'>
                  <p>I am prepared and eager to start work immediately. <br></br> We will make a great team together :) </p>
                </div>
              )}
            </div>
            <div className='Question'>
              <p className='Question-Paragraph' onClick={() => handleQuestionClick('Extended content for question 3')}>
              What is your experience in programming?
              </p>
              {extendedContent === 'Extended content for question 3' && (
                <div className='Extended-Content'>
                  <p>
                  I know HTML, CSS pretty good, I had some interaction with JavaScript and PHP, however nowdays I'm learing React.
                    I've embarked on a continuous learning journey in the front-end. I'm studying it at WSB Merito Univeristy in Warsaw and consistently new knowledge.                     
                  </p>
                </div>
              )}
            </div>
            <div className='Question'>
              <p className='Question-Paragraph' onClick={() => handleQuestionClick('Extended content for question 4')}>
              Do you have any contact?
              </p>
              {extendedContent === 'Extended content for question 4' && (
                <div className='Extended-Content'>
                  <p>
                    Yes of course here are some of it:
                  <br></br>
                    Email - <br></br>
                    Instagram - <br></br>
                    Linkedin - <br></br>
                    </p>
                </div>
              )}
            <p className='Question-Paragraph'></p>
            </div>
          </div>
        </div>
      </div>
        <div className='All-Result-Container'>
            <a className='hrefek' href='www.google.pl'>
                <p>https:twojastarapijana.pl</p>
                <h3>Restaurant site template</h3>
            </a>
            <p className='description'>Portfollio which has been made for a first time in a React...  </p>
        </div>
        <div className='All-Result-Container'>
            <a className='hrefek' href='www.google.pl'>
                <p>https:twojastarapijana.pl</p>
                <h3>Designing page</h3>
            </a>
            <p className='description'>Portfollio which has been made for a first time in a React...  </p>
            
        </div>
        <div className='All-Result-Container'>
            <a className='hrefek' href='https://polishtango.github.io/KlanoweczkaIKosteczka-Minecraft/index.html'>
                <p>https://polishtango.github.io/KlanoweczkaIKosteczka-Minecraft/index.html</p>
                <h3>Minecraft server page </h3>
            </a>
            <p className='description'>Daniel created a Minecraft server, and later, 
            he decided to develop an entire webpage<br></br> for his friends. The webpage includes tutorials cinematics and other surprises.
              </p>
            
        </div>
        <div className='All-Result-Container'>
            <a className='hrefek' href='www.google.pl'>
                <p>https:twojastarapijana.pl</p>
                <h3>Hobby </h3>
            </a>
            <p className='description'>Portfollio which has been made for a first time in a React...  </p>
            
        </div>
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
export default Main;
