import React from "react";
import './style.css'
import RegisterForm from "../registerForm/RegisterForm";

function HomeBanner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-left-info">
          <h1 >
            <b >Welcome to ConnecWrk </b> - the ‘Made
            in India’ business networking platform.
          </h1>
          <p><strong>Join for free</strong> and discover a world full of opportunities</p>
          {/* <h3>
            Empowering and connecting Businesses <br /> all across the globe
          </h3> */}
          {/* <div class="counterSection">
            <div>
              <h2>2200</h2>
              <span>Community Members</span>
            </div>
            <div>
              <h2>1200</h2>
              <span>MSME</span>
            </div>
            <div>
              <h2>1000</h2>
              <span>Freelancers</span>
            </div>
          </div> */}
        </div>
        <div className="banner-form">
          <RegisterForm/>
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
