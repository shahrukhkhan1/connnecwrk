import Link from "next/link";
import React from "react";

function HeaderIcons() {
  return (
    <div className="HeaderIcons">
      <div class="find_btn" id="requestandnotiload">
        <div class="frnd-request hiden-xs">
          <Link  prefetch={false} class="frndr" href="/timeline">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span class="ttl">Home</span>
          </Link>
        </div>
        <div class="frnd-request hiden-xs">
          <Link  prefetch={false} class="frndr" href="/contacts">
            <i class="fa fa-user" aria-hidden="true">
              <span class="frnd-tltp hide" id="requestnotificationnumber">
                0
              </span>
            </i>
            <span class="ttl">Contacts</span>
          </Link>
        </div>
        <div class="frnd-request">
          <Link  prefetch={false} class="frndr" href="/messaging">
            <i class="fa fa-comments" aria-hidden="true">
              <span class="frnd-tltp hide" id="msgnotificationnumber">
                0
              </span>
            </i>
            <span class="ttl hiden-xs">Messages</span>
          </Link>
        </div>

        <div class="frnd-request">
          <Link  prefetch={false} class="frndr" href="/notifications">
            <i class="fa fa-bell">
              <span class="frnd-tltp hide" id="notificationnumber">
                0
              </span>
            </i>
            <span class="ttl hiden-xs">Notifications</span>
          </Link>

          <ul class="requst-list"></ul>
        </div>
        <div class="frnd-request vault  hiden-xs">
          <Link  prefetch={false} id="vault" class="frndr" href="/vault">
            <i class="fa fa-file-text" aria-hidden="true"></i>
            <span class="ttl hiden-xs">Vault</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeaderIcons;
