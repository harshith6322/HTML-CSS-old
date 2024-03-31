"usestrict";
const btngen = document.getElementById("btngen");
const jokepush = document.getElementById("jokepush");
const savebtn = document.getElementById("savebtn");
const savedJokeContainer = document.getElementById("savedJokeContainer");
const savedJoke = document.getElementById("savedJoke");
const deletebtn = document.getElementById("deletebtn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist,explicit&type=single";

btngen.addEventListener("click", function () {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      const joke = item.joke;
      jokepush.textContent = joke;
      savebtn.disabled = false; // Enable the save button after generating a joke
    });
});

savebtn.addEventListener("click", function () {
  const joke = jokepush.textContent;
  localStorage.setItem("savedJoke", joke);
  savedJoke.textContent = joke;
  savedJokeContainer.style.display = "block";
  toggleButtonsVisibility(true); // Show the delete button after saving the joke
  alert("Joke saved to local storage!");
});

deletebtn.addEventListener("click", function () {
  localStorage.removeItem("savedJoke");
  savedJoke.textContent = "";
  savedJokeContainer.style.display = "none";
  toggleButtonsVisibility(false); // Hide the delete button after deleting the joke
  alert("Joke deleted from local storage!");
  reload1();
});

// Function to toggle the visibility of buttons based on the saved joke
function toggleButtonsVisibility(saved) {
  if (saved) {
    savebtn.style.display = "none";
    deletebtn.style.display = "block";
  } else {
    savebtn.style.display = "block";
    deletebtn.style.display = "none";
  }
}
function reload1() {
  location.reload();
}

// Check if a saved joke exists in the local storage on page load
// window.addEventListener("load", function () {
//   //   const savedJokeText = localStorage.getItem("savedJoke");
//   //   if (savedJokeText) {
//   //     savedJoke.textContent = savedJokeText;
//   //     savedJokeContainer.style.display = "block";
//   //     toggleButtonsVisibility(true); // Show the delete button on page load
//   //   } else {
//   //     toggleButtonsVisibility(false); // Hide the delete button on page load
//   //   }
// });
