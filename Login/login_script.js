// function loginFunc(){
//     let email, password;
//     email = document.getElementById('emai-input').value;
//     password = document.getElementById('password-input').value;

//     let userDetails = new Array();
//     userDetails = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
//     if(userDetails.some((u) => {
//         return u.email==email && u.password==password;
//     })){
//         // alert("Login Successful");
//         let currentUser = userDetails.filter((u) => {
//             return u.email==email && u.password==password;
//         })[0];
//         localStorage.setItem("firstName", currentUser.firstName);
//         localStorage.setItem("lastName", currentUser.lastName);
//         localStorage.setItem("email", currentUser.email);
//         localStorage.setItem("password", currentUser.password);
//         localStorage.setItem("confirmPassword", currentUser.confirmPassword);
        
//         window.location.href = "../Home/home.html";
//     }
//     else{
//         alert("Please check credentials");
//     }

// }
const message = document.getElementById('message');
const form = document.getElementById('inputs');
var totalUser=[];

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log("Hello");

    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    if(!email || !password){
        message.style.display = "inline";
        message.classList = "error";
        message.innerText = "All feilds required.";
        return;
    }

    let flag=false;
    let currUser;

    if (localStorage.getItem('totalUser')){
        totalUser=JSON.parse(localStorage.getItem('totalUser'));
        totalUser.forEach((user)=>{
            if(user.email==email){
                flag=true;
                user.token=generateToken();
                currUser=user;
                localStorage.setItem('currUser',JSON.stringify(user));
            }
        })
    }

    else if(flag==true && password!=currUser.password){
        message.style.display = "inline";
        message.classList = "error";
        message.innerText = "Password is wrong.";
        return;
    }
    
    else if(flag==false){
        message.style.display = "inline";
        message.classList = "error";
        message.innerText = "User does not exist.";
        return;
    }

    message.style.display = "inline";
    message.classList = "successful";
    message.innerText = "Login successful.";

    form.reset();

    setTimeout(()=>{  
        location.href='../Home/home.html';
     },1500);


})


function generateToken(){
    let token = '';
    for (let i = 0; i < 16; i++) {
      token += String.fromCharCode(Math.floor(Math.random() * 256));
    } 
    return btoa(token);
}

