let FormValidate=()=>{
    let Name=document.querySelector('#name').value
    let Number=document.querySelector('#number').value
    let Email=document.querySelector('#email').value
    let Pass=document.querySelector('#pass').value
    let Cpass=document.querySelector('#cpass').value

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
        Errname.innerHTML="number do "
        Errname.style.color='aqua'
        return false
    }
    else if (Email==""){
        Errname.innerHTML="Email do"
        Errname.style.color='aqua'
        return false
    }
    else if (Pass==""){
        Errname.innerHTML="Maza aaya"
        Errname.style.color='aqua'
        return false
    }
    else if (Cpass==""){
        Errname.innerHTML="kaisa laga"
        Errname.style.color='aqua'
        return false
    }

}