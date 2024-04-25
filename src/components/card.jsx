import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
export function SliderHero() {

    return (
        <>
        <div
            id="carouselExampleInterval"
            className="carousel slide mb-5 mt-2"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
                <img src="https://wallpapers.com/images/featured/4k-avengers-gx5riyd6eqklm4hf.jpg" className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
                <img src="https://images7.alphacoders.com/119/1199228.jpg" className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
                <img src="https://www.indyturk.com/sites/default/files/article/main_image/2022/09/21/1015591-2088487651.jpg" className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
                <img src="https://wallpapers.com/images/featured/4k-spider-man-ph3fw6k03ddbmbmh.jpg" className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
                <img src="https://wallpapersmug.com/download/1600x900/19523e/captain-america-superheroes-marvel-studio.jpg" className="d-block w-100" alt="..."></img>
            </div>
            <div className="carousel-item">
                <img src="https://wallpapers-hub.art/wallpaper-images/408920.png" className="d-block w-100" alt="..."></img>
            </div>
            </div>
            <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="prev"
            >
            <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide="next"
            >
            <span
                className="carousel-control-next-icon"
                aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    );
}
