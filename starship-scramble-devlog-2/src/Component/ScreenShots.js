import React from 'react';
import ImageCard from './ImageCard';
import './ScreenShots.css';

function ScreenShots() {
  return (
    <div className='screenshots-container'>
        <h1>Screenshots</h1>
        <h4>Disclaimer: This game is still underdevelopment, don't expect below as final!</h4>

        <div className='cards__container'>
        <div className='cards__wrapper'>
        <ul className='cards__items'>
            <ImageCard
              src={process.env.PUBLIC_URL +'/GameDemo/Demo_15.png'}
              text='Chemical weapons, with a support modules.'
              label='Scrambled ship'
            />
            <ImageCard
              src={process.env.PUBLIC_URL +'/GameDemo/Demo_14.png'}
              text='After each wave, you visit a shop to improve your current ship with resource collected.'
              label='Shopping'
            />
          </ul>

          <ul className='cards__items'>
            <ImageCard
              src= {process.env.PUBLIC_URL +'/GameDemo/Demo_1.png'}
              text='Starting Scene'
              label='Adventure'
            />
            <ImageCard
              src= {process.env.PUBLIC_URL +'/GameDemo/Demo_4.png'}
              text='Ship is equipped with a bunch of connector and a thruster.  '
              label='Build Mode'
            />
            <ImageCard
              src={process.env.PUBLIC_URL +'/GameDemo/Demo_13.png'}
              text='A list of crews with various traits to enhance ship.'
              label='Crew Selection'
            />
          </ul>
          <ul className='cards__items'>
            <ImageCard
              src={process.env.PUBLIC_URL +'/GameDemo/Demo_9.png'}
              text='Drones are released from drone factory to support you.'
              label='Drones'
            />
            <ImageCard
              src={process.env.PUBLIC_URL +'/GameDemo/Demo_8.png'}
              text='Melee weapons that slash nearby enermies.'
              label='Weapons'
            />
            <ImageCard
              src={process.env.PUBLIC_URL +'/GameDemo/Demo_12.png'}
              text='High energy weapons fire at all directions!'
              label='Weapons'
            />
            <ImageCard
              src={process.env.PUBLIC_URL +'/GameDemo/Demo_11.png'}
              text='Vanguard weapons scales with movement speed, charge toward enemies!'
              label='Weapons'
            />
          </ul>
        </div>
      </div>
        </div>
  )
}

export default ScreenShots