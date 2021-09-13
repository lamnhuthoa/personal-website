import React from "react";
import { useEffect, useState } from "react";
import "./ButtonBackToTop.css";

export default function ButtonBackToTop() {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <React.Fragment>
      {showButton && (
        <button onClick={scrollToTop} className="btn-to-top back-to-top">
          <a href="#">
            <div>
              <i class="fa fa-arrow-up" aria-hidden="true"></i>
            </div>
          </a>
        </button>
      )}
    </React.Fragment>
  );
}
