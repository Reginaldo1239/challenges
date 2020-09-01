import React from 'react';
import FormLoginContainer from '../../../container/form_login';
import Logo from '../../../components/logo';
import Footer from '../../../components/footer';
import Main from '../../../components/main';
import './style.scss'; 
export default function Login(props){

    return(
     
        <div className='login'>
            <header>
               <div className="flex center">
                    <div className="box">
                        <Logo></Logo>
                    </div>
                    <div className="box">
                        <FormLoginContainer ></FormLoginContainer>
                    </div> 
                </div> 
            </header>
            <Main></Main>
            
            <Footer></Footer>
        </div>
  
    )
}  