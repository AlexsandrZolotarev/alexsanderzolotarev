export default function checkLoaderComplete() {
    const preloader = document.querySelector(".preloader") as HTMLElement | null;
    return (preloader) ? preloader.classList.contains("done") : null ;
}