import React, {useContext} from 'react';
import { AppContext } from '../Context/AppContext';

const Footer = () => {
    const phone1 = useContext(AppContext);

    return(
    <div>
        <h2>Footer </h2>
        <h3>Phone : {phone1}</h3>
    </div>
    ) ;
}



export default Footer;