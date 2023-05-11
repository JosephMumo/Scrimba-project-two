import React from 'react';
import path from './path.png'

function Main(props) {
    return (
    
        <div className='card'>
            <img src={props.imageUrl} alt='img' />
            <div className='text-box'>
                <div className='location'>
                    <img src={path} alt='path' />
                    <h4>{props.location}</h4>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p><strong>{props.startDate} - {props.endDate}</strong></p>
                <p>{props.description}</p>
            </div>
        </div>
        
    )
}
export default Main;