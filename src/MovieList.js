import "./Movies.css"
import movieImage1 from "./images/GranTurismo.jpg";
import movieImage2 from "./images/Oppen.png";
import movieImage3 from "./images/Meg2.jpg";
import movieImage4 from "./images/Elemental.png";
import movieImage5 from "./images/BlueBeetle.png";
import movieImage6 from "./images/SpiderMan.png";
import movieImage7 from "./images/MissShetty.png";
import movieImage8 from "./images/Cats.png";
import movieImage9 from "./images/Greek.png";
import movieImage10 from "./images/SlamDunk.png";
import Gallery from "./Gallery";


function MovieList() {

    const movies=[{movieName: 'Gran Turismo: Based on a True Story', ratedurationtime: 'M 134 min | 10 Aug 2023', description: "The ultimate wish-fulfilment tale of a teenage Gran Turismo player whose gaming skills won a series of Nissan competitions to become an actual professional race driver.", imageUrl: movieImage1},
    {movieName: 'Oppenheimer', ratedurationtime: 'M 180 min | 20 Jul 2023', description: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.", imageUrl: movieImage2},
    {movieName: 'Meg 2: The Trench', ratedurationtime: 'M 116 min | 3 Aug 2023', description: "Jason Statham and global action icon Wu Jing lead a daring research team on an exploratory dive into the deepest depths of the ocean.", imageUrl: movieImage3},
    {movieName: 'Elemental', ratedurationtime: 'PG 109 min | 22 June 2023', description: "Disney and Pixar's Elemental is an all-new, original feature film set in Element City, where fire-, water-, land- and air-residents live together. The story introduces Ember, a tough, quick-witted and fiery young woman, whose friendship with a fun, sappy, go-with-the-flow guy named Wade challenges her beliefs about the world they live in.", imageUrl: movieImage4},
    {movieName: 'Blue Beetle', ratedurationtime: 'M 128 min | 14 Sept 2023', description: "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab. When the Scarab suddenly chooses Jaime to be its symbiotic host, he is bestowed with an incredible suit of armor capable of extraordinary and unpredictable powers, forever changing his destiny as he becomes the Super Hero BLUE BEETLE.", imageUrl: movieImage5},
    {movieName: 'Spider-Man: Across the Spider-Verse', ratedurationtime: 'PG 139 min | 1 June 2023', description: "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighbourhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must redefine what it means to be a hero so he can save the people he loves most.", imageUrl: movieImage6},
    {movieName: 'Miss Shetty Mr Polishetty', ratedurationtime: 'M 148 min | 7 Sept 2023', description: "Follows two people who appear to be in different stages of life. He is from Hyderabad, and she resides in London.", imageUrl: movieImage7},
    {movieName: 'Cats in the Museum', ratedurationtime: 'G 79 min | 29 June 2023', description: "Maurice loves to gnaw on masterpieces of painting. The situation becomes even more complicated when one of the greatest paintings of mankind, the Mona Lisa, arrives in the Hermitage, and it is the dream of all mice to gnaw it. But neither Vincent, nor Maurice, nor the cats of the Hermitage suspect that the painting is going to be stolen. And now Vincent will have to show all his resourcefulness and courage in order to save the masterpiece, protect the honor of the museum and win the love of a cat named Cleopatra from the Egyptian hall.", imageUrl: movieImage8},
    {movieName: 'My Big Fat Wedding 3', ratedurationtime: 'PG 92 min | 7 Sept 2023', description: "My Big Fat Greek Wedding is coming back to theaters with a brand-new adventure. Join the Portokalos family as they travel to a family reunion in Greece for a heartwarming and hilarious trip full of love, twists and turns. Opa!", imageUrl: movieImage9},
    {movieName: 'The First Slam Dunk', ratedurationtime: 'PG 124 min | 24 Aug 2023', description: "Born and raised in Okinawa, Ryota had a brother who was three years older. Following in the footsteps of his older brother, who was a famous local player from a young age, Ryota also became addicted to basketball. In his second year of high school, Ryota plays with the Shohoku High School basketball team along with Sakuragi, Rukawa, Akagi, and Mitsui as they take the stage at the Inter-High School National Championship. And now, they are on the brink of challenging the reigning champions, Sannoh Kogyo High School.", imageUrl: movieImage10},
]

    return (
        <div style={{marginTop: '0'}}>
            <div className="pagetitle">
            <div className="stripborder"></div>
            <div className="title"><h1>MOVIES</h1></div>
            <div className="stripborder"></div>
      </div>
            <div className="movie">
                    {movies.map((movie, index)=>(
                    <Gallery movie = {movie} />
                    ))}
            </div>
            
            <div className='space'></div>
        </div>
    );
}
export default MovieList;