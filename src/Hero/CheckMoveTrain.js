import checkLoaderComplete from "../Loader/checkLoaderComplete";

export default function CheckMoveTrain() {
   if(checkLoaderComplete()){
    document.querySelector(".train").classList.add("move");
   }
}
