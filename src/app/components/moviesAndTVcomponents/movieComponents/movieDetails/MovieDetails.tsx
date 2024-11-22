import React from 'react';
import styles from './movieDetails.style.module.css'
import {movieService} from "@/app/services/movie.service";
import {imgBaseURL, imgOriginal} from "@/app/urls/urls";
import VideoForDetailsMovieAndTV
    from "@/app/components/moviesAndTVcomponents/movieComponents/movieDetails/VideoForDetailsMovieAndTV/VideoForDetailsMovieAndTV";
import {IVideoData} from "@/app/models/IVideoMovie";
import StarRatings from "@/app/components/starRatings/StarRatings";
import {IGenres, IProduction_companies, ISpoken_languages} from "@/app/models/IMovieByID";
import Link from "next/link";
import {IDataImages} from "@/app/models/IImage";
import FavoriteForTV from "@/app/components/wishList/forTV/FavoriteForTV";


type Params = Promise<{id:string}>
const MovieDetails = async ({params}:{params:Params}) => {
   const id  = await params;
  const movieByID = await movieService.SingleMovie.getMovieById(id.id.toString());
  const images:IDataImages = await  movieService.SingleMovie.getImagesOfMovie(id.id.toString());
  const videos:IVideoData = await movieService.SingleMovie.getVideosOfMovie(id.id.toString());
    console.log(movieByID);


    return (
        <div id={styles.detailsMovie}>
             <div id={styles.infoHolder}>
                 <div>
                     <h1>{movieByID.title}</h1>
                     <div id={styles.posterAndDescriptionHolder}>
                         <div id={styles.posterHolder}>
                             <img src={imgBaseURL + movieByID.poster_path} alt=""/>
                             <div id={styles.starsHolder}>
                                   <StarRatings rating={movieByID.vote_average}/>
                                 <div id={styles.ratingCircle}>{movieByID.vote_average}</div>
                                 <div id={styles.release}>{movieByID.release_date}</div>
                             </div>
                         </div>
                         <div id={styles.overviewHolder}>
                             {/*overview*/}
                             <div id={styles.overview}>
                                 <p>{movieByID.overview}</p>
                             </div>
                             {/*companies*/}
                             <div id={styles.holderOfCompanies}>
                                 <div><h2>Production Companies</h2></div>
                                <div className={styles.mainCircleAndNameHolder}>
                                    {movieByID.production_companies?.map(
                                        (company:IProduction_companies) =><div key={company.id} className={styles.circleAndNameHolder}>
                                            <div className={styles.circleLogo}>
                                                <img src={imgBaseURL+company.logo_path} alt="logo"/>
                                            </div>
                                            <p className={styles.companyName}>{company.name}</p>
                                        </div>)}
                                </div>
                             </div>
                             {/*genres*/}
                             <div id={styles.genresHolder}>
                                 <div id={styles.genreName}><h2>Genres</h2></div>
                                 <div id={styles.genreHolder}>
                                     {movieByID.genres?.map((genre:IGenres,index:number) =><div key={index} className={styles.genre}>
                                         <Link href={{
                                             pathname:'/genres/'+genre.id,
                                             query:{page:1}
                                         }}>{genre.name}</Link>
                                     </div>)}
                                 </div>
                             </div>
                             {/*languages*/}
                             <div id={styles.languageHolder}>
                                 <div>
                                     <h2>Spoken Language</h2>
                                 </div>
                                 <div id={styles.languagesHolder}>
                                     {movieByID.spoken_languages?.map((lang:ISpoken_languages,index) =><div key={index}>
                                         {lang.name}
                                     </div>)}
                                 </div>
                             </div>
                             {/*revenue*/}
                             <div id={styles.revenueHolder}>
                                 <div><h2>Revenue</h2></div>
                                 <div>{movieByID.revenue}$</div>
                             </div>
                             {/*runtime*/}
                             <div id={styles.runTime}>
                                 <div><h2>Run Time</h2></div>
                                  <div>{`${movieByID.runtime} min`}</div>
                             </div>
                             <div>
                                 <div id={styles.tagLine}>#{movieByID.tagline}</div>
                             </div>
                         </div>
                     </div>
                     <div id={styles.videoHolder}>
                         <FavoriteForTV movie={movieByID}/>
                         <div id={styles.videoWrapper}>
                             <VideoForDetailsMovieAndTV videos={videos}/>
                         </div>
                     </div>
                    <div id={styles.imagesHolder}>
                        {images.posters?.length >= 4 &&
                        <div id={styles.postersHolder}>
                            <div className={styles.image}>
                                <img src={imgBaseURL + images.posters[0].file_path} alt=""/>
                            </div>
                            <div className={styles.image}>
                                <img src={imgBaseURL + images.posters[1].file_path} alt=""/>
                            </div>
                            <div className={styles.image}>
                                <img src={imgBaseURL + images.posters[2].file_path} alt=""/>
                            </div>
                            <div className={styles.image}>
                                <img src={imgBaseURL + images.posters[3].file_path} alt=""/>
                            </div>
                        </div>
                        }
                     </div>
                 </div>
             </div>
            <img src={imgOriginal + movieByID.backdrop_path} alt="poster"/>
        </div>
    );
};

export default MovieDetails;