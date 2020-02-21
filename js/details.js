const queryString = document.location.search;
const params = new URLSearchParams(queryString);

let id;

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = `index.html`;
}

const baseUrl = `https://rickandmortyapi.com/api/character/`;
const detailUrl = `${baseUrl}${id}`;

function handleResponse(response) {
  return response.json();
}

function handleDetails(json) {
  console.dir(json);

  const image = document.querySelector(".details-image");
  image.src = json.image;
  image.alt = json.name;

  const name = document.querySelector("h1");
  name.innerHTML = json.name;

  const status = document.querySelector("#status");
  status.innerHTML = json.status;

  const species = document.querySelector("#species");
  species.innerHTML = json.species;

  const origin = document.querySelector("#origin");
  origin.innerHTML = json.origin.name;

  const location = document.querySelector("#location");
  location.innerHTML = json.location.name;

  document.title = json.name + " | " + document.title;
}

function handleError(error) {
  document.location.href = `error.html`;
}

fetch(detailUrl)
  .then(handleResponse)
  .then(handleDetails)
  .catch(handleError);
