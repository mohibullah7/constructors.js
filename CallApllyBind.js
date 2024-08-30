// its actually a way of calling of function using object.this method 

let obj = {
  khan:'khan',
  cal :21212

  
}

const arr =[212,2121,31231,31231,131,1313,13]

function abcd(){
  console.log(this);
  
}
// abcd.call(obj);
abcd.call(arr);
// appply we give parameters 

let obj2 = {
  name:'mohib khan',
  call :23232,
  cnic :2
}

function blindM(a,b,c){
  console.log(this,a,b,c);
  
}
blindM.apply(obj2,[1,'this is value',3])

//bind direct answer nahi deta but maai chlna k liya function deta hai 

const baadmai = abcd.bind(obj2);
baadmai(); 

const app = blindM.apply(obj);
// app();