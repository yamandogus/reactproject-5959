import styles from "./hero.module.css"
export function Hero(){
    return(
        <>
            <div className="container px-lg-5 mt-5">
                <div>
                    <div className={`${styles.hero} bg-light text-center`}>
                        <h1 className="display-5 fw-bold">MARVEL NEWS</h1>
                        <p className="fs-4">
                        Today, Marvel Studios debuted a brand-new trailer and two new posters for its highly anticipated feature film Deadpool & Wolverine. The trailer, posters and trailer stills are available now. 
                        </p>
                        <a href="https://www.youtube.com/watch?v=73_1biulkYk"
                        target="_blank"
                        className="btn button">Official Trailer</a>
                    </div>
                </div>
            </div>
        </>
    )
}