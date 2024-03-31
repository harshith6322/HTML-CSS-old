//dom-btn
const btnsearch = document.querySelector("#btn-search");
const btnspeaker = document.querySelector("#btn-speaker");

//dom-input
const inputsearch = document.querySelector("#input-search");

//dom-push
const wordpush = document.querySelector("#word-push");

const word1 = document.querySelector("#details-push1");
console.log(word1);
const word2 = document.querySelector("#details-push2");
console.log(word2);
const word3 = document.querySelector("#details-push3");
console.log(word3);
const word4 = document.querySelector("#details-push4");
console.log(word4);
//dom-audio
const audio = document.querySelector("#sound-push");
const result = document.querySelector(".result");

//API
// const APIkey = `https://api.dictionaryapi.dev/api/v2/entries/en/`;

btnsearch;
btnsearch.addEventListener("click", function () {
  const getinput = inputsearch.value;
  console.log(getinput);
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${getinput}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      result.style.display = "block";
      wordpush.textContent = getinput;

      word1.textContent = data[0].meanings[0].partOfSpeech;

      word2.textContent = data[0].phonetic;
      word3.textContent = data[0].meanings[0].definitions[0].definition;
      word4.textContent = data[0].meanings[0].definitions[0].example || "";
      //sound
      audio.setAttribute("src", `${data[0].phonetics[0].audio}`);
      console.log(audio);
    })
    .catch((error) => {
      console.log(error);
    });
});

btnspeaker.addEventListener("click", function () {
  audio.play();
  console.log("hi");
});
