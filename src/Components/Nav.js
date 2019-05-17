import React from 'react';

class Nav extends React.Component {
    render() {
        return(
            <nav>
                <span class="nav nav-left col-4">
                    <a href="about.html">About Me</a>
                    <a href="work.html">Work</a>
                </span>
                <span class="nav nav-center">
                <span class="d">D</span><span class="s">M</span>
                </span>
                <span class="nav nav-right col-4">
                    <a href="services.html">What I Offer</a>
                    <a href="contact.html">Contact</a>
                </span>
            </nav>
        )
    }
}

export default Nav