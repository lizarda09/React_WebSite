import React from 'react';
import classes from './Navbar.module.css';

 const Navbar = () => {
     return <navbar className={classes.navbar}>
         <div>
             <a href="" className={classes.item}>Profile</a>
         </div>
         <div>
             <a href="" className={classes.item}>Messages</a>
         </div>
         <div>
             <a href="" className={classes.item}>News</a>
         </div>
         <div>
             <a href="" className={classes.item}>Music</a>
         </div>
         <div>
             <a href="" className={classes.item}>Settings</a>
         </div>
     </navbar>
 }

 export default Navbar;