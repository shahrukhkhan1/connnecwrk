import React from "react";
import "./style.css";

function FeaturesWidget() {
  return (
    <div className="featuresWraper">
      <div className="container">
        <div className="premium-cont">
          <h2>Features </h2>
          <ul className="konect-mmbr" style={{marginBottom:'30px'}}>
            <li>
              <div className="grup-box project">
                <div className="index-group">
                  <i className="fa fa-industry" aria-hidden="true"></i>
                </div>

                <div className="index-white-box">
                  <label>MSME Connect</label>

                  <p style={{lineHeight:'22px'}}>
                    A platform for Micro Small and Medium business owners to engage
                    more with existing and potential consumers and business
                    associates. Create a business page, post photos and updates
                    to reach a wider audience.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="grup-box grup">
                <div className="index-group">
                  <i className="fa fa-globe"></i>
                </div>

                <div className="index-white-box">
                  <label>Freelancer Connect</label>

                  <p style={{lineHeight:'22px'}}>
                  Connect with independent freelancers around the globe. Find freelancers in any field, from design, SEO/SEM experts, web development to marketing to accounting and several other fields. Post a task or project (like logo design, content writing etc) that you have been wanting to outsource and connect with multiple freelancers or subject matter experts.
                  </p>
                </div>
              </div>
            </li>

            <li>
              <div className="grup-box event">
                <div className="index-group">
                  <i className="fa fa-star" aria-hidden="true"></i>
                </div>

                <div className="index-white-box">
                  <label>Talent Connect</label>

                  <p style={{lineHeight:'22px'}}>
                    A single platform for the Talent and event planners to
                    network. Through Talent Connect, Business speakers, trainers
                    and artists can market their profile and reach out to a
                    wider target group and on the other hand, companies and
                    individuals can connect with the Talent and hire them for
                    their events.
                  </p>
                </div>
              </div>
            </li>

           

            <li>
              <div className="grup-box indexarticle">
                <div className="index-group">
                  <i className="fa fa-calendar" aria-hidden="true"></i>
                </div>

                <div className="index-white-box">
                  <label>Events</label>

                  <p style={{lineHeight:'22px'}}>
                    Event organizers can post details about their upcoming
                    event, along with photographs. Interested individuals can
                    search and bookmark events of interest and see who else in
                    their network is attending the event.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FeaturesWidget;
