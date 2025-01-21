import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

export default function Protected({children}) {
    const authstatus = useSelector ((state) => state.auth.status);

    const navigate = useNavigate();
    const [loader,setloader] = useState(true);
    useEffect (() => {
        if (!authstatus) {
            navigate("/Login");
        } else {

        }
        setloader(false);
    },[authstatus, navigate]);

  return loader ? <div>Loading....</div> : <>{children}</>;
   
}
