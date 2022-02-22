//Counter the occurence of characters by converting them to an object and using Object methods

const countMaxLetter=(str)=>{
    let s=str.split('').sort()
    let obj={}
    for(let i=0; i<s.length;i++){
        if(!obj[s[i]]){
            obj[s[i]]=1
        }
        else{
            obj[s[i]]++
        }
    }
    console.log(obj)
    console.log(Object.keys(obj))
    
    let val= Math.max(...Object.values(obj))
    for(let i in obj){
        // console.log('It is ', i)
        if(obj[i]===val){
           return i
        }
    }
   
  
}

console.log(countMaxLetter("aacbbbcdde"))