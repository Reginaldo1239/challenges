import fetch from 'cross-fetch';
import {readData} from '../util/local_storage';

const BASEURL = process.env.REACT_APP_BASEURL;

export const post=  (endPoint,body)=>{
return new Promise( async (resolver,reject)=>{  
    fetch(BASEURL+endPoint, {
        method: 'POST',
        headers:{
           Accept: 'application/json',
           'Content-Type': 'application/json',
           'token':  readData('token')
        },
        body: JSON.stringify(body)
      }).then((data)=>resolver({status:data.status,data:data.json()})).catch((e)=>{console.log(e)}) 
      

})
} 
  
 
export const get = async (endPoint) =>{
    return new Promise(async(resolver,reject)=>{
        fetch(BASEURL+endPoint, {
          headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'token':  readData('token')
         },
          }).then((data)=> resolver({status:data.status,data:data.json()} ))
          .catch((e)=>console.log(e))
          } )
 
    }


export const del =  (endpoint,body)=>{
    return new Promise(async(resolver,reject)=>{
        fetch(BASEURL+endpoint,{
          method: 'DELETE',
          headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'token': readData('token')
         },
          body: JSON.stringify(body)
        }).then((data)=>resolver({status:data.status,data:data.json()}))
    })
}
export const put = async (endPoint,body)=>{
  return new Promise(async(resolver,reject)=>{
    fetch(BASEURL+endPoint,{
      method:'PUT',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'token': readData('token')
     },
      body:JSON.stringify(body)
    }).then((data)=>resolver({status:data.status,data:data.json()})).catch((e)=>{console.log(e)})
  }) 
}