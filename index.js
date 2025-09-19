 const form = document.getElementById("inscriptionForm");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const email = document.getElementById("email");
  const telephone = document.getElementById("telephone");
  const message = document.getElementById("message");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Regex pour validation
    const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    const phoneRegex = /^[0-9]{8,15}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    // Vérification mot de passe
    if (!passwordRegex.test(password.value)) {
      message.innerHTML = `<div class="alert alert-danger">
        ❌ Le mot de passe doit contenir au moins 8 caractères, 
        avec une majuscule, une minuscule, un chiffre et un caractère spécial.
      </div>`;
      return;
    }

    // Vérification confirmation
    if (password.value !== confirmPassword.value) {
      message.innerHTML = `<div class="alert alert-danger">❌ Les mots de passe ne correspondent pas.</div>`;
      return;
    }

    // Vérification email
    if (!emailRegex.test(email.value)) {
      message.innerHTML = `<div class="alert alert-danger">❌ Veuillez entrer un email valide.</div>`;
      return;
    }

    // Vérification téléphone
    if (!phoneRegex.test(telephone.value)) {
      message.innerHTML = `<div class="alert alert-danger">❌ Le téléphone doit contenir uniquement des chiffres (8 à 15).</div>`;
      return;
    }

    // Succès
    message.innerHTML = `<div class="alert alert-success">✅ Inscription réussie !</div>`;
    form.reset();
  });