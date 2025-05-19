import './Loader.scss'
export default function Loader() {
  return (
    <>
      <div className="preloader-bg"></div>
      <div id="preloader">
        <div id="preloader-status">
          <div className="preloader-position loader"> <span></span> </div>
        </div>
      </div>
    </>
  );
}
