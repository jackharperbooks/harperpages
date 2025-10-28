document.addEventListener("DOMContentLoaded", () => {
  const typeSound = new Audio('assets/sounds/typewriter.wav');
  typeSound.volume = 0.4; // softer, adjust to taste

  function typeWriterEffect(element, text, speed = 75) {
    let i = 0;
    function typeChar() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        if (text.charAt(i) !== " ") {
          typeSound.currentTime = 0;
          typeSound.play();
        }
        i++;
        setTimeout(typeChar, speed);
      }
    }
    typeChar();
  }

  // Apply to all .typewriter headings
  document.querySelectorAll('.typewriter').forEach(el => {
    const text = el.textContent.trim();
    el.textContent = "";
    typeWriterEffect(el, text);
  });
});
