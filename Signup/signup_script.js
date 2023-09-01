// let form = document.getElementsByClassName("signup-form");

// function saveData(){
//     let firstName = document.getElementById('firstname-input').value;
//     let lastName = document.getElementById('lastname-input').value;
//     let email = document.getElementById('email-input').value;
//     let password = document.getElementById('password-input').value;
//     let confirmPassword = document.getElementById('confirm-password-input').value;
//     let message = document.getElementById('message');
    
//     if(password!==confirmPassword){
//         // alert("Password is not matching")
//         message.style.display = "inline";
//         message.classList = "error";
//         message.innerText = "Password is not matching.";

//     }
//     else if(firstName=="" || lastName=="" || email=="" || password=="" || confirmPassword==""){
//         // alert("Please provide all details");
//         message.style.display = "inline";
//         message.classList = "error";
//         message.innerText = "Please provide all details.";
//     }
//     else{
//         let userDetails = new Array();
//         userDetails = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];
//         if(userDetails.some((u) => {
//             return u.email==email;
//         })){
//             alert("Duplicate Email");
//         }
//         else{
//             userDetails.push({
//                 "firstName": firstName,
//                 "lastName": lastName,
//                 "email": email,
//                 "password": password,
//                 "confirmPassword": confirmPassword
//             })
//             localStorage.setItem("users", JSON.stringify(userDetails));

//             // making empty of every feild
//             document.getElementById('firstname-input').value = "";
//             document.getElementById('lastname-input').value = "";
//             document.getElementById('email-input').value = "";
//             document.getElementById('password-input').value = "";
//             document.getElementById('confirm-password-input').value = "";

//             // message for successful signup..
//             message.style.display = "inline";
//             message.classList = "successful";
//             message.innerText = "Signup done successfully.";


//             setTimeout(() => {
//                 window.location.href = '../Login/login.html';
//             }, 1500)
//         }
//     }
// }


const form = document.getElementById('inputs');

var totalUser = [];

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    // console.log('hello');

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    const confPass = document.getElementById('confirm-pass').value;
    const message = document.getElementById("message");

    if(!firstName || !lastName || !email || !pass || !confPass){
        message.style.display = "inline";
        message.classList = "error";
        message.innerText = "All feilds required.";
        return;
    }

    if(pass!=confPass){
        message.style.display = "inline";
        message.classList = "error";
        message.innerText = "Password must be same.";
        return;
    }

    var user={
        firstName:firstName,
        lastName:lastName,
        email:email,
        password:pass
    }

    let flag=false;
    if(localStorage.getItem('totalUser')){
        // console.log("hello");
        totalUser=JSON.parse(localStorage.getItem('totalUser'));
        totalUser.forEach((user)=>{
            if(user.email==email){
                flag=true;
                message.style.display = "inline";
                message.classList = "error";
                message.innerText = "User already exists.";
            }
        })
    }
    if(flag==true){
        //user already exist;
        return;
    }

    totalUser.push(user);
    // console.log("user",user);
    // console.log(totalUser);

    localStorage.setItem('totalUser',JSON.stringify(totalUser));

    message.style.display = "inline";
    message.classList = "successful";
    message.innerText = "Signup successful";;

    form.reset();

    setTimeout(()=>{  
       location.href='../Login/login.html';
    },1500);

})
