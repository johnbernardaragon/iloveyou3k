const openButton = document.getElementById("openLetter");
const letter = document.getElementById("letter");
const heartsLayer = document.getElementById("heartsLayer");

openButton.addEventListener("click", () => {
  const isOpening = letter.hidden;
  letter.hidden = !isOpening;
  openButton.setAttribute("aria-expanded", String(isOpening));
  openButton.innerHTML = isOpening
    ? '<span class="envelope">♡</span> Close my letter <span class="arrow">↗</span>'
    : '<span class="envelope">✉</span> Open my letter <span class="arrow">↗</span>';

  if (isOpening) {
    letter.scrollIntoView({ behavior: "smooth", block: "start" });
    releaseHearts();
  }
});

function releaseHearts() {
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = ["♥", "♡", "❤"][i % 3];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${12 + Math.random() * 20}px`;
    heart.style.animationDelay = `${Math.random() * 1.2}s`;
    heartsLayer.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
}
