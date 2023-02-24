import {axiosService} from "./axiosServices";
import {urls} from "../configs/configs";

const movieServices = {
    getAll: ()=> axiosService.get(urls.movies),
    getById: (id)=> axiosService.get(`${urls.movies}/${id}`)
};

export {movieServices}