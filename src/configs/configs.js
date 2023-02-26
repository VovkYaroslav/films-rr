import axios from "axios";

const baseURL = 'https://api.themoviedb.org/3';

const movies =  '/discover/movie?api_key=b4ee040829a989007cb3999b7281bdd9'
const genres = '/genre/movie/list'


const urls = {
    movies:{
        movies,
        ById: (id)=>`${movies}/${id}`
    },

    genres:{
        genres,
        ById:(id)=>`${genres}/${id}`
    }
};

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGVlMDQwODI5YTk4OTAwN2NiMzk5OWI3MjgxYmRkOSIsInN1YiI6IjYzZjNlYWUxYTY3MjU0MDA4MjA0M2FhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m5fwwVNwlaxHoUmcXtr6h-my0ZIDx6gFoobdCb9jU-o'


const andToken = axios.get(`${baseURL}`, {headers: {Authorization: `Bearer ${token}`}})


export {
    baseURL,
    urls
}