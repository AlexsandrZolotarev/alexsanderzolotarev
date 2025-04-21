import { FC, useEffect } from "react";


let Scrolling : FC = () => {
    useEffect(() => {
        let header = document.getElementsByClassName("header")[0] as HTMLElement | undefined;
        const handleScroll = () => {
            if(!header) return;
           (window.pageYOffset === 0 ) ? header.classList.remove("is-scrolled") : 
           header.classList.add("is-scrolled");
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[])
    return null;
}
export default Scrolling;
