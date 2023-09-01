// let firstName = document.getElementById("fname-edit-input");
// let lastName = document.getElementById("lname-edit-input");
// let oldPassword = document.getElementById("old-password-input");
// let newPassword = document.getElementById("new-password-input");
// let confirmPassword = document.getElementById("confirm-password-input");
// firstName.value = localStorage.getItem("firstName");
// lastName.value = localStorage.getItem("lastName");
// oldPassword.value = localStorage.getItem("password");
// function userData(){
//     let list = localStorage.getItem("users");
//     if(list){
//         return JSON.parse(localStorage.getItem("users"));
//     }
//     else{
//         return [];
//     }
// }
// let info = userData();
// function currUser(){
//     let newEditInfo = info.find(element => {
//         return element.email == localStorage.getItem("email");
//     })
//     return newEditInfo;
// }
// console.log(currUser());
// // logout...
// function logoutFunc() {
//   localStorage.removeItem("firstName");
//   localStorage.removeItem("lastName");
//   localStorage.removeItem("email");
//   localStorage.removeItem("password");
//   localStorage.removeItem("confirmPassword");
//   window.location.href = "../index.html";
// }


// Write your script here
// Write your script here
const logout = document.getElementById('logout');
const input1 = document.getElementById('inputs');
const input2 = document.getElementById('inputs2');
const message = document.getElementById('message');
const message2 = document.getElementById('message2');


if (!localStorage.getItem('currUser')) {
    location.href = '../Login/login.html';
}
else {
    let user = JSON.parse(localStorage.getItem('currUser'));
    document.getElementById('first-name').value = user.firstName;
    document.getElementById('last-name').value = user.lastName;
}

// logout
logout.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log("HEllo");
    localStorage.removeItem('currUser');
    location.href = '../Login/login.html';
})


// change firstname and lastname
input1.addEventListener('submit', (event) => {
    event.preventDefault();
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    if (!firstName || !lastName) {
        message.style.display = "inline";
        message.classList = "error";
        message.innerText = "All feilds required.";
        return;
    }
    let user = JSON.parse(localStorage.getItem('currUser'));
    user.firstName = firstName;
    user.lastName = lastName;
    let email = user.email;
    localStorage.setItem('currUser', JSON.stringify(user));
    let totalUser = JSON.parse(localStorage.getItem('totalUser'));
    let ind;
    //to get the element(obj) and its index from the totaluser array  
    totalUser.forEach((ele, index) => {
        if (ele.email == email) {
            console.log(ele);
            user = ele;
            ind = index;
        }
    })
    user.firstName = firstName;
    user.lastName = lastName;
    // will make the changes in user(obj) at the correct index 
    totalUser[ind] = user;
    localStorage.setItem('totalUser', JSON.stringify(totalUser));
    message.style.display = "inline";
    message.classList = "successful";
    message.innerText = "Profile has been edited successfully.";

    setTimeout(() => {
        message.style.display = "none";;
        input1.reset();
    }, 1500)
})





// change password..
input2.addEventListener('submit', (event) => {
    event.preventDefault();

    const oldPass = document.getElementById('old-pass').value;
    const newPass = document.getElementById('new-pass').value;
    const confNewPass = document.getElementById('conf-new-pass').value;


    if (!oldPass || !newPass || !confNewPass) {
        message2.style.display = "inline";
        message2.classList = "error";
        message2.innerText = "All feilds required."
        return;
    }

    if (newPass != confNewPass) {
        message2.style.display = "inline";
        message2.classList = "error";
        message2.innerText = "New password and Confirm password should match."
        return;
    }

    let user = JSON.parse(localStorage.getItem('currUser'));
    // console.log(user);

    if (oldPass != user.password) {
        message2.style.display = "inline";
        message2.classList = "error";
        message2.innerText = "Old password is not correct."
        return;
    }

    user.password = newPass;
    let email = user.email;

    localStorage.setItem('currUser', JSON.stringify(user));

    // console.log('email',email);

    let totalUser = JSON.parse(localStorage.getItem('totalUser'));

    let ind;

    totalUser.forEach((ele, index) => {
        if (ele.email == email) {
            console.log(ele);
            user = ele;
            ind = index;
        }
    })


    user.password = newPass;

    totalUser[ind] = user;

    localStorage.setItem('totalUser', JSON.stringify(totalUser));

    message2.style.display = "inline";
    message2.classList = "successful";
    message2.innerText = "Profile has been edited successfully.";

    setTimeout(() => {
        message2.style.display = "none";
        input2.reset();
    }, 1500)

})


