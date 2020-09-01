import React,{useState} from 'react';
import './style.scss';
import ItemListHero from '../item_list_hero';
export default function Paginacao(props){
    let {limit,itensCarregados,page} = props;
 
    const onClickBeforePage=()=>{
        props.onClickBeforePage();
    }
    const onClickNextPage=()=>{
        props.onClickNextPage();
    }
    const onChangeValuePage=(event)=>{
        let value =event.target.value;
        if(/^\d*$/.test(value) &&value !='0'){   
        props.onChangeValuePage(value);
    
        }

    }
    return (

        page ==1&& limit !=itensCarregados?(
                <></>
        ):(
            <div className="component_paginacao">
            <div className="flex">
                {page>1&& 
                <div className="button"> 
                        <button onClick={()=>onClickBeforePage()}>{'<'}</button>
                    </div>
                    }    
                    <div className="input">
                        <input
                        value={page}
                        onChange={(event)=>{onChangeValuePage(event)}}
                        />
                     </div>
                     {limit ==itensCarregados&&
                <div className="button">
                        <button onClick ={()=>{onClickNextPage()}} >{'>'}</button>
                     </div> }   
            </div>        
        </div>

        )
    )
}  