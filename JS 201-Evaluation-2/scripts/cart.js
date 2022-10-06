
  
  function append(){
      
      let cart_items=JSON.parse(localStorage.getItem("items"))||[];
      let y=0;
      for(var i=0;i<cart_items.length;i++){
          y+=cart_items[i].price;
      }

   let h2=document.createElement("h2").innerHTML=y;
    document.getElementById('cart_total').append(h2)
    let cart=document.getElementById("cart")
    cart.innerHTML=null;
    cart_items.forEach(function(element,index) {
      let div=document.createElement('div')
      let img=document.createElement("img")
      img.src=element.image;
      let h4=document.createElement("h4")
      h4.innerHTML=element.name;

      let h3=document.createElement("h3")
      h3.innerHTML=element.price;
      let btn=document.createElement("button")
      btn.setAttribute("class","remove")
      btn.innerHTML="Remove";
      btn.addEventListener("click",function(){
        deleteItem(index)
        
      
      })
      div.append(img,h4,h3,btn)
       cart.append(div)
    });
  } 
  
  append()

  function deleteItem(index){
    let cart_items=JSON.parse(localStorage.getItem("items"))||[];
    let carts=cart_items.filter(function(elem,i){
        return i!==index;
    })
    localStorage.setItem("items",JSON.stringify(carts))
    append();
    
 
  }

  document.getElementById("checkout").addEventListener("click",myfunction)
  function myfunction(){
    window.location.href="checkout.html"
  
  }
