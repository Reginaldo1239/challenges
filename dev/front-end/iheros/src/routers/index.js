import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from '../pages/public/login';
import Hero from '../pages/private/hero';
import CriarOuEditarHero from '../pages/private/criar_ou_editar_hero';
import Batalhas from '../pages/private/batalhas';
import PrivateRoute from '../routers/private/index';
import PublicRoute from '../routers/public';
import NaoEncontrado from '../pages/public/naoEncontrado.js'

export default function Routers(props){
        return( 
            <Router>  
                <Switch>
             
                <PublicRoute   exact={true}  path="/" component={Login} />
                <PrivateRoute exact={true}  path="/hero/novo" component={CriarOuEditarHero}/> 
                <PrivateRoute exact={true}   path="/batalhas" component={Batalhas}/> 
                <PrivateRoute exact={true}  path="/hero/editar/:id_hero" component={CriarOuEditarHero}/> 
                <PrivateRoute  exact={true} path="/hero" component={Hero} />
        
                <Route component={NaoEncontrado}></Route>
                </Switch>
              
                 
            </Router> 
            
        ) 
}