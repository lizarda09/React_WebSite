import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

 const Navbar = () => {
     return <navbar className={classes.navbar}>
         <div>
             <NavLink to="/profile" className={classes.item}>Profile</NavLink>
         </div>
         <div>
             <NavLink to="/messages" className={classes.item}>Messages</NavLink>
         </div>
         <div>
             <NavLink to="/news" className={classes.item}>News</NavLink>
         </div>
         <div>
             <NavLink to="/music" className={classes.item}>Music</NavLink>
         </div>
         <div>
             <NavLink to="/settings" className={classes.item}>Settings</NavLink>
         </div>
     </navbar>
 }

 export default Navbar;