import React from 'react';
import { Link } from 'react-router-dom';


const Menu = () =>{
return (
    <>
   <Link to='/covid'> Covid Page</Link>
   <Link to='/todo'> Todo Page</Link>

    </>
)
}

export default Menu;