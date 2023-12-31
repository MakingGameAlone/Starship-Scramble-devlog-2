import React from 'react';
import './PageHeader.css'

function PageHeader(props) {
  return (
    <div className='pageHeader-container'>
        <div className='background-wrapper'>
            <img className = 'backImage' src={props.src} alt="header background" />
            <div className='backBlurCutter'></div>
        </div>

        <img className= 'frontImage' src={props.src} alt="header front" />

        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
        <hr />
    </div>
  )
}

export default PageHeader