

export const  saveData=(name,value)=>{
     localStorage.setItem(name, value);
}
export const readData = (name)=>{
   return localStorage.getItem(name);
}
export const removeData = (name)=>{

   localStorage.removeItem(name);

}