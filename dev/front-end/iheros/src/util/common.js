import {removeData} from './local_storage'
export const cleanAuth = ()=>{
    removeData('token');
    removeData('id_usuario');
    removeData('nome');
} 