
const findJudge=()=>{
    for(let i=0; i<trust.length; i++){
        let secondPlace=trust[i][1]
        for(let j=0; j<trust.length; j++){
            if(trust[0][j]===secondPlace){
                return -1
            }
            return secondPlace
        }
    }
}

console.log(findJudge(3, [[1,3],[2,3],[3,1]]))
console.log(findJudge(2, [[1,2]]))
console.log(findJudge(2,[[1,2]]))