let fetchData=async()=>{
    // let api= "https://jsonplaceholder.typicode.com/users"
    let api ="https://jsonplaceholder.typicode.com/posts"
    let res= await fetch(api,{"method":"GET"})
    let data=await res.json()
    // console.log(res)
    console.log(data)
    let show=document.querySelector('#showData')
    data.map((e)=>{
        show.innerHTML+=`
        <tr> 
        <td>${e.id} </td>
        <td>${e.title} </td>
        <td>${e.body} </td>



        </tr>
        
        
        `
    })


}
fetchData()