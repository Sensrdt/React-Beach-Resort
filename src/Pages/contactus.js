import React from 'react'
import Hero from '../components/Hero';
import {Link} from 'react-router-dom';
import Banner from '../components/Banner'
import {Form, FormGroup, Input, Label, Button} from "reactstrap";
export default function contactus() {
    return (
       <Hero hero = "contactinfo">
           <Banner title="Contact us">
           Comming Soon
           <br/><br/>
            <Link to="/React-Beach-Resort" className = "btn-primary">
                Return Home
            </Link>
           </Banner>
       </Hero>
    )
}
