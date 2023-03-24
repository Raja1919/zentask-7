let input=document.querySelector("#result")

function btn(eve){
  input.value+=eve.innerText
}

let button=document.querySelector("#equal")
button.addEventListener('click',()=>{
  input.value=eval(input.value)
})

let allclear=document.querySelector(".allclear")
allclear.addEventListener('click',()=>{
  input.value=''
})

let clear=document.querySelector("#clear")
clear.addEventListener('click',()=>{
  input.value=input.value.slice(0,-1)
})


