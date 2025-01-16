import React, { useEffect, useLayoutEffect } from 'react'

function Layouteffecttest() {

    useEffect (()=>{
        console.log("massage useeffect");
    },[]);

    useLayoutEffect (()=>{
        console.log("massage useLayoutEffect");
    },[]);

    return(
        <div>
            <h2>Test massage </h2>
            {Array(40000)
                .fill("")
                .map((item,index)=>(
                    <li key={index}>{Math.pow(Math.random(),10)}</li>
                ))
            }
        </div>
        ) ;
       
    
}
export default Layouteffecttest;