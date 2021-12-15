import React from "react";
import './Content.css'
import { Routes, Route } from "react-router-dom";
import About from "../../views/exemples/About";
import Home from "../../views/exemples/Home";
import Param from "../../views/exemples/Param";
import NotFound from "../../views/exemples/NotFound";

const content = props => {
    return(
        <main className="Content">
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/param/:id" element={<Param/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </main>
    )
}

export default content