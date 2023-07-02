import React from 'react';
import './Overview.css'

function Overview() {
  return (
    <>
    <div className='overview-container'>
    <img src={process.env.PUBLIC_URL +'/images/GameUIIcon/GameUIIcon_website_About.png'} alt="Game illustration" /> 
      <h1>About</h1>
      <p>Starship Scramble is a hand drawn sidescroll arena shooter roguelike set in a far far beyond the future.
         Take the helm of your custom-ship building with various modules, weapons, crews and tune-ups to traverse the universe in search of riches.
         </p>

    </div>
    </>
  )
}

export default Overview