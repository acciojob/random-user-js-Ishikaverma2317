const userImg = document.getElementById("user-img");
const userName = document.getElementById("user-name");
const infoBox = document.getElementById("additional-info");
const getUserBtn = document.getElementById("getUser");
const buttons = document.querySelectorAll("[data-attr]");

let currentUser = null;

// Fetch random user from API
async function fetchUser() {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  const user = data.results[0];
  
  currentUser = {
    name: `${user.name.first} ${user.name.last}`,
    age: user.dob.age,
    email: user.email,
    phone: user.phone,
    img: user.picture.large
  };

  // Display name + photo
  userImg.src = currentUser.img;
  userName.textContent = currentUser.name;
  infoBox.textContent = "";
}

// Add event listeners for buttons
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const attr = btn.getAttribute("data-attr");
    infoBox.textContent = currentUser[attr];
  });
});

// Fetch new user when button clicked
getUserBtn.addEventListener("click", fetchUser);

// Initial load
fetchUser();
