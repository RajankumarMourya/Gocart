document.addEventListener("DOMContentLoaded",()=>{
      let productDetails=document.getElementById("productDetails");
      let allproducts=JSON.parse(localStorage.getItem("allproducts"));
      let productId=localStorage.getItem("productId");
      console.log(productId);

      if(allproducts && productId){
        let selectedProduct=allproducts.find((v)=>{
            return v.id==productId;
        })
        console.log(selectedProduct);    

        if(selectedProduct){
            productDetails.innerHTML=`
            <main>
            <div><img src ="${selectedProduct.thumbnail}"/>
            </div>
            
            <div>
            <h1>${selectedProduct.title}</h1>
            <p><b>Brand:</b>${selectedProduct.brand}</p>
            <p><b>Category:</b>${selectedProduct.category}</p>
            <p><b>Description:</b>${selectedProduct.description}</p>
            

            <div><b>Price  &#8377;</b>  ${Math.round((selectedProduct.price)*99)}  </div>
            
            <button id="btn1" class="btn">Add to cart</button>
            <button id="btn2" class="btn">Back to Home</button>         

            </div> 
            
            
            <div id="review">
            <h1>Customer reviews</h1>
            <hr>
            ${selectedProduct.reviews.map(
                (review)=>`
                    <div id="rating">${"❤️".repeat(review.rateing)}${ "🖤".repeat(
                        5-review.rating
                    )}</div>
                    <p id="comment">${review.comment}</p>
                    <p id="nam">By <strong>${review.reviewerName}</strong> on ${new Date(review.date)}</p> 
                          <hr>
                          `
            )}
            </div>              
              
            </main>
            `;

            
            document.getElementById("btn2").addEventListener("click",()=>{
                window.location.href="..//home.html";
            });
            document.getElementById("btn1").addEventListener("click",()=>{
                addToCart(selectedProduct);
            });
        }else{
            productDetails.innerHTML=`< p>Product Not Avalible</>`;
        }
        

    }else{
        productDetails.innerHTML=`<p>Product Not Found.........</p>`;
    }  
      

})

function addToCart(product){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart",JSON.stringify(cart))
    alert("product Addes Successfully");
}


//  <h4>Customer Reviews${selectedProduct.reviews}</h4>

