 async function getProducts(){
  const response =  await axios.get('https://dummyjson.com/products');
  console.log(response);
  const products = response.data.products;
  const result = products.map( function(product){
    return `
      <div class="product">
      <img src="${product.thumbnail}"/>
      <h3>${product.title}</h3>
      <a href="details.html?product_id=${product.id}">More Details</a>
      </div>
    `;
  }).join('');

  document.querySelector(".products").innerHTML = result;
}
getProducts();