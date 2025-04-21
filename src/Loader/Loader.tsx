import { useEffect } from "react";
let Loader:React.FC = () => {
  useEffect(() => {
    const preloader = document.querySelector(".preloader") as HTMLElement | null; 
    preloader?.classList.add("done");
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
