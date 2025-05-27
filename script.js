// Wait for the DOM content to load before running scripts
document.addEventListener('DOMContentLoaded', () => {

  // 1. Typewriter effect for the hero intro text
  const text = "Hi, I'm a Web Developer";
  let i = 0;
  const typewriterElement = document.getElementById('typewriter-text');

  function typewriter() {
    if (i < text.length) {
      typewriterElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typewriter, 100); // speed: 100ms per character
    }
  }
  typewriter();

  // 2. Button greeting alert
  const greetBtn = document.getElementById('greet-btn');
  if (greetBtn) {
    greetBtn.addEventListener('click', () => {
      alert('Hello! Thanks for visiting my portfolio.');
    });
  }

});
