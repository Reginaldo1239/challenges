import React from 'react';

import CriarOuEditarHeroContainer from '../../../container/criar_ou_editar_hero';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import Main from '../../../components/main'
import './style.scss';
export default function CriarOuEditarHeroPage(props){

    return(
        <div className="page_criar_hero">
            <Header></Header>
            <Main>
           
                 <CriarOuEditarHeroContainer></CriarOuEditarHeroContainer>
               
         
            </Main>
            <Footer></Footer>
             
        </div>
    ) 
}  