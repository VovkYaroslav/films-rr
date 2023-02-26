import {StarRating} from "../../StarsDemo/Stars";


const Movie = ({movie}) => {
    const {id, original_title, backdrop_path, vote_average} = movie;
    return (
        <div>
            <div>id:{id}</div>
            <img src={backdrop_path} alt={original_title}/>
            <h1>{original_title}</h1>
            <StarRating onChange={vote_average} rating={vote_average}/>
            <button>Details</button>

        </div>
    );
};

export {Movie};