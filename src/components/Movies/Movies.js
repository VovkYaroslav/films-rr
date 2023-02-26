import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {movieActions} from "../../redux/slices/movieSlice";
import {Movie} from "../Movie/Movie";

const Movies = () => {
    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(movieActions.getAll())
    },[dispatch])
    return (
        <div>
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {Movies};