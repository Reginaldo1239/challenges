import React from 'react';
import {useHistory} from 'react-router-dom';
import Menu from '../../../components/menu';
import Header from '../../../components/header';
import Main from '../../../components/main';
import Footer from '../../../components/footer';
import ListarBatalhasContainer  from '../../../container/listar_batalhas';

export default function Batalhas(props){
    let history=useHistory();
return(
    <div className="batalhas_page flex">
         <Header></Header>
       
         <Main>
         <Menu pathName={history.location.pathname}></Menu>
             <ListarBatalhasContainer  ></ListarBatalhasContainer>
         </Main>
         <Footer></Footer>
     </div>
    ) 
}