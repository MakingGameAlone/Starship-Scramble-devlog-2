import React from 'react'
import './Features.css'
import Card from './Card'

function Features() {
  return (
    <div className='feature-container'>
        <div className='column'>
        <Card 
              src = {process.env.PUBLIC_URL +'/images/GameUIIcon/GameUIIcon_website_BuildMode2.png'}
              text='Ship Building'
              label='Adventure'
              path='/feature'
              description ='Combine multiple modules, weapons and other upgrades to build an invincible ship.'
            />

        <Card
              src={process.env.PUBLIC_URL +'/images/GameUIIcon/GameUIIcon_website_Crew2.png'}
              text='Crews'
              label='Adventure'
              path='/feature'
              description ='Rescue people and recruit them as crews, increase ship power.'
            />

        <Card
              src={process.env.PUBLIC_URL +'/images/GameUIIcon/GameUIIcon_website_Collection2.png'}
              text='Collection & Progression'
              label='Adventure'
              path='/feature'
              description ='Collect resource and unlock new modules and buildings as game progressed.'
            />
        </div>
        <div className='column'>
        <Card
              src={process.env.PUBLIC_URL +'/images/GameUIIcon/GameUIIcon_website_Module2.png'}
              text='Modules & Weapons'
              label='Adventure'
              path='/feature'
              description ='Connectors, power generators, thrusters, barrier, shield generators and more!!!'
            />

        <Card
              src={process.env.PUBLIC_URL +'/images/GameUIIcon/GameUIIcon_website_TuneUp2.png'}
              text='Tune-ups'
              label='Adventure'
              path='/feature'
              description ='Combine basic tune-ups to form Advanced items and improve Weapon modules further.'
            />
        </div>
    </div>
  )
}

export default Features