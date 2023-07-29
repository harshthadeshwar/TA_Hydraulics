// Replace this with your actual product data (e.g., fetched from a database)
const products = [
    {
      name: "CNC Tool 1",
      description: "Description for CNC Tool 1.",
      imageUrl: "path/to/cnc_tool1.jpg",
    },
    {
      name: "CNC Tool 2",
      description: "Description for CNC Tool 2.",
      imageUrl: "path/to/cnc_tool2.jpg",
    },
    // Add more product objects as needed
  ];
  
  document.addEventListener("DOMContentLoaded", function () {
    const productList = document.getElementById("productList");
  
    // Loop through the products array and create product cards dynamically
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product");
  
      const productImage = document.createElement("img");
      productImage.src = product.imageUrl;
      productImage.alt = product.name;
      productCard.appendChild(productImage);
  
      const productName = document.createElement("h3");
      productName.textContent = product.name;
      productCard.appendChild(productName);
  
      const productDescription = document.createElement("p");
      productDescription.textContent = product.description;
      productCard.appendChild(productDescription);
  
      productList.appendChild(productCard);
    });
  });
  