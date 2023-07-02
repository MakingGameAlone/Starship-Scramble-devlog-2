import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import haha from '../'

function HeroSection() {
  return (

    <div className='hero-container'>
      <div className='illustration'>
      <img src={process.env.PUBLIC_URL +'/images/GameIllustration_StarshipScramble.jpg'} alt="Game illustration" />
      </div>
      <h1>ODYSSEY AWAITS</h1>
      <p>Starship Scramble, where dreams take steam.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          WISH LIST
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;