const baseUrl = "http://localhost:3000/"
const userAdapter = new UserAdapter(baseUrl);
const tomoGatchiAdapter = new TomogatchiAdapter(baseUrl);
const main = document.getElementById("main");
const header = document.getElementById("header");
const nav = document.getElementById("nav");
document.addEventListener("DOMContentLoaded",init);
let currentUser;


function init() {
  checkLogin();
}



function loadLoginForm(){
  header.hidden =  "";
    main.innerHTML = `
    <div class="userForm">
      <form  id="login-form">
        <label> Username </label>
        <input type="text" name="username" id="username">
        <label > Password</label>
        <input type="password" name="password" id="password">
        <input type="submit" value="Login">
      </form>
      <button id="signup">Sign up</button>
    </div>
    `
    document.getElementById("login-form").addEventListener("submit", handleLogin)
    document.getElementById("signup").addEventListener("click", loadSignupForm)
}



function loadSignupForm(){
    main.innerHTML = `
    <div class="userForm">
      <form  id="signupForm">
        <label> Username </label>
        <input type="text" name="username" id="username">
        <label > Password</label>
        <input type="password" name="password" id="password">
        <input type="submit" value="Signup">
      </form>
      <button id="login">Login</button>
    </div>
    `
    document.getElementById("signupForm").addEventListener("submit", handleSignup)
    document.getElementById("login").addEventListener("click", loadLoginForm)
}


function handleLogin(e) {
  e.preventDefault();
  let username = e.target[0].value;
  let password = e.target[1].value;

  let userObj = {
    user: {
      username,
      password
    }
  };
  userAdapter.login(userObj)
  .then(data => {
      jwtUser(data)
    // we are going to render the user's previous profile information
  })
}
  

function handleSignup(e) {
  e.preventDefault();

  let username = e.target[0].value;
  let password = e.target[1].value;

  let userObj = {
    user: {
      username,
      password
    }
  };

  userAdapter.signup(userObj)
  .then(data => {
    jwtUser(data)
    // render out the new adoption form to create a new tomogatchi
  })
}


function checkLogin() {
  if(localStorage.jwt) {
     // then I can render out the userinformation of my tomogatchi application
     userAdapter.autoLogin()
     .then(data => {
        localStorage.setItem("jwt", data.jwt)
      // currentUser = data.user.username
        user = new User(data.user.username)
        currentUser =  user;
        // display User tomogatchi's 
        user.renderProfile();
     })
  } else {
    loadLoginForm();
  }
}

function handleLogout() {
  localStorage.removeItem("jwt")
  header.hidden = "";
  nav.hidden = "hidden";
  loadLoginForm();
}

function jwtUser(data) {
  localStorage.setItem("jwt", data.jwt)
  user = new User(data.user.username)
  currentUser =  user;
}






