
    let vouchers=JSON.parse(localStorage.getItem("vochers"))

    let vochers=JSON.parse(localStorage.getItem("vochers"))||[];
    let y=0;
    for(var i=0;i<vochers.length;i++){
        y+=vochers[i].price;
    }
        

    
    displaydata(vouchers)

    function displaydata(vouchers){
      
     
         
         let cont=document.getElementById("purchased_vouchers");

         vouchers.map(function(el,index){
          

          let div=document.createElement("div")
          
          let img=document.createElement("img")
            img.src=el.image
          let name=document.createElement("p")
             name.innerText=el.name;
          let price=document.createElement("h2")
           price.innerText=el.price

           let btn=document.createElement("button")
               btn.innerText="Remove"
            btn.addEventListener("click",function(){
             
              deleteproduct(index)
             

            })

           div.append(img,name,price,btn)
           cont.append(div)

         })
       
     }

     function deleteproduct(index){
        vouchers.splice(index,1)

        localStorage.setItem("vochers",JSON.stringify(vouchers))
        window.location.reload()
     }

    