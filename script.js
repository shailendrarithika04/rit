function addToCart(name,price){
 let cart=JSON.parse(localStorage.getItem('cart'))||[];
 cart.push({name,price});
 localStorage.setItem('cart',JSON.stringify(cart));
 alert('Added to cart');
}

function displayCart(){
 let cart=JSON.parse(localStorage.getItem('cart'))||[];
 let total=0,output='';
 cart.forEach(i=>{output+=`<p>${i.name} - ₹${i.price}</p>`; total+=i.price;});
 document.getElementById('cart-items').innerHTML=output;
 document.getElementById('total').innerText='Total: ₹'+total;
}
unction addToWishlist(name){
 let list=JSON.parse(localStorage.getItem('wishlist'))||[];
 list.push(name);
 localStorage.setItem('wishlist',JSON.stringify(list));
 alert('Added to wishlist');
}

function displayWishlist(){
 let list=JSON.parse(localStorage.getItem('wishlist'))||[];
 let output='';
 list.forEach(i=>{output+=`<p>${i}</p>`});
 document.getElementById('wishlist-items').innerHTML=output;
}

function searchProducts(){
 let input=document.getElementById('search').value.toLowerCase();
 let cards=document.querySelectorAll('.card');
 cards.forEach(c=>{
   let name=c.innerText.toLowerCase();
   c.style.display=name.includes(input)?'block':'none';
});
}

function filterPrice(value){
 let cards=document.querySelectorAll('.card');
 cards.forEach(c=>{
   let price=c.getAttribute('data-price');
   if(value==='all'||price<=value){c.style.display='block';}
   else{c.style.display='none';}
 });
}
