let setdata=()=>{
    localStorage.setItem('My Name', "Deepak")
    localStorage.setItem("Age",23)
}
let show=document.querySelector('#okk')
show.innerHTML=localStorage.getItem("My Name")

let remdata=()=>{
    localStorage.removeItem("My Name")
}