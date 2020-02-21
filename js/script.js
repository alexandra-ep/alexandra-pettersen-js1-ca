const baseUrl = `https://rickandmortyapi.com/api/character/
`;

function handleResponse(response) {
  return response.json();
}

function handleCharacters(json) {
  const results = json.results;
  console.dir(results);

  const resultsContainer = document.querySelector(".row.results");

  let html = "";

  results.forEach(function(result) {
    let typeValue = "Unknown";

    if (result.type) {
      typeValue = result.type;
    }

    html += `<div class="col-sm-6 col-md-4 col-lg-3">                
        <div class="card">
            <img class="image" src="${result.image}" alt="${result.name}">
            <div class="details">
                <h4 class="name">${result.name}</h4>
                <p>Type: ${typeValue}</p>    
                <p>Episode count: ${result.episode.length}</p> 
                <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
            </div>
        </div>
    </div>`;
  });
  resultsContainer.innerHTML = html;
}

function handleError(error) {
  document.location.href = `error.html`;
}

fetch(baseUrl)
  .then(handleResponse)
  .then(handleCharacters)
  .catch(handleError);
