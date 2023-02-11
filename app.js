const toTop = document.querySelector(".top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

var popUp = document.getElementById("popUp");
setTimeout(() => {
  popUp.setAttribute(
    "style",
    `display:block;
     transition:all 0.6s`
  );
}, 1000);
setTimeout(() => {
  popUp.setAttribute("style", `display:none`);
}, 10000);

// First Popup ka close

var closebtn = document.getElementById("close");
closebtn.addEventListener("click", () => {
  popUp.setAttribute("style", `display:none`);
});




var Email = document.getElementById("Email");
var password = document.getElementById("Password");
var firstName = document.getElementById("fname");
var lastName = document.getElementById("lname");

// Firebase SignUP Connect Database
var SignUP = document.getElementById("SignUP");
SignUP.addEventListener("click", () => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(Email.value, password.value)
    .then(async(user) => {
      console.log(user.user.uid);
    
      await firebase.database().ref("user/").child(user.user.uid).set({
        
            FirstName: firstName.value,
            lastName: lastName.value,
            Email: Email.value,
            password: password.value,
            UserId: user.user.uid,

      });
      alert('SignUP user created successfully')
      location.reload(true);

    })
    .catch((e) => {
      console.log(e);
      alert(e.message);
    });

});

// Firebase Login Connect Database
var loginEmail = document.getElementById('loginEmail')
var loginPassword = document.getElementById('loginPassword')
var loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", () => {
  console.log("click to login");

  // alert("Please Enter User Name or Password ");

  firebase
    .auth()
    .signInWithEmailAndPassword(loginEmail.value, loginPassword.value)

    .then(function (user) {
      console.log(user);
      localStorage.setItem("uid", user.user.uid);
      window.location.href = "index.html";
    
      alert("Login Successful");  
    })
    .catch(function (e) {
      alert(e.message);
    });
});
