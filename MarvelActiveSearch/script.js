let ts = "1684912434728";
let publickey = "86f6e53cef44c6e63766a3481e2b9519";
let privteckey1 = "5825d7d8f57a1cdadb6aead8ff16c81f4edf89a9";

//adding strings
const adding = ts + publickey + privteckey1;
console.log(adding);
//hashing
let hashvalue1 = "272da7d319a536aedba69d4bf0a70455";

//dom
const btnsearch = document.querySelector("#btn-search");
console.log(btnsearch);
const inputpush = document.querySelector("#input-search");
console.log(inputpush.value);
const showcontainer = document.querySelector("#show-container");
console.log(showcontainer);
const listcontainer = document.querySelector(".list-container");
console.log(listcontainer);

let date = new Date();
console.log(date.getTime());

let [timestamp, apikey, hashvalue] = [ts, publickey, hashvalue1];

function displaywords(value) {
  inputpush.value = value;
  remove();
}
function remove() {
  listcontainer.innerHTML = "";
}

inputpush.addEventListener("keyup", async () => {
  remove();
  if (inputpush.value.length < 3) {
    return false;
  }
  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apikey}&hash=${hashvalue}&name=${inputpush.value}`;

  try {
    const res = await fetch(url);
    const jsondata = await res.json();
    jsondata.data.results.forEach((result) => {
      let name = result.name;
      let div = document.createElement("div");
      div.style.cursor = "pointer";
      div.classList.add("auto-list");
      div.setAttribute("onclick", "displaywords('" + name + "')");
      let word = "<b>" + name.substr(0, inputpush.value.length) + "</b>";
      word += name.substr(inputpush.value.length);
      div.innerHTML = `<p class="items">${word}</p>`;
      listcontainer.appendChild(div);
    });
  } catch (error) {
    console.log(error);
  }
});

//btn
btnsearch.addEventListener("click", async () => {
  console.log("click");
  console.log(inputpush.value.length);
  if (inputpush.value.trim().length < 1) {
    alert("Input cannot be blank");
    return;
  }
  showcontainer.innerHTML = "";
  const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apikey}&hash=${hashvalue}&name=${inputpush.value}`;

  try {
    const res = await fetch(url);
    const jsondata = await res.json();
    console.log(jsondata);

    if (jsondata.data && jsondata.data.results) {
      jsondata.data.results.forEach((element) => {
        showcontainer.innerHTML += `<div class="card-con">
          <div class="con-char-img">
            <img src="${element.thumbnail.path}.${element.thumbnail.extension}" class="lazy-load-image"/>
          </div>
          <div class="char-name">${element.name}</div>
          <div class="char-pra">${element.description}</div>
        </div>`;
      });
    } else {
      alert("No results found.");
    }
  } catch (error) {
    console.log(error);
    alert("An error occurred while fetching data. Please try again.");
  }
});

// Select all the images with the "lazy-load-image" class
// const lazyImages = document.querySelectorAll(".lazy-load-image");

// // Intersection Observer configuration options
// const options = {
//   root: null, // Use the viewport as the root element
//   rootMargin: "0px", // No margin around the root element
//   threshold: 0.2, // Load the image when 20% of it is visible
// };

// // Intersection Observer callback function
// function handleIntersection(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       // When the image is in the viewport, load the actual source
//       entry.target.src = entry.target.dataset.src;
//       entry.target.classList.remove("lazy-load-image");
//       observer.unobserve(entry.target);
//     }
//   });
// }

// // Create a new Intersection Observer instance
// const observer = new IntersectionObserver(handleIntersection, options);

// // Start observing each lazy load image
// lazyImages.forEach((image) => {
//   observer.observe(image);
// });

// btnsearch.addEventListener(
//   "click",
//   (getresult = async () => {
//     console.log("clcik");
//     console.log(inputpush.value.length);
//     if (inputpush.value.trim().length < 1) {
//       alert("Input cannot be blank");
//     }
//     showcontainer.innerHTML = "";
//     // console.log();
//     const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${apikey}&hash=${hashvalue}&name=${inputpush.value}`;

//     const res = await fetch(url);
//     const jsondata = await res.json();
//     console.log(jsondata);
//     jsondata.data.results.forEach((element) => {
//       showcontainer.innerHTML += `<div class="card-con">
//         <div class="con-char-img">
//           <img src="${element.thumbnail.path}.${element.thumbnail.extension}" />
//         </div>
//         <div class="char-name">${element.name}</div>
//         <div class="char-pra">${element.description}</div>
//       </div>`;
//     });
//     // jsondata.data.results.forEach((element) => {
//     //   showcontainer.innerHTML = `<div class="card-con">
//     //   <div class="con-char-img">
//     //   <img src=${
//     //     element.thumnail["path"] + "." + element.thumnail["extension"]
//     //   }"/></div>
//     //   <div class="char-name">${element.name}</div>
//     //   <div class="char-pra">${element.description}</div>
//     //   </div>`;
//     // });
//   })
// );

// window.onload = () => {
//   getresult();
// };
