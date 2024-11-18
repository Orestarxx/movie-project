export interface IMovieByID {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: IBelongs_to_collection;
	budget: number;
	genres: IGenres[];
	homepage: string;
	id: number;
	imdb_id: string;
	origin_country: string[];
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: IProduction_companies[];
	production_countries: IProduction_countries[];
	release_date: string;
	revenue: number;
	runtime: number;
	spoken_languages: ISpoken_languages[];
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
}
export interface IBelongs_to_collection {
	id: number;
	name: string;
	poster_path: string;
	backdrop_path: string;
}
export interface IGenres {
	id: number;
	name: string;
}
export interface IProduction_companies {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
}
export interface IProduction_countries {
	iso_3166_1: string;
	name: string;
}
export interface ISpoken_languages {
	english_name: string;
	iso_639_1: string;
	name: string;
}