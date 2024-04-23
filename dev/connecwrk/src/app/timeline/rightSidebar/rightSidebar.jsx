import React from "react";
import './style.css'
import RightFooter from "./rightFooter";

const RightSidebar = () => {
  return (
    <div className="hm_right_sec">
      <div className="invite-frnd-cont">
        <img src="/invite-icon.png" />
        <h1>
          Invite People To Join <span color="#00a0af">CONNECWRK</span>
        </h1>
        <div class="invite-yourfrnd">
          <a
            onclick="funcommonpopupwin('400px','auto','https://www.connecwrk.com/common_popup_inner.php?type=invitepeople','Invite people');"
            class="invifrnd"
          >
            Invite Now
          </a>
        </div>
      </div>
      <div className="right-box-cont">
        <div class="suggest-box">
          <h2>
            Talent Connect
            <span>Platform to book speakers and artists for your event </span>
          </h2>
          <ul class="trending-list">
            <li onclick="window.location.href='https://www.connecwrk.com/talent-profile-detail.html?id=202565546';">
              <div class="artcl-img">
                <img src="https://www.connecwrk.com/uploads/1507633534goldsmith.jpg" />
              </div>
              <a class="ttle">Dr. Marshall Goldsmith</a>
              <span class="desc">Leadership</span>
            </li>
            <li onclick="window.location.href = 'https://www.connecwrk.com/talent-profile-detail.html?id=202565551';">
              <div class="artcl-img">
                <img src="https://www.connecwrk.com/uploads/1507637717Mark_DeVolder.jpg" />
              </div>
              <a class="ttle">Dr. Mark DeVolder</a>
              <span class="desc">Team Building</span>
            </li>
            <li onclick="window.location.href = 'https://www.connecwrk.com/talent-profile-detail.html?id=202565539';">
              <div class="artcl-img">
                <img src="https://www.connecwrk.com/uploads/1507628736barry_maher.jpg" />
              </div>
              <a class="ttle">Barry Maher</a>
              <span class="desc">Motivation &amp; Employee Productivity</span>
            </li>
          </ul>
        </div>
        <div className="viewMore">
          <a href="/talent-konectt.html">View More</a>
        </div>
      </div>
      <RightFooter/>
    </div>
  );
};

export default RightSidebar;
