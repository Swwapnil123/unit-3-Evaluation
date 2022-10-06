document.querySelector("#form").addEventListener("submit", myFunction);

function myFunction(){
  event.preventDefault();
 // console.log("inside")
  var name = document.querySelector("#name").value;   
  var number = document.querySelector("#number").value;
  var address = document.querySelector("#address").value;

  //console.log(name,number,address);
  setTimeout(function(){
   alert("Your order is accepted")
  },0)
  setTimeout(function(){
   alert("Your order is being prepared")
  },3000)
  setTimeout(function(){
   alert("Your order is being packed")
  },8000)
  setTimeout(function(){
   alert("Your order is out for delivery")
  },10000)
  setTimeout(function(){
   alert("order delivered")
  },12000)
  
}