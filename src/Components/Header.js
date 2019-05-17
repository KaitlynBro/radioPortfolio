import React from 'react';
import Nav from './Nav.js';
import arrow from '../././drop-down-arrow.svg';

class Header extends React.Component {
    render() {
        return(
            <header>
                <Nav />
                <div className="header-content">
                    <div className="header-content-text top">
                        <span className="col-6 left">
                            <h2>Radio Broadcaster</h2>
                            </span>
                            <span className="col-6 right">
                            <h2>Podcast Host</h2>  
                            </span>
                    </div>
                    <div className="header-content-text">
                        <span className="col-6 left">
                            <h1>Dillon</h1>
                        </span>
                        <span className="col-6 right">
                            <h1>Moore</h1>  
                        </span>
                    </div>
                    <div className="container">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="header-go">
                    <p>Go</p>
                    <img src={arrow} alt="" />
                </div>
            </header>
        )
    }
}

export default Header