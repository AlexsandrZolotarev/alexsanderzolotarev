import React from "react";
import { IoMdClose } from "react-icons/io";

const FancyBox = () => {
  return (
    <div
      className="fancybox"
      role="dialog"
      tabIndex={-1}
      aria-modal="true"
      aria-hidden="false"
      aria-label="You can close the window by pressing ESC"
      id="fancybox"
    >
      <div className="fancybox__background"></div>
      <div className="fancybox__toolbar">
        <button className="fancybox__button" tabIndex={0} title="Close">
        <IoMdClose />
        </button>
      </div>
      <div className="fancybox__viewport">
      <div className="fancybox__content">
        
        </div>
        <div className="fancybox__caption">
        
      </div>
      </div>
    </div>
  );
};
export default FancyBox;
