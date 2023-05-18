// function myApp(){
//   if(document.getElementById("btn").innerHTML==='Dark Theme'){
//     document.body.style.background='purple';
//     document.body.style.color='black';
//     document.getElementById('btn').innerHTML='Light Theme';
//   }
//   else{
//     document.body.style.background='black';
//     document.body.style.color='red';
//     document.getElementById('btn').innerHTML='Dark Theme'
//   }
// }
var icon=document.getElementById('icon');
var iconone=document.getElementById("icon1");

icon.onclick=function(){
  document.body.classList.toggle('dark-theme')
  if(document.body.classList.contains('dark-theme')){
    icon.src='sun.png';
  } else{
    icon.src='moon.png';
  }
}
iconone.onclick=function(){
    document.body.classList.toggle('dark-theme')
    if(document.body.classList.contains('dark-theme')){
      iconone.src='sun.png';
    } else{
      iconone.src='moon.png';
    }
}

