let obj = {
  khan:'this is object',
  value : 223132
}

function gh(a,b){

 console.log(this);

  
}

let val =new gh(obj)

function mohib(){
  this.username="this is created with constructor "
  this.age = 20 
  this.data = 'its working like object this.data'
  
}

let ans1 = new mohib ;