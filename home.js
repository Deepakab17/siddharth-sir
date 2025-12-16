let username = localStorage.getItem("name")

if (username) {
    document.querySelector("#logname").innerHTML =
        `WELCOME TO HOME PAGE <br>
         <h2> ${username} </h2>`
} else {
    location.href = "login.html"
}
