

var arr=JSON.parse(localStorage.getItem("data")) || [];

   arr.map(function(el,index){
    let box=document.createElement("div");
    let image=document.createElement("img");
    let name=document.createElement("h3");
    let price=document.createElement("p");
    let brand=document.createElement("p");
    let btn=document.createElement("button");


    image.src=el.image;
    name.innerText=el.name;
    price.innerText=el.price;
    brand.innerText=el.brand;
    btn.innerText="Remove Product"
    btn.setAttribute("id","remove_product")
    btn.addEventListener("click",function(){
      remove_items(el,index);
    })



    box.append(image,name,price,brand,btn)

    document.getElementById("products_data").append(box)
  })

  function remove_items(el,index){
    arr.splice(index,1)
    localStorage.setItem("data",JSON.stringify(arr))
    window.location.reload()
  }