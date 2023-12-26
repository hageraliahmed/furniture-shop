let userNames = ["mustafaghaly4941", "ahmedsaper90", "asmaasaper10"];
let passwords = ["01968", "5080100", "102030"];
let logBtn = document.querySelector(".login-btn");
let logIn = document.querySelector(".log-in");
let logup = document.querySelector(".log-up");

let inputUser = document.querySelector("#username");
let inputPass = document.querySelector("#password");
let wrongVal = document.querySelector("#wront-alert");
logBtn.addEventListener("click", function () {
location.assign("home.html");
//  wrongVal.innerHTML = null;
 // for (let i = 0; i < userNames.length; i++) {
 //   if (
 //     inputUser.value.toLowerCase() == userNames[i] &&
  //    inputPass.value.toString().toLowerCase() == passwords[i]
  //  ) {
//      location.assign("home.html");
 //   } else {
 //     inputPass.value = null;
 //     inputUser.value = null;
 //     wrongVal.innerHTML = "The username or password is incorrect";
   // }
 // }
});
// sign up
let userUp = document.querySelector("#username-up");
let passUp = document.querySelector("#password-up");
let saveBtn = document.querySelector(".save-btn");
let signIn = document.querySelector("#sign-in");
let signUp = document.querySelector("#sign-up");
signUp.addEventListener("click", function () {
  logIn.style.display = "none";
  logup.style.display = "block";
});
signIn.addEventListener("click", function () {
  logIn.style.display = "block";
  logup.style.display = "none";
});

saveBtn.addEventListener("click", function () {
  userNames.push(userUp.value);
  passwords.push(passUp.value);
  localStorage.setItem("page-signname", userUp.value);
  localStorage.setItem("page-signpass", passUp.value);
});
