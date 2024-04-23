import React from "react";
import './style.css';
import Image from "next/image";

function PlayStorWidget() {
  return (
    <div className="play-store">
      <div className="container">
        <div className="play-img">
          <img src="/playstore.jpg" />
        </div>
        <div className="play-text">
          <h1>
            Sign up now to get
            <font style={{ color: '"#00a7d4"' }}>'Connected'</font> and foster a
            successful professional association.
          </h1>
          <p>
            At CONNECWRK, our aim is to help you <strong>collaborate</strong>
            (with like-minded people), <strong>create</strong> (new business
            opportunities) and <strong>consume</strong> (relevant content that
            matters).
            <br />
            <br />
            Download the app from Google Play.
          </p>
          <a href="#"><img src="/google_play_badge.png"/></a>
        </div>
      </div>
    </div>
  );
}

export default PlayStorWidget;
