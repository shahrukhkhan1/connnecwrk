import React from "react";

function SearchBar() {
  return (
    <div className="mainSearch">
      <form
        name="topsearchfrm"
        id="topsearchfrm"
        class="mainsearch"
        method="get"
        action="https://www.connecwrk.com/search.html"
      >
        <input
          type="text"
          name="keywordsearch"
          id="keywordsearch"
          value=""
          maxlength="50"
          class="text"
          autocomplete="off"
          placeholder="Search "
          onkeyup="topsearch();"
        />
        <button type="button" class="search_btn" onclick="subsrchfrm();">
          <i class="fa fa-search" aria-hidden="true"></i>
        </button> 
      </form>
    </div>
  );
}

export default SearchBar;
