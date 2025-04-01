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
const name = document.getElementById("name");
const userinput = getElementById("name");
const email = document.getElementById("email");
const filterTxt = document.getElementById("username");
const password = document.getElementById("password");
const regristreerBtn = document.getElementById("registreer");
const user2 = document.getElementById("username");
const user2Email = document.getElementById("email");
const filterBtn = document.getElementById("filterForm");
console.log(users);

filterTxt.innerHTML = "";
regristreerBtn.onclick = function () {
  const newUser = {
    fullname: name.value,
    email: email.value,
    password: password.value,
  };
  users.push(newUser);
  console.log(newUser);
};

filterBtn.addEventListener("click", (e) => {
  const filtered = users.filter((user) =>
    user.fullname
      .toLocaleLowerCase()
      .includes(filterTxt.value.toLocaleLowerCase())
  );
  console.log(filtered);
  filterTxt.append(filtered);
});
