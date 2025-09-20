document.addEventListener("DOMContentLoaded", () => {
  const cotisationLink = document.querySelector('.sidebar a[data-page="Cotisation.html"]'); // Cotisations
  const utilisateurBtn = document.querySelector('.accordion-button'); // Utilisateurs
  const subLinks = document.querySelectorAll('.accordion-body a[data-page]'); // Sous-menus
  const content = document.getElementById("main-content");
  const navbarTitle = document.querySelector(".navbar .navbar-brand");

  function loadPage(page, title = "") {
    fetch(page)
      .then(res => res.text())
      .then(data => {
        content.innerHTML = data;
        if (title) {
          navbarTitle.textContent = title;
        }
      })
      .catch(() => {
        content.innerHTML = "<p class='text-danger'>Erreur de chargement...</p>";
        navbarTitle.textContent = "Erreur";
      });
  }

  // ✅ Charger Cotisations par défaut
  loadPage("Cotisation.html", "Cotisations");

  // ✅ Clic sur Cotisations
  cotisationLink.addEventListener("click", e => {
    e.preventDefault();
    loadPage("Cotisation.html", "Cotisations");
  });

  // ✅ Clic sur Utilisateurs → change seulement le titre
  utilisateurBtn.addEventListener("click", () => {
    navbarTitle.textContent = "Profil";
  });

  // ✅ Sous-menus (Informations, Changer mot de passe, etc.)
  subLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const page = link.getAttribute("data-page");
      if (page) {
        loadPage(page); 
        // 🚨 NE PAS changer le titre → reste "Profil"
      }
    });
  });
});
