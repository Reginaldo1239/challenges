

export const minLength=(value,minLength)=>{
    let regValue = new RegExp("\\w{"+minLength+",}",'g');
    if(regValue.test(value) &&  value !=undefined && value !=null){
        return true;
    }else{
        return false;
    } 
} 
export const maxLength=(value,maxLength)=>{
    if(typeof value=='string'){
        if(value.length<=maxLength){
            return true
        }else{
            return false;
        } 
    }else{ 
        return false;
    }
} 
export const  classeHero = (classe)=>{
    let classeValida = false;

    switch(classe){
        case "S":
            classeValida = true;
            break;
        case "A":
            classeValida = true
            break;
        case "B":
            classeValida = true;
            break;
        case "C" :
            classeValida = true;
            break;    
    }
 
    return classeValida;     
}

export const isNumber  = value=>{
    if(/^\d*$/.test(value)){
        return true;
    }else{ 
        return false;
    }

}

 
  