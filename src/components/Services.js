import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} 
from "react-icons/fa";

export default class Services extends Component {
    // declaring all the items with in the parent services 
    state = {
        services : [
            {
                icon : <FaCocktail/>,
                title : "Free Cocktails",
                info : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            },
            {
                icon : <FaHiking/>,
                title : "FaHiking",
                info : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            },
            {
                icon : <FaShuttleVan/>,
                title : "Free FaShuttleVan",
                info : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            },
            {
                icon : <FaBeer/>,
                title : "Free FaBeer",
                info : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
            }
            
        ]
    }
    render() {
        return (
            <section className = "services">
                
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) =>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
                
            </section>
        )
    }
}
