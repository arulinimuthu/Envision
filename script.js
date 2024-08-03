function checkUserLogin(input) {
  let forbiddenCharacters = "!@#$%^&*()_+-=[]{}|;':\"<>?,./";
    
  for (let character = 0; character < forbiddenCharacters.length; character++) {
    for (let i = 0; i < input.length; i++) {
      if (input[i] == forbiddenCharacters[character]) {
        return false;
      }
    }
  }
}


function rememberLogin(username, password) {
  let rememberMe = document.getElementById('rememberMe').checked;
  if (rememberMe == false) {
    localStorage.setItem("Username", username);
    localStorage.removeItem("Password");
  }
  else {
    localStorage.setItem("Username", username);
    localStorage.setItem("Password", password);
  }
}

function openLoginBlock() {
  console.log(localStorage.getItem("Username"));
  if (localStorage.getItem("Password") == null) {
    document.getElementById('loginBlock').style.display='block';
  }
  else {
    window.open("AfterLogin.html");
    window.close("index.html");
  }
}

function returnLogin () {
  var username = document.getElementById('userUsername').value;
  var password = document.getElementById('userPassword').value;
  if (username.length == 0 || password.length == 0) {
    alert("Please do not leave the username or password unfilled.")
  }
  else if (checkUserLogin(username) == false || checkUserLogin(password) == false) {
    alert("Please do not include any spacial characters or spaces in your username or password.")
  }
  else {
    rememberLogin(username, password);
    document.getElementById('loginBlock').style.display='none';
    window.open("AfterLogin.html");
    window.close("index.html");
  }
}

function logout() {
  localStorage.removeItem("Name");
  localStorage.removeItem("Content");
  localStorage.removeItem("Tip1");
  localStorage.removeItem("Tip2");
  localStorage.removeItem("Tip3");
  localStorage.removeItem("Gmail");
  localStorage.removeItem("Instagram");
  localStorage.removeItem("Twitter");
  
  localStorage.removeItem("Username");
  localStorage.removeItem("Password");
  window.open("index.html");
  window.close("AfterLogin.html");
  window.close("AfterShare.html")
}

function filter(text) {
  let profiles = document.getElementsByClassName("filterProfile");

  for (let i = 0; i < profiles.length; i++) {
    let profile = profiles[i].className.split(" ");
    let displayed = "false";
    profile.splice(0, 2);
    for (let traits = 0; traits < profile.length; traits++) {      
      if (text == "all") {
        profiles[i].style.display='block';
        displayed = "true";
      }
      else if (profile[traits] == text) {
        profiles[i].style.display='block';
        displayed = "true";
      }
      else {
        if (traits == profile.length-1 && displayed == "false") {
          profiles[i].style.display="none";
        }
      }
    }
  }
}

function search() {
  var search = document.getElementById('search').value;
  search = search.split(" ");
  console.log(search);
  for (let i = 0; i < search.length; i++) {
    filter(search[i]);
  }
}

function post() {
  
  var name = document.getElementById('name').value;
  var content = document.getElementById('content').value;
  var tipOne = document.getElementById('tip1').value;
  var tipTwo = document.getElementById('tip2').value;
  var tipThree = document.getElementById('tip3').value;
  var gmail = document.getElementById('gmail').value;
  var instagram = document.getElementById('instagram').value;
  var twitter = document.getElementById('twitter').value;

  localStorage.setItem("Name", name);
  localStorage.setItem("Content", content);
  localStorage.setItem("Tip1", tipOne);
  localStorage.setItem("Tip2", tipTwo);
  localStorage.setItem("Tip3", tipThree);
  localStorage.setItem("Gmail", gmail);
  localStorage.setItem("Instagram", instagram);
  localStorage.setItem("Twitter", twitter);

  
  if (name.length == 0 || content.length == 0 || tipOne.length == 0 || tipTwo.length == 0 || tipThree.length == 0 || gmail.length == 0 || instagram.length == 0 || twitter.length == 0) {
    alert("Please do not leave any of the fields unfilled.");
    event.preventDefault();
  }
  else {
    document.getElementById("yourExperience").style.display='none';
    window.open("AfterShare.html");
    window.close("AfterLogin.html");
  }
}