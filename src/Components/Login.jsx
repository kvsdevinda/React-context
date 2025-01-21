import React, {useContext} from 'react';
import { AppContext } from '../Context/AppContext';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const Login = () => {
    const phone = useContext(AppContext);

    return(
    <div>
        <h2>Login </h2>
        <Link to="/Home">
          <button>Home</button>
        </Link>
      
    </div>
    ) ;
}



export default Login;