import React from 'react'
import './card.scss'

const Card = ({imageCard, titleCard, textCard}) => {

    return (
        <div className='card-container'>
            <div className='card-header'>
                <img src={imageCard} alt='card' width='100%'/>
            </div>
            <div className='card-body'>
                <span className='title-card'>{titleCard}</span>
                <span className='text-card'>{textCard}</span>
            </div>
        </div>
    )
}

export default Card