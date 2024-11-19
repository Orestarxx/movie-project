import React from 'react';
import SearchTVShows from "@/app/components/search/searchTVshows/SearchTVShows";
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}
const SearchTVShowsPage = ({searchParams}:ParamsProps) => {
    return (
        <div>
            <SearchTVShows searchParams={searchParams}/>
        </div>
    );
};

export default SearchTVShowsPage;