import React from 'react';
import styles from './movieDetails.style.module.css'
import {movieService} from "@/app/services/movie.service";
import {imgBaseURL, imgOriginal} from "@/app/urls/urls";
import VideoSlider
    from "@/app/components/moviesAndTVcomponents/movieComponents/movieDetails/VideoSliderForDetailsMovie/VideoSlider";
import {IVideoData} from "@/app/models/IVideoMovie";
import StarRatings from "@/app/components/starRatings/StarRatings";


type Params = Promise<{id:string}>
const MovieDetails = async ({params}:{params:Params}) => {
   const id  = await params;
  const movieByID = await movieService.SingleMovie.getMovieById(id.id);
  const images = await  movieService.SingleMovie.getImagesOfMovie(id.id);
  const videos:IVideoData = await movieService.SingleMovie.getVideosOfMovie(id.id);
    console.log(movieByID);


    return (
        <div id={styles.detailsMovie}>
             <div id={styles.infoHolder}>
                 <div>
                     <h1>{movieByID.title}</h1>
                     <div id={styles.posterAndDescriptionHolder}>
                         <div id={styles.posterHolder}>
                             <img src={imgBaseURL + images?.posters[3]?.file_path} alt=""/>
                             <div id={styles.starsHolder}>
                                   <StarRatings rating={movieByID.vote_average}/>
                                 <div id={styles.ratingCircle}></div>
                             </div>
                         </div>
                         <div id={styles.overview}>
                             <p>{movieByID.overview}</p>
                         </div>
                     </div>
                     <div>
                         <VideoSlider videos={videos}/>
                     </div>
                 </div>
             </div>
            <img src={imgOriginal + movieByID.poster_path} alt="poster"/>
        </div>
    );
};

export default MovieDetails;