import checkLoaderComplete from "../Loader/checkLoaderComplete";

const CheckMoveTrain = ():void => {
   const train = document.querySelector(".train") as HTMLElement | null;
   if(checkLoaderComplete() && train){
      train.classList.add("move");
   }
}
export default CheckMoveTrain;