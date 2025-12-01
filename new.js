// // question no 1-------------------------------
// let word = prompt("Enter a word:");
// alert("Character count: " + word.length);

// // question no2------------------------------------
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");

// let fullNameConcat = firstName.concat(" ", lastName);
// let fullNamePlus = firstName + " " + lastName;

// alert("Hello, " + fullNameConcat + "\n(Using +: " + fullNamePlus + ")");
// // question no 3----------------------------
// const s = "JavaScript is fun";
// let part = s.slice(4, 10);
// console.log(part);
// // question no 4---------------------------------------------------------------
// let input = prompt("Enter a comma-separated list:");
// let items = input.split(",");

// alert("Second item: " + items[1]);
// // question no 5-----------------------------------------------------------------------------
// let sentence = prompt("Enter a sentence:");
// let reversed = sentence.split(" ").reverse().join(" ");
// alert(reversed);


// let name="my name is deepak"
// let words=""
// let rev=""
// for (let i=name.length-1;i>=0;i--){
//     if (name[i] !==" "){
//         words=name[i]+words
        

//     }
//     else{
//         rev=rev+words+" "
//         words=" "
//     }
// }
// rev=rev+words
// console.log(rev)
// let name ="my name is deepak"
// rev=""
// for (let i=name.length-1;i>=0;i--){
//     rev=rev+name[i]
// }
// console.log(rev)
// str="cybrom"
// console.log(str.split('').reverse().join(''))



l=[12,40,15,8,74,59,3]
for (let i=0;i<=l.length;i++){
    if (l[i]%2==0){
         console.log(l[i])

    }
   
}