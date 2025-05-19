import './PreLoader.scss'
export default function PreLoader() {
    return (
        <>
            <div className="preloader-bg"></div>
            <div className="preloader">
                <div className="preloader-status">
                    <div className="preloader-position">
                        <div className="loader">
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}