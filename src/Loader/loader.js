import { useEffect } from "react";



let Loader = () => {
  useEffect(() => {
    window.addEventListener("load", () => {
      document.querySelector(".preloader").classList.add("done");
    });
  }, []);
  return (
    <div className="preloader">
      <div className="preloader__part"></div>
      <div className="preloader__part"></div>
      <div className="preloader__part"></div>
    </div>
  );
};
export default Loader;
