import React from "react";
import "./style.css";
import Link from "next/link";

const MiddleTimeline = () => {
  return (
    <div className="center_content">
      <div className="cntr_cntnt">
        <div className="timeline_cont">
          <div className="timlist">
            <div className="hedr">
              <div class="prfl_img">
                <Link href="https://www.connecwrk.com/profile/202565529/srk-.html">
                  <img src="https://www.connecwrk.com/uploads/user-placeholder.jpg" />
                </Link>
              </div>
              <div class="hdr_right">
                <Link href="https://www.connecwrk.com/profile/202565529/srk-.html">
                  John Doe
                </Link>
                <label class="time">Developer </label>
                <label class="time"> 21 days ago</label>
              </div>
              <div class="errow-drop">
                <span class="errow" onclick="accordion('771');">
                  <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                </span>
                <ul class="erow-list" id="771">
                  <li>
                    <a onclick="copyToClipboard('#clipboard20713');">
                      <i class="fa fa-link" aria-hidden="true"></i> Copy link to
                      post
                    </a>
                  </li>
                  <li>
                    <a onclick="$('#commonpopupwinouter').hide();alertpopupmain('202586230','dltpost');">
                      <i class="fa fa-window-close-o" aria-hidden="true"></i>
                      Remove
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="txtarea" id="txtarea20713">
              <img
                src="https://www.connecwrk.com/uploads/1711605768alim-test-2.png"
                onclick="countpostview('202586230');imagepopupmain('390');"
              />
              <div class="timeline-img"> </div>
            </div>
            {/* <div className="postFooter1">
              <div>
                <span id="post207132">
                  <span>0</span>
                </span>
                <span id="like207132"> Like</span> &nbsp;-&nbsp;
                <span id="commentdisplaybox207132">
                  <span> 0</span>
                </span>
                <span id="commentsnamet207132">Comment</span>
              </div>
              <div>
                <span id="shareposts207132">
                  <span>0</span> Share
                </span>
              </div>
            </div> */}
            <div class="timlist-fttr">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tbody>
                  <tr>
                    <td width="15%">
                      <div onclick="postlike(20713,2,0);postlikeunlike('771');">
                        <a>
                          <i
                            class="fa fa-thumbs-up"
                            aria-hidden="true"
                            id="thumbid771"
                          ></i>
                          <span></span> Like
                        </a>
                      </div>
                    </td>
                    <td width="65%">
                      <ul class="likes-mmbr" id="likesmmbrdiv207132">
                        <table>
                          <tbody>
                            <tr>
                              <td width="56px"></td>
                            </tr>
                          </tbody>
                        </table>
                      </ul>
                    </td>
                    <td width="20%" align="right">
                      <div>
                        <a onclick="sharefuncommonpopupwin('450px','auto','https://www.connecwrk.com/common_popup_inner.php?id=202586230&amp;type=share&amp;sharePostType=2','Share','20713');">
                          <i class="fa fa-share" aria-hidden="true"></i> Share
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default MiddleTimeline;
