import React from 'react';
import microphone from '../././microphone-icon.svg';
import headset from '../././headset-icon.svg';
import dillon from '../././dillon.jpg';
import microphonelarge from '../././microphone-large.jpg';
import runescape from '../././runescape.svg';
import classmates from '../././class.jpg';

class Services extends React.Component {
    render() {
        return (
            <div className="services-wrapper">
                <div className="services-intro">
                    <h2>What I Do</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</p>
                </div>
                <div className="timeline-dots">
                    <div className="circle one">
                        <div className="timeline-image">
                            <img src={dillon} alt="" className="imgLarge" />
                            <img src={microphone} alt="" className="icon" />
                        </div>
                        <div className="timeline-copy">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</p>
                        </div>
                    </div>
                    <div className="circle two">
                        <div className="timeline-image">
                            <img src={microphonelarge} alt="" className="imgLarge" />
                            <img src={headset} alt="" className="icon" />
                        </div>
                        <div className="timeline-copy">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</p>
                        </div>
                    </div>
                    <div className="circle three">
                        <div className="timeline-image">
                            <img src={classmates} alt="" className="imgLarge" />
                            <img src={runescape} alt="" className="icon" />
                        </div>
                        <div className="timeline-copy">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services