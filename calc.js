let calData=document.querySelectorAll(".calData")
let calDisplay = document.querySelector(".calDisplay")
calDisplay.innerText=""
for(let i=0;i<15;i++){
    calData[i].addEventListener("click",function(){
        calDisplay.innerText= calDisplay.innerText+calData[i].innerText
    })
}
calData[15].addEventListener("click",function(){
    calDisplay.innerText=eval(calDisplay.innerText)
})
calData[13].addEventListener("click",function(){
    calDisplay.innerText=""
})
