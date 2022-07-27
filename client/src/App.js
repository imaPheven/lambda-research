import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./App.scss"
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import MyNavbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";


import SampleForm from "./components/sample/form";
import SampleColors from "./components/sample/colors";
import Placeholder from "./components/sample/placeholder";
 
const App = () => {
 return (
   <div className="container">
     <MyNavbar />
     <Routes>
       <Route exact path="/" element={<RecordList />} />
       <Route path="/edit/:id" element={<Edit />} />
       <Route path="/create" element={<Create />} />
       <Route path="/sample/form" element={<SampleForm />} />
       <Route path="/sample/colors" element={<SampleColors />} />
       <Route path="/sample/placeholder" element={<Placeholder />} />
     </Routes>
   </div>
 );
};
 
export default App;