let validFrame = (rolls) =>{
  if(!Array.isArray(rolls)){
    throw new Error('Rolls not an array');
  }
  rolls.forEach((element)=>{
    if(typeof element !== 'number'){
      throw new Error('Invalid Frame');
    }
  })
}

let score = (rolls) =>{

    validFrame(rolls);
    let result = 0;
    let currIndex = 0;
    
    for(let i=0;i<=9;i++)
    {

      // console.log(result+" "+currIndex+" "+i+"\n")
      let moveIndex=currIndex;

      if(rolls[moveIndex]===10){
        while((moveIndex<rolls.length)&&(rolls[moveIndex]===10)){
          result+=10;
          ++moveIndex;
        }
        if((i==9)&&(moveIndex===rolls.length)){
          break;
        }
        if((moveIndex+1<rolls.length)){
          result+=rolls[moveIndex];
          ++moveIndex;
          result+=rolls[moveIndex];
        }
        else{
          throw new Error('Rolls contains more than 10 frames');
        }
        ++currIndex;
        if((i==9)&&(moveIndex!==rolls.length)){
          throw new Error('Rolls contains more than 10 frames');
        }
        continue;
      }
      

      //Case for spare

      if(moveIndex+1<rolls.length){
        if(rolls[moveIndex]+rolls[moveIndex+1]===10){
          result+=10;
          currIndex+=2;
          moveIndex+=2;
          if(moveIndex<rolls.length){
            result+=rolls[moveIndex];
          }
          else{
            throw new Error('Rolls contains more than 10 frames');
          }
        }
        else{
          result+=rolls[moveIndex]+rolls[moveIndex+1];
          currIndex+=2;
        }
      }
      else{
        throw new Error('Rolls contains more than 10 frames');
      }

      if((i==9)&&(currIndex!==rolls.length)){
        throw new Error('Rolls contains more than 10 frames');
      }
    }
    return result;

}

let bestScore = (rolls) =>{
  validFrame(rolls);
    let result = 0;
    let currIndex = 0;
    let maxRes = 0;
    let prevRes = 0;
    for(let i=0;i<=9;i++)
    {
      let moveIndex=currIndex;
      if(i>=1){
        if((result-prevRes)>maxRes){
          maxRes=(result-prevRes)
        }
        prevRes=result;
      }
      if(rolls[moveIndex]===10){
        while((moveIndex<rolls.length)&&(rolls[moveIndex]===10)){
          result+=10;
          ++moveIndex;
        }
        if((i==9)&&(moveIndex===rolls.length)){
          break;
        }
        if((moveIndex+1<rolls.length)){
          result+=rolls[moveIndex];
          ++moveIndex;
          result+=rolls[moveIndex];
        }
        else{
          throw new Error('Rolls contains more than 10 frames');
        }
        ++currIndex;
        if((i==9)&&(moveIndex!==rolls.length)){
          throw new Error('Rolls contains more than 10 frames');
        }
        continue;
      }
      

      //Case for spare

      if(moveIndex+1<rolls.length){
        if(rolls[moveIndex]+rolls[moveIndex+1]===10){
          result+=10;
          currIndex+=2;
          moveIndex+=2;
          if(moveIndex<rolls.length){
            result+=rolls[moveIndex];
          }
          else{
            throw new Error('Rolls contains more than 10 frames');
          }
        }
        else{
          result+=rolls[moveIndex]+rolls[moveIndex+1];
          currIndex+=2;
        }
      }
      else{
        throw new Error('Rolls contains more than 10 frames');
      }

      if((i==9)&&(currIndex!==rolls.length)){
        throw new Error('Rolls contains more than 10 frames');
      }
    }
    return maxRes;
}
console.log(bestScore([6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))