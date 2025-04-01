/**
 * Basis object met gebruikers
 */

const users = [
  {
    fullname: "KarelKleintjes",
    email: "karel.kleintjes@gmail.com",
    password: "123Test",
  },
  {
    fullname: "ElsDotjes",
    email: "else.dotjes@gmail.com",
    password: "123Test",
  },
  {
    fullname: "PietPollekens",
    email: "piet.pollekens@gmail.com",
    password: "123Test",
  },
];

// hieronder komt jullie code - veel succes
const name = document.querySelector("#name");
const email = document.getElementById("email");
let filterTxt = document.getElementById("username");
const filterTxt2 = document.getElementById("username2");
const filterTxtEmail = document.querySelector("#email");
const password = document.getElementById("password");
const regristreerBtn = document.getElementById("registreer");
const user2 = document.getElementById("username");
const user2Email = document.getElementById("email");
const filterBtn = document.querySelector("#filterForm");
const filterInput = document.querySelector("#filter");
console.log(users);

filterTxt.innerHTML = "";
filterTxt2.innerHTML = "";
filterTxtEmail.innerHTML = "";
regristreerBtn.onclick = function () {
  const newUser = {
    fullname: name.value,
    email: email.value,
    password: password.value,
  };
  users.push(newUser);
  console.log(users);
  filterTxt.textContent = users;
};

filterBtn.onclick = function () {
  const filtered = users.filter((user) =>
    user.fullname.toLocaleLowerCase().includes(filterInput.value)
  );
  console.log(filtered);
  filterTxt.textContent = filtered;
  console.log(filtered);
};
