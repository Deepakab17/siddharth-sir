let FormValidate=()=>{
    let Name=document.querySelector('#name').value.trim()
    let Number=document.querySelector('#number').value.trim()
    let Email=document.querySelector('#email').value.trim()
    let Pass=document.querySelector('#pass').value.trim()
    let Cpass=document.querySelector('#cpass').value.trim()

    let Errname=document.querySelector('#errname')
    let Errnumber=document.querySelector('#errnumber')
    let Erremail=document.querySelector('#errEmail')
    let Errpass=document.querySelector('#errpass')
    let Errcpass=document.querySelector('#errcpass')


    if (Name==""){
        Errname.innerHTML="naam likh naa be"
        Errname.style.color='aqua'
        return false
    }
    else if (Number==""){
        Errnumber.innerHTML="number do "
        Errnumber.style.color='aqua'
        return false
    }
    if (Number.length!=10){
        Errnumber.innerHTML="please enter valid number"
        return false
    }
    else if(isNaN(Number)){
        Errnumber.innerHTML="please enter  number"
        return false

    }
    if (!(Email.includes("@") && Email.includes('.com'))){
        Erremail.innerHTML="Email do"
        Erremail.style.color='aqua'
        return false
    }
    if (!(Pass.match(/[1234567890]/)&&
    Pass.match(/[!@#$^&*]/)&&
    Pass.match(/[a-z]/)&&
    Pass.match(/[A-Z]/)
    ))
    if (Cpass==""){
        Errpass.innerHTML="please enter strong password"
        Errpass.style.color='aqua'
        return false
    }
    else if(Cpass != Pass){
        alert("password does not match")
        return false
    }

localStorage.setItem("name",Name)
localStorage.setItem("number",Number)
localStorage.setItem("email",Email)
localStorage.setItem("password",Pass)
location.href="login.html"
return false
}



let Login =()=>{

    let LoginName=document.querySelector("#Loginname").value
    let LoginPass=document.querySelector("Loginpass").value

    let LocalName=localStorage.getItem("name")
    let LocalPass=localStorage.getitem("pass")

    if (LocalName==LoginName && LocalPass==LoginPass){
        locations.herf='home.html'
        return false
    }
    else{
        alert("please enter valid password")
        return false
    }


}