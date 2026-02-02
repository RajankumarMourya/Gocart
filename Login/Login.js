document.getElementById("registrationForm").addEventListener("submit", function data(e){
e.preventDefault();           //to stop page from reloading
let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
                               
                
                let storedData=JSON.parse(localStorage.getItem("userData"));
                console.log(email);
                console.log(password);  
                console.log(storedData);                

                // localStorage.getItem("userData",JSON.stringify(userData));      
                if(storedData.email===email && storedData.password===password)    {     
                alert("Login Sucessfull!!!!!!!!!");
                window.location.href="..//home.html";
                }else{
                  alert("Enter a valid crediteantial");
                       }
                
 
});