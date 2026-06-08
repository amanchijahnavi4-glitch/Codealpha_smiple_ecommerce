fetch("http://localhost:5001/api/products")

.then(res => res.json())

.then(products => {

const container =
document.getElementById("productsContainer");

if(!container) return;

if(products.length === 0){

container.innerHTML =
"<h2>No Products Found</h2>";

return;

}

products.forEach(product => {

container.innerHTML += `

<div class="product-card">

<img src="${product.image}" alt="${product.name}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

</div>

`;

});

})

.catch(error => {

console.error(error);

});
