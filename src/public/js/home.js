import { registerUser, loginUser } from './api/user.js';

function register() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = {
    username,
    password
  };

  registerUser(user)
    .then(data => {
      console.log('Registration successful:', data);
      // Do something after successful registration
    })
    .catch(error => {
      // Handle the error if registration fails
    });
}

async function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const user = {
    username,
    password
  };

  try {
    let response = await loginUser(user)
    sessionStorage.setItem('username', username);
    const user2 = sessionStorage.getItem('username');
    console.log('User pre:', user2);
    window.location.href = '/html/chat.html';
  } catch (error) {
    console.log(error);
  }

}


function main() {
  document.getElementById('register-btn').addEventListener('click', register);
  document.getElementById('login-btn').addEventListener('click', login);
}

main();