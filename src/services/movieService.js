import {apiService} from "./apiService";
import {urls} from "../configs/configs";

const movieService = {
    getAll: ()=>apiService.get(urls.movies.movies),
    getById:(id)=>apiService.get(urls.movies.ById(id))
}

export {movieService}