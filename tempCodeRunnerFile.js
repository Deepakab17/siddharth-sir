let name="my name is deepak"
let words=""
let rev=""
for (let i=name.length-1;i>=0;i--){
    if (name[i] !==" "){
        words=name[i]+words
        

    }
    else{
        rev=rev+words+" "
        words=" "
    }
}
rev=rev+words
console.log(rev)