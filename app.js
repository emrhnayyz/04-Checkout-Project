let liste = [];



let subTotal = 0;

let Tax = 0;

let Shipping = 0;

let total = 0;



const subTotalText = document.querySelector(".sub-total").querySelector(".amount")
const  taxText = document.querySelector(".tax").querySelector(".amount")
const shippingText = document.querySelector(".shipping").querySelector(".amount")
const totalText = document.querySelector(".total").querySelector(".amount")
const minus = document.querySelectorAll(".fa-minus")




minus.forEach((a)=>{
    a.onclick=()=>{
        

      a.closest("p").querySelector(".amount-span").textContent 
        
       

    }


})







//? remove butonuna basildiginda div'i kaldirdim
document.querySelectorAll(".btn-area").forEach((a)=>{

    a.onclick=()=>{
        a.closest(".box").remove()
    }



})