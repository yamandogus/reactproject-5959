import "./Styles/style.scss"
import { Foother } from "./sections/footer/footer"
import { Hero } from "./sections/hero/hero"
import { Navbar } from "./sections/navbar/navbar"
import { Features } from "./sections/features/features "
import { SliderHero } from "./components/card"

function App() {

return (
    <>
        <Navbar/>
        <Hero />
            <div className="container px-lg-5 my-5">
                <div className="row gx-lg-5">
                    <div className="text-center">
                        <h3 id="favorite" className="text-center mb-5">Marvel Favorite Superheroes</h3>
                        <SliderHero 
                        />
                    </div>
                        <Features 
                            iconMore="feature bg-danger bg-gradient text-white rounded-3 mb-4 mt-n4"
                            className="col-lg-6 col-xxl-4 mb-5"
                            icon="collection"
                            moviesName="Avengers"
                            description="The Avengers is a team of superheroes appearing in American comic books published by Marvel Comics."
                        />
                        <Features 
                            iconMore="feature bg-danger bg-gradient text-white rounded-3 mb-4 mt-n4"
                            className="col-lg-6 col-xxl-4 mb-5"
                            icon="download"
                            moviesName="Doctor Strange"
                            description="Doctor Strange is a 2016 American superhero film based on the Marvel Comics character of the same name."
                        />
                        <Features 
                            iconMore="feature bg-danger bg-gradient text-white rounded-3 mb-4 mt-n4"
                            className="col-lg-6 col-xxl-4 mb-5"
                            icon="card-heading"
                            moviesName="Iron Man"
                            description="Iron Man is a fictional superhero appearing in American comic books published by Marvel Comics."
                        />
                        <Features 
                            iconMore="feature bg-danger bg-gradient text-white rounded-3 mb-4 mt-n4"
                            className="col-lg-6 col-xxl-4 mb-5"
                            icon="bootstrap"
                            moviesName="Spider-man"
                            description="Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko."
                        />
                        <Features 
                            iconMore="feature bg-danger bg-gradient text-white rounded-3 mb-4 mt-n4"
                            className="col-lg-6 col-xxl-4 mb-5"
                            icon="code"
                            moviesName="Captain America"
                            description="Captain America is a fictional superhero appearing in American comic books published by Marvel Comics."
                        />
                        <Features 
                            iconMore="feature bg-danger bg-gradient text-white rounded-3 mb-4 mt-n4"
                            className="col-lg-6 col-xxl-4 mb-5" 
                            icon="patch-check"
                            moviesName="Thor"
                            description="Thor is a fictional superhero appearing in American comic books published by Marvel Comics."
                        />
                </div>
            </div>
        <Foother/>
    </>
)
}

export default App
