import React, {FC} from 'react';
import {ITelevision} from "@/app/models/ITelevision";
type TVProps = {
    tvSerie:ITelevision
}
const TvSerie:FC<TVProps> = ({tvSerie}) => {
    return (
        <div>
            {tvSerie.name}
        </div>
    );
};

export default TvSerie;