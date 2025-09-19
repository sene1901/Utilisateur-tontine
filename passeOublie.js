 const form = document.getElementById("resetForm");
    const input = document.getElementById("identifiant");
    const message = document.getElementById("message");

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      const valeur = input.value.trim();

      // Regex pour email et numéro
      const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/i;
      const phoneRegex = /^[0-9]{8,15}$/;

      if (emailRegex.test(valeur)) {
        message.innerHTML = `<div class="alert alert-success">✅ Un lien de réinitialisation a été envoyé à votre e-mail.</div>`;
      } else if (phoneRegex.test(valeur)) {
        message.innerHTML = `<div class="alert alert-success">✅ Un code de réinitialisation a été envoyé par SMS.</div>`;
      } else {
        message.innerHTML = `<div class="alert alert-danger"> Veuillez entrer un e-mail ou un numéro de téléphone valide.</div>`;
      }
    });