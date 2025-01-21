import React, {useContext} from 'react';
import { AppContext } from '../Context/AppContext';

const Login = () => {
    const phone = useContext(AppContext);

    return(
    <div>
        <h2>Login </h2>
      
    </div>
    ) ;
}



export default Login;