import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import defaultimages from '../images/room-1.jpeg'
import PropTypes from "prop-types"
export default function Room  ({room}) {
   // console.log(room.images[0]);
    
    const { name, slug, images, price} = room;
    
        return (
            <article className="room">
                <div className="img-container" >
                    <img src = {images[0] || defaultimages} alt="single room"/>
                        <div className="price-top">
                            <h1> ₹{ price }</h1>
                        </div>
                        <Link to={`/Room/${slug}`} className="btn-primary room-link">
                            Features
                        </Link>
                </div>
                <p className="room-info">{name}</p>
            </article>
        );
    
}

Room.propTypes = {
    room : PropTypes.shape({
        name : PropTypes.string.isRequired,
        slug : PropTypes.string.isRequired,
        images : PropTypes.arrayOf(PropTypes.string).isRequired,
        price : PropTypes.number.isRequired,
    })
}
