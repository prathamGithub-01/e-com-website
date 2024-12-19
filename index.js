const input=document.getElementById("input-field");
const icon=document.getElementById("search");
const hiddenElements=document.querySelectorAll('.hidden'); 
const sideBar=document.querySelector(".fa-bars");
const cart=document.querySelectorAll(".fa-cart-shopping");
console.log(hiddenElements);
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting)
            {
                // entry.target.classList.remove("hidden");
                entry.target.classList.add("show");
            }
        })
    })
    hiddenElements.forEach((el)=>  observer.observe(el))




// let next = document.querySelector('.next')
// let prev = document.querySelector('.prev')

// next.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').appendChild(items[0])
// })

// prev.addEventListener('click', function(){
//     let items = document.querySelectorAll('.item')
//     document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
// })

function menuBar()
{
   const menu=document.querySelector(".list");
       menu.style.display="flex";
    // menu.classList.toggle('open');
}
function removeMenu()
{
    const menu=document.querySelector(".list"); 
    menu.style.display="none";
}
// Redirecting to any other page 
const prod=document.querySelectorAll(".fa-cart-shopping");
prod.forEach((eachCart)=>{
    eachCart.addEventListener("click",()=>{
        window.location.href="single-page.html";
    })
})
// detect the cart click
cart.forEach((eachCart)=>{
    eachCart.addEventListener("click",()=>{
        console.log("item added to Cart!");
    })
})
// getting wishlist container

// Detect the heart click

const heart=document.querySelectorAll(".fa-heart");
console.log(heart);
heart.forEach((eachHeart)=>{
     let isRed=false;
        eachHeart.addEventListener("click",(event)=>{
            if(!isRed){
            eachHeart.classList.add("change-heart");
            // getting the product container on clicking the button
            const displayProduct=event.currentTarget.closest('.product');
            // converting the html element into a string 
            const entireProduct=displayProduct.outerHTML;
            //  creating an array that stores the html string
            let wishArray= JSON.parse(localStorage.getItem('wishArray')) || [];
            // console.log(wishArray); initially empty string
            // pushing the data to the wishArray
            wishArray.push(entireProduct);
            // updating the wishArray and saving to the local storage
                localStorage.setItem('wishArray',JSON.stringify(wishArray));
              isRed=true;
            }
            else
        {
            eachHeart.classList.remove("change-heart");
            isRed=false;
        }
        })
})