/*
  GitHub Pages-ready birthday surprise.
  Change GIRLFRIEND_NAME below. Keep media in the assets folder.
*/
const GIRLFRIEND_NAME = "my love";

document.querySelectorAll("[data-name]").forEach((el) => {
  el.textContent = GIRLFRIEND_NAME;
});

const music = document.getElementById("bgMusic");
document.querySelectorAll("[data-music-toggle]").forEach((button) => {
  button.addEventListener("click", async () => {
    if (!music) return;
    try {
      if (music.paused) {
        await music.play();
        button.textContent = "♫ Music on";
      } else {
        music.pause();
        button.textContent = "♫ Music";
      }
    } catch (error) {
      button.textContent = "Tap to play ♫";
    }
  });
});

const envelope = document.getElementById("openEnvelope");
const letter = document.getElementById("letterContent");
if (envelope && letter) {
  envelope.addEventListener("click", () => {
    letter.hidden = false;
    envelope.classList.add("opened");
    envelope.setAttribute("aria-expanded", "true");
    letter.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}

const finalButton = document.getElementById("revealFinal");
const finalMessage = document.getElementById("finalMessage");
if (finalButton && finalMessage) {
  finalButton.addEventListener("click", () => {
    finalMessage.hidden = false;
    finalButton.hidden = true;
    finalMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}
