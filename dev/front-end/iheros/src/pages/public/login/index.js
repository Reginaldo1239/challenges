import React from 'react';
import FormLogin from '../../../container/form-login';
import './style.scss';
export default function Login(props){

    return(
        <div className='login'>
            <header>
               <div className="flex center">
                    <div className="logo">
                        <span>IHeros</span>
                    </div>
                    <div className="">
                        <FormLogin></FormLogin>
                    </div> 
                </div> 
            </header>
        </div>
    )
}  