import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
<h1>Ви попали на неіснуючу сторінку, будь-ласка, поверніться назад.</h1>
            <Link to={'/'}>Home</Link>
            <Link to={'/genre'}>Genres</Link>
            <Link to={'/d'}>About project</Link>
        </div>
    );
};

export {NotFoundPage};