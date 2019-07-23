import React from 'react'
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import Banner from '../components/Banner';
export default function Error() {
    return (
        <Hero>
            <Banner title = "404" subtitle="page not found">
                <Link to='/React-Beach-Resort' className='btn-primary'>
                    Return Back
                </Link>
            </Banner>
        </Hero>
    )
}
