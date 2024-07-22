"use strict"
    const imput  = document.queryselctor('.imput')
    const result = document .querySelector('result')
    const deletebtn = document .querySelector('delete')
    const keys = document   .querySelector('bottom span')

    let operation = ""
    let answer 
    let decimladded = false 

    const operatora = ['+', "-", 'x', "/"]

    function handlekeypress (e){

        const key = e .target . dataset.key
        const lastchar = operation [operation. length]

        if (key === ''){  
        }
        if (key=== '.' && decimladded){
            return
        }

        if(operations.index0f(key) !==-1 ){
            decimladded = false
        }

    
if (operation .length === 0 && key === '-'){
    operation += key
    imput.innerHTML= operation
    return
}




if(opertors. index0f (lastchar)!== -1 && opertors .index0f (key) !== -1){
    operation = operation .replace (/.$/,key)
    imput.innerHTML=operation
    return
}










key. forEach(key =>{
    key.addEventListener('click', handlekeypress)
    })
}