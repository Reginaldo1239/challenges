import React from 'react';
import  './style.scss';
export default function Main(props){
    let {children} =props;
    return(
        <main className="component_main center">
            <div className="flex" >
            {children}
            </div>
        </main>
    )
}  