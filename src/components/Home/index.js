import React from 'react';
import CardCarousel from '../coroesel';
import './index.css'

import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";



const Home = () => {
  const cards = [
    <div>Card 1 Content</div>,
    <div>Card 2 Content</div>,
    // Add more cards as needed
  ];

  return (
    <div className='main-container-home'>
        <div className='header-sizing'>
            <CgProfile className='icons-sizing' />
            <GiHamburgerMenu className  ='icons-sizing'/>
       </div>
       <h1 className='content-heading-home'>Hi! Tushar</h1>
       <CardCarousel cards={cards} />
       <div className='white-card'>
          <span className='new-badge'>New</span>
       </div>
       <p className='context'>what do you want to learn today Tushar?</p>
    </div>

  );
};

export default Home;
