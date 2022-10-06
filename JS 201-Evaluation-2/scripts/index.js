
 // The items should be stored in local storage with key :- “items”
// API :- https://grocery-mock-api.herokuapp.com/items
async function getData(){
    try{
        let url="https://grocery-mock-api.herokuapp.com/items"
        let res=await fetch(url)
        let data=await res.json();
        append(data.data)
        // console.log(data.data)
     }catch(err){
      console.log(err)
     }
  }
  getData()

  function append(data){
    let groce=document.getElementById("items")
    data.forEach(element => {
      let div=document.createElement('div')
      let img=document.createElement("img")
      img.src=element.image;
      let h4=document.createElement("h4")
      h4.innerHTML=element.name;

      let h3=document.createElement("h3")
      h3.innerHTML=element.price;
      let btn=document.createElement("button")
      btn.innerHTML="Add to cart";
      btn.addEventListener("click",function(){
        addItemtoCart(element)
      })
      div.append(img,h4,h3,btn)
       groce.append(div)
    });
  
  }

  let cart=JSON.parse(localStorage.getItem("items"))||[];

     let total = cart.length;                                        
      let item_div = document.querySelector("#item_count");      
      item_div.innerText=total
      // window.location.reload();

  
  function addItemtoCart(element){  
    cart.push(element)
    localStorage.setItem("items",JSON.stringify(cart))
    window.location.reload();

  }

