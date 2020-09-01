import React, { useState, useEffect } from 'react';
import {useHistory } from 'react-router-dom'
import Header from '../../../components/header';
import ListHeroContainer from '../../../container/list_heroes';
import Main from '../../../components/main';
import Button from '../../../components/button'
import Menu from '../../../components/menu';
import Footer from '../../../components/footer';
import './style.scss';
export default function Hero(props){
    
    let history = useHistory();
 

    const handleButtonClickNewHero=()=>{
        history.push('/hero/novo')
    }
    return(
<div className="hero_page">
     <Header></Header>
 
        <Main>
            <Menu pathname={history.location.pathname}></Menu>
     <div className="novo_heroi">
         <div className='flex'>
         <Button
         onClick={()=>handleButtonClickNewHero()}
         title={'novo heroi'}></Button>
         </div>
     </div>
            <div className="flex center">
             <ListHeroContainer></ListHeroContainer>
            </div>
         </Main>
         <Footer></Footer>
</div>
    )
}              