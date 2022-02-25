//Solution 1
function wave(str){
    let result=[]
  for(let i=0;i<str.length; i++){
    if(str[i] !== ' '){
    let copyStr = str.split('')
    let capLetter =  copyStr[i].toUpperCase()
    copyStr[i] = capLetter
    copyStr = copyStr.join('')
    result.push(copyStr)
    }
  }

return result

}



//Solution 2
const wave=(str)=>{
    let arr=[]
    for(let i=0; i<str.length; i++){
        if(str[i] !== ' '){
            let copyStr=str
            copyStr= copyStr.substr(0, i) + copyStr.charAt(i).toUpperCase() + copyStr.substr(i+1)
            arr.push(copyStr)
        }
       
     
    } 
    return arr

}


console.log(wave('codewars'))
console.log(wave('two words'))
console.log(wave(''))
