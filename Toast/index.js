let button= document.getElementById("button")
let toast= document.getElementById("toast")
button.addEventListener("click", ()=>{
    
    toast.style.display="flex"
    setTimeout(()=>{
        toast.style.display="none"
    },2000)
    
}
)
