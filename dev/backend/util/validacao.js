

exports.minLength=(value,minLength)=>{
    let regValue = new RegExp("\\w{"+minLength+",}",'g');
    if(regValue.test(value) &&  value !=undefined && value !=null){
        return true;
    }else{
        return false;
    } 
} 