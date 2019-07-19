import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'; 
import {Link} from 'react-router-dom'
import Services from '../components/Services';
import FeaturedRoom from '../components/FeaturedRoom';
export default function Home() { 
    return (
        <>
        <Hero hero="defaultHero">
            <Banner title = "Luxurious Rooms"
            subtitle = "abc xyz uvwxyz for Rs.299">
                <Link to = '/Room' className="btn-primary">
                our rooms
                </Link>
            </Banner> 
        </Hero>
        <Services />
        <FeaturedRoom/>
       </> 
       
    )
}
