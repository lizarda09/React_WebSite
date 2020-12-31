import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
  return (
       <div className='wrapper'>
           <Header />
           <Navbar />
           { /*<Profile />*/}
           <div className="wrapper_content">
               <Dialogs />
           </div>

       </div>
  );
}

export default App;
