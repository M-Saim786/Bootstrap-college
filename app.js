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

// Firebase Login Connect Database
var loginBtn = document.getElementById("loginBtn");
loginBtn.addEventListener("click", () => {
  if (Email[0].value == "" || password[0].value == "") {
    alert("Please Enter User Name or Password ");
  } else {
    // firebase
    //   .auth()
    //   .signInWithEmailAndPassword(Email[0].value, password[0].value)
    //   //
    //   .then(function (user) {
    //     console.log(user);
    // var userobj = {
    //   Email : Email[0].value,
    //   password: password[0].value,
    //   FirstName : firstName.value,
    //   lastName : lastName.value
    // };
    // firebase.database().ref("user/").push(userobj);
    // })
    // .catch(function (e) {
    //   alert(e.message);
    // });
  }
});

// Firebase SignUP Connect Database
var SignUP = document.getElementById("SignUP");
SignUP.addEventListener("click", () => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(Email.value, password.value)
    .then((user) => {
      console.log(user);
      var UserInfoObj = {
        FirstName: firstName.value,
        lastName: lastName.value,
        Email: Email.value,
        password: password.value,
      };
      firebase.database().ref("user/").push(UserInfoObj);
    })
    .catch((e) => {
      console.log(e);
      alert(e.message);
    });
});
