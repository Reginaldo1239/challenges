import React,{useState} from 'react';
import Label from '../../components/label';
import Button from '../../components/button';
import './style.scss'; 
export default function FormLogin(props){

    const [name,setName] = useState('');
    const [password,setPassword] = useState('');

   const handlechangeName=(event)=>{
        setName(event.target.value)
   }
   const handlechangePassword =(event)=>{
        setPassword(event.target.value);
   }
    return(
        <form className='form_login'>
            <div className="form_group">
                <Label title='nome' ></Label>
                <input
                    type='text'
                    value={name}
                    onChange={(event)=>handlechangeName(event)}
                ></input>
            </div>
            <div className="form_group">
                <Label title='senha' ></Label>
                <input
                    type='password'
                    value={password}
                    onChange={(event)=>handlechangePassword(event)}
                ></input>
            </div>
            <div className="form_group">
                <Button 
                onClick={()=>console.log('s')}
                title='enviar'></Button>
            </div>
        </form>
    )
}