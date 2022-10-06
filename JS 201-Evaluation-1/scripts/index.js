//store the products array in localstorage as "data"
document.querySelector("#product_form").addEventListener("submit",myfunction);
let arr=JSON.parse(localStorage.getItem("data"))||[];
function myfunction(){
    event.preventDefault();
    let obj={
        brand: product_form.product_brand.value,
        name: product_form.product_name.value,
        price: product_form.product_price.value,
        image : product_form.product_image.value,

    };
    product_form.product_brand.value=""
    product_form.product_name.value=""
    product_form.product_price.value=""
    product_form.product_image.value=""

    arr.push(obj)
    console.log(arr)
    localStorage.setItem("data",JSON.stringify(arr));
}