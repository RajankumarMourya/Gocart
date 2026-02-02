let product=[];

function fetchData(){
    fetch("https://dummyjson.com/products").then((res)=>{
        return res.json();
    }).then((val)=>{
        console.log(val.products);
        product=val.products;
        localStorage.setItem("allproducts",JSON.stringify(product))
        displayProduct(product)
        
    })
}



function displayProduct(prod){
    let output="";
    prod.map((val)=>{
        output+=`
        <main>
        <div id="image">
        <img src ="${val.thumbnail}"/>
        </div>
        
        <div id="title"><h3>${val.title}</h3></div>

        <div id="ratingBox">
            <p>Rating:${val.rating}</p>
            <p> &#8377;${Math.round((val.price)*99)}</p>
        </div>

        <div id="detailBox">
        <p>InStock:${val.stock}</p>
        <button onclick="details(${val.id})">Details</button>
        </div>
        </main>
           

        `
    })

document.getElementById("productContainer").innerHTML=output;

}

document.getElementById("searchbox")
.addEventListener("input",function searchItem(event){
      let searchTerm=event.target.value.toLowerCase();
      let filteredProduct =product.filter((v)=>{
        return(
            v.title.toLowerCase().includes(searchTerm)||
            v.category.toLowerCase().includes(searchTerm)
        );
      });
      displayProduct(filteredProduct)

});

fetchData();


function details(productId){
    console.log(productId);
    localStorage.setItem("productId",productId);
    window.location.href="../viewDetails/viewDetails.html";

    
    
}