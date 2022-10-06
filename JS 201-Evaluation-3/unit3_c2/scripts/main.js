document.querySelector("#form").addEventListener("submit",hairproducts)

let list= JSON.parse(localStorage.getItem("list"))||[]
function hairproducts(){
  event.preventDefault()

  let user={
    name:form.name.value,
    email:form.email.value,
    adrs:form.address.vaue,
    wallet:form.amount.value
  }

  list.push(user)
  console.log(name)
  localStorage.setItem("user",JSON.stringify(list))


  window.location.href="voucher.html"
}