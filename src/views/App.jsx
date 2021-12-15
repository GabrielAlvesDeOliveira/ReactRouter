import React from "react";
import './App.css'
import Menu from '../components/layout/Menu'
import Content from "../components/layout/Content";

const app = props => {
    
    return(
        <div className="App">
        <Menu/>
        <Content/>
        </div>
    )
    
}

export default app