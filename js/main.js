const products=[
{id:1,name:'iPhone 15 Pro',price:99999,image:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9'},
{id:2,name:'MacBook Air',price:109999,image:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853'}
];
const container=document.getElementById('featured-products');
if(container){
products.forEach(product=>{
container.innerHTML+=`<div class="product-card"><img src="${product.image}" style="width:100%;height:220px;object-fit:cover"><div class="product-info"><h3>${product.name}</h3><p>₹${product.price}</p><button>Add To Cart</button></div></div>`;
});
}