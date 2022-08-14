import React from "react";
import CareerImg from "../public/images/speeral-career-dev.svg"

function Features() {
    return(
        <div id="features">

        <div id="build">
        <div className="team">
        <img src='https://res.cloudinary.com/dgsdjrpjz/image/upload/v1660382962/my%20logos/Speeral/team-spirit_2_h4var7.svg' alt="team img" className="build-img" />
        <div>
            <h1>Commitment team building</h1>
        </div>

        </div>
        <div className="career">
        <img src="https://res.cloudinary.com/dgsdjrpjz/image/upload/v1660382136/my%20logos/Speeral/career_image_ytxnc1.svg" alt="career img" className="build-img" />


        </div>

        </div>
        <div id="challenges">
        <div id="features-img">

        </div>
        <div className="features-content">
        <h1>What are Your toughest Challenges?</h1>
        <p>At Speeral we believe that complex challenges are
        the key to strengthening business and start-ups.
        Share with us today.</p>
        <button className="features-btn mt-5">Start Building</button>
        </div>  
        </div>
        </div>
    )
}

export default Features;