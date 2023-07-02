
export const pageTerminal = (elementRefrence : any, elementCalss: string, operation: string)=>{
    if(operation === 'OPEN'){
       elementRefrence?.classList.add(elementCalss)
    }else{
       elementRefrence?.classList.remove(elementCalss)
    }
}