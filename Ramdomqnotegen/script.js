//dom
const qnotepush = document.querySelector("#qnotepush");
const btngen = document.querySelector("#btn-gen");

const authorpush = document.querySelector("#authorpush");

const apikey = "https://api.quotable.io/random";

btngen.addEventListener("click", function () {
  fetch(apikey)
    .then((res) => res.json())
    .then((data) => {
      qnotepush.textContent = data.content;
      authorpush.textContent = data.author;
    });
});
