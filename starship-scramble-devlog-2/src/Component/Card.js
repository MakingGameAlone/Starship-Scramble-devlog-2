import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card(props) {
  return (
    <>
    <li className='cards_items'>
      <Link className='cards__link' to={props.path}>
        <figure className='cards__pic-wrap' data-category={props.label}>
          <img
            className='cards__img'
            alt='feature icon'
            src={props.src}
          />
        </figure>

        <div className='cards__info'>
          <h5 className='cards__text'>{props.text}</h5>
          <p>{props.description}</p>
        </div>
        
      </Link>
    </li>
  </>
  )
}

export default Card