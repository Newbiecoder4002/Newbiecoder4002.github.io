
let cAns=document.querySelectorAll(".cAns")
for(let i=0;i<5;i++){
cAns[i].addEventListener("click",function(){
    cAns[i].innerText="Correct Answer!"
    cAns[i].style.backgroundColor="green"
})}
  


