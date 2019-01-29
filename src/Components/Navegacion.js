import React from 'react';
import { Link } from 'react-router-dom'
import '../css/Navegacion.css'


const Navegacion = () => {
    return ( 
        <nav className="col-12 col-md-8">
            <Link to={'/'}>All Post</Link>
            <Link to={'/crear'}>New Post</Link>
        </nav>
     );
}
 
export default Navegacion;