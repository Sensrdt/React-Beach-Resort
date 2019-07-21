import React from 'react'
import logo from '../images/logo.svg'
import {Link} from 'react-router-dom'
import {FaAlignRight} from "react-icons/fa"
import { button} from 'react-bootstrap';    

export default class Navbar  extends React.Component {

    state = {
        Open_Bar : false
    }

    handleToggle = () =>{
        this.setState({Open_Bar : !this.state.Open_Bar})
    }
    render(){
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/React-Beach-Resort">
                            <img src={logo} alt="Island Chuski"/>
                        </Link>
                        <button type="button" className="nav-btn" 
                        onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul 
                    className={this.state.Open_Bar ?
                    "nav-links show-nav" : "nav-links"}>
                        <li><Link to="/Room">Room</Link> </li>
                        
                        <li><Link to="/contactus">Contact us</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
}
