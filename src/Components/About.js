import React from 'react';
import RadioIcon from '../././radio-icon.svg';
import MicrophoneIcon from '../././microphone-icon.svg';

class About extends React.Component {
    render() {
        return(
            <div className="about-wrapper">
                <p>We are creative people with <span>5 years experiences</span>  in web  and mobile app development. Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempori.</p>
                <div className="about-skills my-5">
                    <div className="skill">
                        <div className="skill-image">
                            <img src={RadioIcon} alt="" />
                            {/* Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a> */}
                        </div>
                        <h3>Radio Broadcaster</h3>
                    </div>
                    <div className="skill">
                        <div className="skill-image">
                            <img src={MicrophoneIcon} alt="" />
                            {/* Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a> */}
                        </div>
                        <h3>Journalist</h3>
      
                    </div>
                    <div className="skill">
                        <div className="skill-image three">
                            <div className="container">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            </div>
                        </div>
                        <h3>Podcast Host</h3>
    
                    </div>
                </div>
            </div>
        )
    }
}

export default About