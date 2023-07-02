import React from 'react'
import './Footer.css'
import MediaCard from './MediaCard'
import { Button } from './Button'

function Footer() {
    return (
        <div className='footer-container'>
            <h1>More Starship Scrambler </h1>
            <div className='social-container'>
                <MediaCard className = 'mediaCard'
                    src={process.env.PUBLIC_URL + '/SocialMedia/discord.png'}
                    text='Discord'
                    path='https://discord.gg/xAtCbMC9'
                />
                <MediaCard
                    src={process.env.PUBLIC_URL + '/SocialMedia/youtube.png'}
                    text='Youtube'
                    path='https://www.youtube.com/channel/UCsMONZZc_lNNiyVfAmqPEJg'
                />
            </div>
            <div className='WishlistButton'>Wish list</div>
        </div>
    )
}

export default Footer