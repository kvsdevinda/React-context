import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
const Home = () => {
    

    return(
    <div >
        <h2>Home </h2>
        <Link to="/Login">
          <button>Login</button>
        </Link>
        
    </div>
    ) ;
}

export default Home;
