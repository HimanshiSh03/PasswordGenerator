const button=document.querySelector(".btn")
const pass=document.querySelector(".password")
const generatePassword= (iteration)=>{
    const chars="1234567890!@#$%^&*abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ/?/+-"
    let password=""

    for(let i=1;i<iteration;i++){
       const index=Math.floor(Math.random()* chars.length)
       password=password+chars[index]
    }
    return password
    }

button.addEventListener("click", (e)=>{
    e.preventDefault()

    const length=Number(document.querySelector(".length").value)
   

    if(length<=0){
        alert("Kindly enter a positive number")
    }else{
         pass.innerText=generatePassword(length)
    }

    
    
    
})