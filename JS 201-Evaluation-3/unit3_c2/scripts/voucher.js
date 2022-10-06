
       
       async function getdata(){
        let url ="https://masai-vouchers-api.herokuapp.com/api/vouchers"
        try{
          let res= await fetch(url);

          let voucher=await res.json()
          console.log(voucher)
        append(voucher[0].vouchers)
        }
        catch(err){
          console.log("err",err)
        }
       }

       getdata();

       let vouch=JSON.parse(localStorage.getItem("vochers"))||[];
      let  vouchers=JSON.parse(localStorage.getItem("user"))


       function append(voucher){
         
           let cont=document.getElementById("voucher_list");

           voucher.map(function(el){
            
            let div=document.createElement("div")
            
            let img=document.createElement("img")
              img.src=el.image
            let name=document.createElement("p")
               name.innerText=el.name;
            let price=document.createElement("h2")
             price.innerText=el.price

             let btn=document.createElement("button")
                 btn.innerText="Buy"
              btn.addEventListener("click",function(){
               
                voucheradd(el)
               

              })

             div.append(img,name,price,btn)
             cont.append(div)

           })
         
       }
     
  
       let cart=JSON.parse(localStorage.getItem("vochers"))||[];
        let total = cart.length;                                        
        let item_div = document.querySelector("#vocher");      
        item_div.innerText=total;
    

       function voucheradd(el){
          
          vouch.push(el)
          localStorage.setItem("vochers",JSON.stringify(vouch));
          window.location.reload();


        }


