import {Link} from "react-router-dom";

const MovieHeader = () => {
    return (
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/d'}>About project</Link>
        </div>
    );
};

export {MovieHeader};