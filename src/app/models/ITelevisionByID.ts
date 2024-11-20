export interface ITelevisionByID {
	adult: boolean;
	backdrop_path: string;
	created_by: ICreated_by[];
	episode_run_time: number[];
	first_air_date: string;
	genres: IGenres[];
	homepage: string;
	id: number;
	in_production: boolean;
	languages: string[];
	last_air_date: string;
	last_episode_to_air: ILast_episode_to_air;
	name: string;
	next_episode_to_air: INext_episode_to_air;
	networks: INetworks[];
	number_of_episodes: number;
	number_of_seasons: number;
	origin_country: string[];
	original_language: string;
	original_name: string;
	overview: string;
	popularity: number;
	poster_path: string;
	production_companies: IProduction_companies[];
	production_countries: IProduction_countries[];
	seasons: ISeasons[];
	spoken_languages: ISpoken_languages[];
	status: string;
	tagline: string;
	type: string;
	vote_average: number;
	vote_count: number;
}
export interface ICreated_by {
	id: number;
	credit_id: string;
	name: string;
	original_name: string;
	gender: number;
	profile_path?: null;
}
export interface IGenres {
	id: number;
	name: string;
}
export interface ILast_episode_to_air {
	id: number;
	name: string;
	overview: string;
	vote_average: number;
	vote_count: number;
	air_date: string;
	episode_number: number;
	episode_type: string;
	production_code: string;
	runtime?: null;
	season_number: number;
	show_id: number;
	still_path: string;
}
export interface INext_episode_to_air {
	id: number;
	name: string;
	overview: string;
	vote_average: number;
	vote_count: number;
	air_date: string;
	episode_number: number;
	episode_type: string;
	production_code: string;
	runtime?: null;
	season_number: number;
	show_id: number;
	still_path: string;
}
export interface INetworks {
	id: number;
	logo_path: string;
	name: string;
	origin_country: string;
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
export interface ISeasons {
	air_date: string;
	episode_count: number;
	id: number;
	name: string;
	overview: string;
	poster_path: string;
	season_number: number;
	vote_average: number;
}
export interface ISpoken_languages {
	english_name: string;
	iso_639_1: string;
	name: string;
}