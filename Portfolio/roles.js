const roles = [
    "Web Developer",
    "Front-End Developer",
    "Back-End Developer",
    "Quality Assurance Analyst",
    "Tester"
  ];

  let i = 0; // which word
  let j = 0; // which letter
  let currentWord = "";
  let isDeleting = false;
  const roleEl = document.getElementById("role");

  function typeEffect() {
    currentWord = roles[i];

    if (isDeleting) {
      roleEl.textContent = currentWord.substring(0, j--);
      if (j < 0) {
        isDeleting = false;
        i = (i + 1) % roles.length; // next word
      }
    } else {
      roleEl.textContent = currentWord.substring(0, j++);
      if (j > currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1200); // pause before deleting
        return;
      }
    }
    setTimeout(typeEffect, isDeleting ? 80 : 120); // typing vs deleting speed
  }

  typeEffect();