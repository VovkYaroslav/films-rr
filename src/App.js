import {Movies} from "./components/Movies/Movies";
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {AuthRequireLayout} from "./layouts/AuthRequireLayout";
import {MoviesPage} from "./pages/MoviesPage/MoviesPage";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>


                <Route element={<AuthRequireLayout/>}>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                </Route>

            </Route>
        </Routes>
    );
};

export {App};