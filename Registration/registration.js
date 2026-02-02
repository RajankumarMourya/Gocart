document.getElementById("registrationForm").addEventListener("submit", function data(e){
e.preventDefault();
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
let password=document.getElementById("password").value;

let errorMail=document.getElementById("errorMail");

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email)){
    // alert("Invalid email");
    errorMail.textContent="Invalid Email......";
    return;
}else{
    errorMail.textContent=" ";
}

                // console.log(name);
                // console.log(email);
                // console.log(phone);
                // console.log(password);

                
                
                let userData={
                    name:name,
                    email:email,
                    mobil:phone,
                    password:password
                };
                console.log(userData);

                localStorage.setItem("userData",JSON.stringify(userData));
                alert("Registration Sucessfull!!!!!!!!!");
                window.location.href="./login.html";
                
 
});