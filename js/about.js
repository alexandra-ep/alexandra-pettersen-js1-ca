function updateText() {
  const mainText = document.querySelector(".container.content");

  mainText.innerHTML = mainText.innerHTML
    .replace(/the/g, "replaced")
    .replace(/The/g, "Replaced");
}

setTimeout(updateText, 4000);
