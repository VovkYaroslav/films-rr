import {Link} from "react-router-dom";


const HeaderHome = () => {
    return (
        <div>
            <Link to={'/'}></Link>
            <Link to={'/genre'}></Link>
            <Link to={'/d'}>About project</Link>

        </div>
    );
};

export {HeaderHome};