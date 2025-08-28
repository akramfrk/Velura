import GenreSection from "./GenreSection";
import HeroSection from "./HeroSection";
import MovieSlider from "./MovieSlide";

export default function MovieContent(){
    return(
        <>
        <HeroSection />
        <div className="bg-gradient-to-b from-neutral-900 to-neutral-950">
            <MovieSlider />
            <GenreSection />
        </div>
        </>
    )
}