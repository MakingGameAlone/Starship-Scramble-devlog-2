import React from 'react';
import { Link } from 'react-router-dom';
import './MediaCard.css'

function MediaCard(props) {
  return (
    <>
    <li className='media__item'>
      <Link className='media__item__link' to={props.path}>
        <figure className='media__item__pic-wrap'>
          <img
            className='media__item__img'
            alt='Social Media'
            src={props.src}
          />
        </figure>
        <div className='Media__item__info'>
          <h5 className='Media__item__text'>{props.text}</h5>
        </div>
      </Link>
    </li>
  </>
  )
}

export default MediaCard