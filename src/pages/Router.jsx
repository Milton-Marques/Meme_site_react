import React from "react";
import { BrowserRouter } from "react-router-dom";
import {Route, Routes} from "react-router";
import Home from "./Home/Home.jsx"
import NewMeme from "./NewMeme/NewMeme.jsx";
import Milton from "./Milton/Milton";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/NewMeme" element={<NewMeme/>}/>
      <Route path="/Milton" element={<Milton />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Router;