import React, { useEffect } from "react";

function Scrolling() {
    useEffect(() => {
        let header = document.getElementsByClassName("header")[0];
        window.addEventListener("scroll", () => {
            if(window.pageYOffset === 0) header.classList.remove("is-scrolled");
            else {
                header.classList.add("is-scrolled");
            }
           
          });
    },[])
 
}

export default Scrolling;
