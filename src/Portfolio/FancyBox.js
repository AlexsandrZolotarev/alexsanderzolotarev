import kuznec from "../images/Portfolio/Kuznec12_big.png";
import RivoAgency from "../images/Portfolio/RivoAgancy_big.png";
import futuretech from "../images/Portfolio/futuretech_big.png";


const deleteFancyBox = () => {
  let fancybox = document.getElementById("fancybox");
  document.body.removeChild(fancybox);
  document.documentElement.classList.remove("is-lock");
};
const addEventHandlers = (fancybox) => {
  fancybox.addEventListener("keydown", (event) => {
    if (event.key === "Escape") deleteFancyBox();
  });
};

const addEventHandlersMousemove = (image) => {
  image.addEventListener("mousemove", onZoom);
  image.addEventListener("mouseover", onZoom);
  image.addEventListener("mouseleave", offZoom);
  function onZoom(e) {
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    image.style.transformOrigin = `${x}px ${y}px`;
    image.style.transform = "scale(2.5)";
   }
   function offZoom(e) {
    image.style.transformOrigin = `center center`;
    image.style.transform = "scale(1)";
   }
  
};
const addEventHandlersVieport = (vieport) => {
  vieport.addEventListener("click", (event) => {
    if (event.target.className === "fancybox__viewport") deleteFancyBox();
  });
};
const FancyBox = (caption) => {
  let fancybox = document.createElement("div");
    fancybox.className = "fancybox";
    fancybox.role = "dialog";
    fancybox.tabIndex = "-1";
    fancybox.ariaModal = "true";
    fancybox.ariaHidden = "false";
    fancybox.ariaLabel = "You can close the window by pressing ESC";
    fancybox.id = "fancybox";
  let fancybox__background = document.createElement("div");
  fancybox__background.className = "fancybox__background";
  fancybox.append(fancybox__background);

  let fancybox__toolbar = document.createElement("div");
  fancybox__toolbar.className = "fancybox__toolbar";

  let button = document.createElement("button");
  button.className = "fancybox__button";
  button.tabIndex = "0";
  button.title = "Close";

  button.addEventListener("click", deleteFancyBox);

  let fancybox__viewport = document.createElement("div");
  fancybox__viewport.className = "fancybox__viewport";

  addEventHandlersVieport(fancybox__viewport);

  let fancybox__content = document.createElement("div");
  fancybox__content.className = "fancybox__content";

  let image = document.createElement("img");
  image.src =
    caption === "Future Tech"
      ? futuretech
      : caption === "Rivo Agency"
      ? RivoAgency
      : kuznec;
  fancybox__content.append(image);

  addEventHandlersMousemove(image);

  let fancybox__caption = document.createElement("div");
  fancybox__caption.className = "fancybox__caption";
  fancybox__caption.innerHTML = caption;
  fancybox__viewport.append(fancybox__content);
  fancybox__viewport.append(fancybox__caption);

  fancybox__toolbar.append(button);
  fancybox.append(fancybox__toolbar);
  fancybox.append(fancybox__viewport);

  document.body.appendChild(fancybox);
  document.documentElement.classList.add("is-lock");

  addEventHandlers(fancybox);
};

export default FancyBox;

