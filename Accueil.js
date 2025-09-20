document.addEventListener("DOMContentLoaded", () => {
  const cotisationLink = document.querySelector('.sidebar a[data-page="Cotisation.html"]'); // Cotisations
  const utilisateurBtn = document.querySelector('.accordion-button'); // Utilisateurs
  const content = document.getElementById("main-content");
  const navbarTitle = document.querySelector(".navbar .navbar-brand"); // titre navbar

  function loadPage(page, title = "") {
    fetch(page)
      .then(res => res.text())
      .then(data => {
        content.innerHTML = data;
        if (title) {
          navbarTitle.textContent = title; // ✅ changer le titre seulement si fourni
        }
      })
      .catch(() => {
        content.innerHTML = "<p class='text-danger'>Erreur de chargement...</p>";
        navbarTitle.textContent = "Erreur";
      });
  }

  // Charger Cotisation par défaut
  loadPage("Cotisation.html", "Cotisations");

  // ✅ Clic sur Cotisations
  cotisationLink.addEventListener("click", e => {
    e.preventDefault();
    loadPage("Cotisation.html", "Cotisations");
  });

  // ✅ Clic sur Utilisateurs
  utilisateurBtn.addEventListener("click", () => {
    navbarTitle.textContent = "Profil";
  });
});
