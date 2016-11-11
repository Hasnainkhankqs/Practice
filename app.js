// var input = prompt("Enter your input");
// input = input.toLowerCase();
// var arry = ["ali","asma","saad","faizan","farhan"];
// for(i=0; i<arry.length ; i++){
//     if(input === arry[i]){
//     alert(input);
//     break;  
// }
//     else{
//     alert("Something heppen wrong");
// }
// }





// var input = prompt("Enter your input");
// firstChar = input.slice(0,1);
// remChar = input.slice(1);
// firstChar = firstChar.toUpperCase()
// remChar = remChar.toLowerCase()
// alert(firstChar+remChar)

// not working

// var input = prompt("Enter your input");
// input = input.length;
// for(i = 0 ; i < input ; i++){
//     if(input.slice[i,i+2] === "  "){
//         alert("Kindly don't use double spaces");

//     }
//     else{
//         alert("ok"); 
//     }
// }


// var text = "My name is Muhammad Hasnain Khan";
// texts = text.indexOf("Hasnain");
// if(texts !== -1){
//   text =  text.slice(0,texts)+"Ali"+text.slice(texts+7)
// }
// alert(text)
var text = prompt("Write any thing without !");
for(i = 0 ; i<text.length ; i++){
  if(text[i] === "!" ){
    alert("don't use !")

  }
  else{
    alert("You are brilliant coder")
  }
}                                                                  
