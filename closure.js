// closure k matlb hai ka koie bhi function k andar dusra function chalai and uska chi;ld function apna parent function ki kkoie hi ak variable use krai usko closure function kehta hai 

function clsr(){
  var a = 'tis is value of parent '

  const child=()=>{
    console.log(a);
    
  }
  child();
}
let sav = clsr()