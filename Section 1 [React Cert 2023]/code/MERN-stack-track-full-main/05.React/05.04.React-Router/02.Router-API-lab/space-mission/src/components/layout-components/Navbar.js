import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
        <nav className="col-md-6">
            <Link to="/mission">Mission</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact"></Link>
        </nav>
     );
}

export default Navbar;