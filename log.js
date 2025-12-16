let FormValidate=()=>{

    let Name = document.querySelector('#name').value.trim()
    let Number = document.querySelector('#number').value.trim()
    let Email = document.querySelector('#email').value.trim()
    let Pass = document.querySelector('#pass').value.trim()
    let Cpass = document.querySelector('#cpass').value.trim()

    let Errname = document.querySelector('#errname')
    let Errnumber = document.querySelector('#errnumber')
    let Erremail = document.querySelector('#errEmail')
    let Errpass = document.querySelector('#errpass')
    let Errcpass = document.querySelector('#errcpass')

    Errname.innerHTML = ""
    Errnumber.innerHTML = ""
    Erremail.innerHTML = ""
    Errpass.innerHTML = ""
    Errcpass.innerHTML = ""

    if (Name === ""){
        Errname.innerHTML = "name likh naa be"
        return false
    }

    if (Number === ""){
        Errnumber.innerHTML = "Number Do"
        return false
    }

    if (isNaN(Number) || Number.length !== 10){
        Errnumber.innerHTML = "Enter valid 10 digit number"
        return false
    }

    if (!(Email.includes("@") && Email.includes(".com"))){
        Erremail.innerHTML = "Enter valid email"
        return false
    }

    if (
        !(Pass.match(/[0-9]/) &&
          Pass.match(/[!@#$^&*]/) &&
          Pass.match(/[a-z]/) &&
          Pass.match(/[A-Z]/))
    ){
        Errpass.innerHTML = "Enter strong password"
        return false
    }

    if (Cpass === ""){
        Errcpass.innerHTML = "Confirm password"
        return false
    }

    if (Cpass !== Pass){
        alert("Password does not match")
        return false
    }

    localStorage.setItem("name", Name)
    localStorage.setItem("number", Number)
    localStorage.setItem("email", Email)
    localStorage.setItem("password", Pass)

    location.href='signup.html'
    return false
}




let Login =()=>{

    let LoginName=document.querySelector("#Loginname").value
    let LoginPass=document.querySelector("#Loginpass").value

    let LocalName=localStorage.getItem("name")
    let LocalPass=localStorage.getItem("password")

    if (LocalName==LoginName && LocalPass==LoginPass){
        location.href='home.html'
        return false
    }
    else{
        alert("please enter valid password")
        return false
    }


}