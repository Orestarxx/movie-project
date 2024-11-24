import React, {FC} from 'react';
import {tvService} from "@/app/services/tv.service";
import {ITelevisionByID} from "@/app/models/ITelevisionByID";
import styles from './tvSerieByID.module.css'
import StarRatings from "@/app/components/starRatings/StarRatings";
import {imgBaseURL, imgOriginal} from "@/app/urls/urls";
import {IGenres, IProduction_companies, ISpoken_languages} from "@/app/models/IMovieByID";
import Link from "next/link";
import {IVideoData} from "@/app/models/IVideoMovie";
import VideoForDetailsMovieAndTV
    from "@/app/components/moviesAndTVcomponents/movieComponents/movieDetails/VideoForDetailsMovieAndTV/VideoForDetailsMovieAndTV";
import {IDataImages} from "@/app/models/IImage";
import FavoriteForTVAndMovies from "@/app/components/addToFavorite/FavoriteForTVAndMovies";

type SearchParams = Promise<{ [key: string]: string }>
type ParamsId = Promise<{ id: string }>
type ParamsProps = {
    params: ParamsId,
    searchParams: SearchParams
}
const TvSeriesDetails: FC<ParamsProps> = async ({params}: ParamsProps) => {
    const {id} = await params;
    const tvShow: ITelevisionByID = await tvService.singleTVSeries.getTVShowByID(id.toString())
    const imagesOfTV: IDataImages = await tvService.singleTVSeries.getImagesOfTV(id.toString())
    const videos: IVideoData = await tvService.singleTVSeries.getVideosOfTV(id.toString())

    return (
        <div id={styles.detailsTV}>
            <div id={styles.infoHolder}>
                <div>
                    <h1>{tvShow.name}</h1>
                    <div id={styles.posterAndDescriptionHolder}>
                        <div id={styles.posterHolder}>
                            <img src={imgBaseURL + tvShow.poster_path} alt=""/>
                            <div id={styles.starsHolder}>
                                <StarRatings rating={tvShow.vote_average}/>
                                <div id={styles.ratingCircle}>{tvShow.vote_average}</div>
                                <div id={styles.release}>{tvShow.first_air_date}</div>
                            </div>
                        </div>
                        <div id={styles.overviewHolder}>
                            {/*overview*/}
                            <div id={styles.overview}>
                                <p>{tvShow.overview}</p>
                            </div>
                            {/*companies*/}
                            <div id={styles.holderOfCompanies}>
                                <div><h2>Production Companies</h2></div>
                                <div className={styles.mainCircleAndNameHolder}>
                                    {tvShow.production_companies?.map(
                                        (company: IProduction_companies) => <div key={company.id}
                                                                                 className={styles.circleAndNameHolder}>
                                            <div className={styles.circleLogo}>
                                                <img src={imgBaseURL + company.logo_path} alt="logo"/>
                                            </div>
                                            <p className={styles.companyName}>{company.name}</p>
                                        </div>)}
                                </div>
                            </div>
                            {/*genres*/}
                            <div id={styles.genresHolder}>
                                <div id={styles.genreName}><h2>Genres</h2></div>
                                <div id={styles.genreHolder}>
                                    {tvShow.genres?.map((genre: IGenres, index: number) => <div key={index}
                                                                                                className={styles.genre}>
                                        <Link href={{
                                            pathname: '/tvGenres/' + genre.id,
                                            query: {page: 1}
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
                                    {tvShow.spoken_languages?.map((lang: ISpoken_languages, index) => <div key={index}>
                                        {lang.name}
                                    </div>)}
                                </div>
                            </div>
                            <div id={styles.popularity}>
                                <div>
                                    <h2>Popularity</h2>
                                </div>
                                <div>{tvShow.popularity}</div>
                            </div>
                        </div>
                    </div>
                    <div id={styles.videoHolder}>
                        <FavoriteForTVAndMovies tv={tvShow}/>
                        <div id={styles.videoWrapper}>
                            <VideoForDetailsMovieAndTV videos={videos}/>
                        </div>
                    </div>
                    <div id={styles.imagesHolder}>
                        {imagesOfTV.posters.length >= 4 &&
                            <div id={styles.postersHolder}>
                                <div className={styles.image}>
                                    <img src={imgBaseURL + imagesOfTV.posters[0].file_path} alt="poster"/>
                                </div>
                                <div className={styles.image}>
                                    <img src={imgBaseURL + imagesOfTV.posters[1].file_path} alt="poster"/>
                                </div>
                                <div className={styles.image}>
                                    <img src={imgBaseURL + imagesOfTV.posters[2].file_path} alt="poster"/>
                                </div>
                                <div className={styles.image}>
                                    <img src={imgBaseURL + imagesOfTV.posters[3].file_path} alt="poster"/>
                                </div>
                            </div>}
                    </div>
                </div>
            </div>
            <img src={imgOriginal + tvShow.backdrop_path} alt="poster"/>
        </div>
    );
};

export default TvSeriesDetails;