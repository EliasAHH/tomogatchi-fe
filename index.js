const loginDiv = document.getElementById("loginDiv");
const signupDiv = document.getElementById("signupDiv");
const baseUrl = "http://localhost:3000/"
document.addEventListener("DOMContentLoaded",init);


function init() {
  checkLogin()
}



function loadLoginForm(){
    loginDiv.innerHTML = `
    <form  id="login-form">
        <label> Username </label>
        <input type="text" name="username" id="username">
        <label > Password</label>
        <input type="password" name="password" id="password">
        <input type="submit" value="Login">
    </form>
    `
    document.getElementById("login-form").addEventListener("submit", handleLogin)
}



function loadSignupForm(){
    signupDiv.innerHTML = `
    <form  id="signupForm">
        <label> Username </label>
        <input type="text" name="username" id="username">
        <label > Password</label>
        <input type="password" name="password" id="password">
        <input type="submit" value="Signup">
    </form>
    `
    document.getElementById("signupForm").addEventListener("submit", handleSignup)
}


function handleLogin(e) {
  handleLoginSignUp(e,"login")
}
  

function handleSignup(e) {
  handleLoginSignUp(e,"users")
}


function checkLogin() {
  if(localStorage.jwt) {
     // then I can render out the userinformation of my tomogatchi application
  } else {
    loadLoginForm();
    loadSignupForm();
  }
}



function handleLoginSignUp(e,path) {
  e.preventDefault();
  let username = e.target[0].value;
  let password = e.target[1].value;

  let userObj = {
    user: {
      username,
      password
    }
  };

  fetch(baseUrl + path, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userObj)
  })
  .then(r => r.json())
  .then(data => {
    localStorage.setItem("jwt", data.jwt)
  })
}