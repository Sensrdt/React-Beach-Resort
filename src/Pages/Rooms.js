import React from 'react'
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import Banner from '../components/Banner';
import RoomContainer from "../components/RoomContainer"
export default function Rooms() {
    return (
        <>
            <Hero hero = "roomsHero">
                <Banner title="Our rooms">
                    <Link to='/React-Beach-Resort' className = 'btn-primary'>
                        Return Home
                    </Link>
                </Banner>
            </Hero>
            <section>
                <RoomContainer/>
            </section>
        </>
    )
}
