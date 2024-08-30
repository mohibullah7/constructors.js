let prnt = document.querySelector('#parent');
prnt.addEventListener(`click`, function(event){
  if(event.target.id === 'play'){
    console.log('play the song');
    
  }
  else if(event.target.id === 'pause'){
    console.log('pause the song');
    
  }

});


let val = document.querySelector('#aba');
val.addEventListener('mouseover',function(chacha){
  if(chacha.target.id === 'hd'){
    console.log('your name is changed with class instead of id ');
    
  }
  
})