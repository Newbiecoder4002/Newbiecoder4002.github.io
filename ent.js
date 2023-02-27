let reply = document.querySelector(".reply")
let entFirstName=document.querySelector(".entFirstName")
let entLastName=document.querySelector(".entLastName")
let entAns=document.querySelector(".entAns")
entLastName.addEventListener("change",function(){
    reply.innerText=`Welcome ${entFirstName.value} ${entLastName.value} to entertainment zone, I know it's not so entertaining tho but still check it out, i will improve and implement new and cool stuff in future`
})
entAns.addEventListener("change",function(){
    if(entAns.value==12345){
        reply.innerText="Congrats You did it!!! You have reached the ultimate level of patience"
    }
})