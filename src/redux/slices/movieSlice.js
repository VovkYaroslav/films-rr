import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../services/movieService";

const initialState = {
    movies: [],
    errors: null,
    loading: null
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (_, thunkAPI) => {
        try {
            const {data} = await movieService.getAll();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)

        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers:{},
    extraReducers: builder => builder.addCase(getAll.fulfilled, (state, action) => {
        state.movies=action.payload
    })
})

const {reducer: movieReducer}=movieSlice

const movieActions = {
    getAll
}

export {
     movieActions,
    movieReducer
}