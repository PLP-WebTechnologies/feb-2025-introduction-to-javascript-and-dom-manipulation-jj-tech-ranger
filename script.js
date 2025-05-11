function changeText() {
  const text = document.getElementById("dynamicText");
  text.textContent = "🌈 The text has been magically changed!";
  text.style.color = "#007BFF";
  text.style.fontWeight = "bold";
}

function toggleElement() {
  const container = document.getElementById("surpriseContainer");
  const existing = document.getElementById("surprise");

  if (existing) {
    container.removeChild(existing);
  } else {
    const newEl = document.createElement("p");
    newEl.id = "surprise";
    newEl.textContent = "🎉 Surprise! You toggled this element!";
    newEl.style.color = "green";
    container.appendChild(newEl);
  }
}
