import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom';
import CriarOuEditarHeroContainer from '../../../container/criar_ou_editar_hero';
import Header from '../../../components/header';
export default function EditarHero(props){

    return( 
        <div className="page_editar_hero">
                  <Header></Header>
            <CriarOuEditarHeroContainer></CriarOuEditarHeroContainer>
        </div>
    )
}      