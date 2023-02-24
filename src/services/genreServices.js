import {axiosService} from "./axiosServices";
import {urls} from "../configs/configs";

const genreServices = {
    getAll: ()=> axiosService.get(urls.genres),
    getById: (id)=> axiosService.get(`${urls.genres}/${id}`)
};

export {genreServices}