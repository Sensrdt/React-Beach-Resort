import React, { Component } from 'react'
import defaultImg from '../images/room-1.jpeg';
import  Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../context';
import StyleComponents from '../components/StyleComponents';
import { log } from 'util';

// Have every thing from slug
export default class SingleRoom extends Component {
    constructor(props){
        super(props)
        console.log(this.props);
        
        this.state = {
            slug : this.props.match.params.slug,
            defaultImg
        };
    }
    // Rendering the component 
    static contextType = RoomContext;
    render() {
        const { getRoom } =  this.context;
        // Accessing the function getRoom from context.js
        const room = getRoom(this.state.slug);
        if (!room){
            return (
                <div className="error">
                    <h3> No such room found...</h3>
                    <Link to="/rooms" className="btn-primary">
                        Back to rooms
                    </Link>
                </div>
            );
        }
        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
          } = room;
        return (
            <>
                <StyleComponents img={images[0]}>
                    <Banner title = {room.name}
                    subtitle = "">
                        <Link to = '/' className="btn-primary">
                        our rooms
                        </Link>
                    </Banner> 
                </StyleComponents>
                <section className="single-room">
                    <div className="single-room-images">
                        {images.map((item, index) => {
                            console.log(item);
                            console.log(index);
                            console.log(capacity);
                            /*
                                index ==> item
                                0 ==> room-8
                                1 ==> details-2
                                2 ==> details-3
                                3 ==> details-4
                            */
                            return <img key = {index} src={item} alt={name}/>
                        })}
                    </div>
                     <div className="single-room-info">
                         <article className="desc">
                             <h3>details</h3>
                             <p>{description}</p>
                         </article>
                         <article className="info">
                             <h3>info</h3>
                             <h6>price : ₹{price}</h6>
                             <h6>size : {size} SPF</h6>
                             <h6>
                                 max capacity : {
                                     capacity > 1 ? `${capacity} people` : `${capacity} person`
                                 }
                             </h6>
                             <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                             <h6>{breakfast ? "Breakfast is free" :
                             "Breakfast is not free"} </h6>
                         </article>
        
                     </div>
                </section>
                <section className="room-extras">
                        <h6>extras</h6>
                        <ul className="extras">
                            {extras.map((item, index)=>{
                                return <li key={index} >{item}</li>
                            })}
                        </ul>
                </section>
            </>
        );
    } 
}
