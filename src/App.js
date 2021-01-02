import React from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, BrowserRouter} from "react-router-dom";

const App = (props) => {
  return (
      <BrowserRouter>
           <div className='wrapper'>
               <Header />
               <Navbar />
               <div className="wrapper_content">
                   <Route path="/messages" render={() => <Dialogs messages={props.messages} dialogs={props.dialogs}/> }/>
                   <Route path="/profile" render={()=> <Profile posts={props.posts}/> }/>
               </div>
           </div>
      </BrowserRouter>
  );
}

export default App;
