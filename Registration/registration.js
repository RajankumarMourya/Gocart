document.getElementById("registrationForm").addEventListener("submit", function data(e){
e.preventDefault();
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let phone=document.getElementById("phone").value;
let password=document.getElementById("password").value;

let errorMail=document.getElementById("errorMail");

let emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let passwordPattern=/(?=.[A-Z])(?=.[a-z])(?=.[0-9]).{8,}$/

if(!emailPattern.test(email)){
    // alert("Invalid email");
    errorMail.textContent="Invalid Email Please ENter a valid Email.....";
    return;
}else{
    errorMail.textContent=" ";
}

if(!passwordPattern.test(password)){
    // alert("Invalid email");
    errorPWD.textContent="Password is not matching with Pattern !! ";
    return;
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