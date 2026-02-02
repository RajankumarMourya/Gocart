document.addEventListener("DOMContentLoaded",()=>{
    displayCart()
});

function displayCart(){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    let cartContent=document.getElementById("cartContent");
    let totalPrice=document.getElementById("totalPrice");
    // console.log(cart);
    // console.log(cartContent);
    // console.log(totalPrice);
    
    cartContent.innerHTML="";
    let totalBill=0;
    if(cart.length===0){
        cartContent.innerHTML=`Your cattis empty start shoping:......`;

    }
    cart.map((product,i)=>{
        totalBill +=Math.floor((product.price)*99)
        console.log(product,i);
        let newProd=document.createElement("div")
        newProd.setAttribute("class","prod-info")

        
        newProd.innerHTML=`
                     <main id="Contianer">

                     <div id="img_container"> 
                     <img src ="${product.thumbnail}"/> 
                     </div> 

                     <div id="details">
                     <h3>${product.title}</h3>
                     <p><b>Availability Status:</b>${product.availabilityStatus}</p>
                     <p><b>Category:</b>${product.category}</p>                     
                     <p><b>Return Policy:</b>${product.returnPolicy}</p>  
                     <p><b>Shipping Information:</b>${product.shippingInformation}</p>       
                      
                      
                         <p><b>Rating:</b>${product.stock}</p>
                     <p><b>Warranty Information:</b>${product.warrantyInformation}</p>  
                         <p><b>Price: &#8377;</b>${Math.round((product.price)*99)}</p>
                       </div>

                       <div>
                            <button class="btn" onclick="removeFromCart(${i})">Remove</button>
                            
                       </div>
                     
                      </main> 
        `;
        cartContent.append(newProd);        
    });
    totalPrice.innerHTML=`<h2>Total Price &#8377; : ${totalBill}</h2>`
    
    
    
}



function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);   

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart(); 
}