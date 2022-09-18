import React from "react";
import "../assets/scss/footer.scss";
import "../assets/scss/layout.scss";

function footer() {
  return (
    <footer className="footer">
      <div className="footer-scroll-top-btn">
        <a href="/">
           <i className="material-icons">keyboard_arrow_up</i>
        </a>
      </div>
    </footer>
  );
}

export default footer;
