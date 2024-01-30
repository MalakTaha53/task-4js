async function getDetailsProduct(){
    const urlParams =new URLSearchParams(window.location.search);
    const id = urlParams.get('product_id');
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    const dataOfProduct =response.data;
    document.querySelector(".product h1").textContent = dataOfProduct.title;
    document.querySelector(".product img").src = dataOfProduct.thumbnail;
    document.querySelector(".product p").textContent = dataOfProduct.description;
    const result = (`${dataOfProduct.price}$`);
    document.querySelector(".product .details .price").textContent += result;
    document.querySelector(".product .details .brand").textContent += dataOfProduct.brand;
    document.querySelector(".product .details .category").textContent += dataOfProduct.category;
  }
  getDetailsProduct();