import React from 'react'
import './style.scss';
export default function NaoEncontrado(){
    
    return(
        <div className="nao_encontrado_page">
            <div className="msgError align_text_center">
                <div>
                    <span>404</span>
                </div>
                <div>
                    <span>pagina não encontrada</span>
                </div>
            </div>
        </div>
    )
} 