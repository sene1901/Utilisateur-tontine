document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".sidebar a, .accordion-body a");
  const content = document.getElementById("main-content");

  function loadPage(page) {
    fetch(page)
      .then(res => res.text())
      .then(data => {
        content.innerHTML = data;
      })
      .catch(() => {
        content.innerHTML = "<p class='text-danger'>Erreur de chargement...</p>";
      });
  }

  // Charger Cotisation par défaut
  loadPage("Cotisation.html");

  // Gestion des clics
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const page = link.getAttribute("data-page");

      if (page) {
        loadPage(page);

        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
      }
    });
  });
});


// Import Firebase depuis CDN
  // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  // import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

  // // 🔹 Configuration Firebase (⚠️ remplace par ton propre config)
  // const firebaseConfig = {
  //   apiKey: "TA_CLE_API",
  //   authDomain: "ton-projet.firebaseapp.com",
  //   projectId: "ton-projet",
  //   storageBucket: "ton-projet.appspot.com",
  //   messagingSenderId: "TON_ID",
  //   appId: "TON_APP_ID"
  // };

  // // Initialisation Firebase
  // const app = initializeApp(firebaseConfig);
  // const db = getFirestore(app);

  // // Variables globales
  // let data = [];
  // const rowsPerPage = 4; // 🔹 Nombre de lignes par page
  // let currentPage = 1;
  // let totalPages = 1;

  // // Charger les données depuis Firestore
  // async function loadData() {
  //   const querySnapshot = await getDocs(collection(db, "cotisations"));
  //   data = querySnapshot.docs.map(doc => doc.data());

  //   totalPages = Math.ceil(data.length / rowsPerPage);
  //   displayTables(currentPage);
  // }

  // // Affichage des tableaux
  // function displayTables(page) {
  //   const start = (page - 1) * rowsPerPage;
  //   const end = start + rowsPerPage;
  //   const pageData = data.slice(start, end);

  //   // Tableau Juin
  //   const juinTable = document.getElementById("juinTable");
  //   juinTable.innerHTML = "";
  //   pageData.forEach(row => {
  //     const tr = document.createElement("tr");
  //     tr.innerHTML = `
  //       <td>${row.membre}</td>
  //       <td>${row.montant} FCFA</td>
  //       <td>${row.date}</td>
  //       <td>
  //         <span class="badge ${row.statut === "Validé" ? "bg-success" : "bg-warning text-dark"}">
  //           ${row.statut}
  //         </span>
  //       </td>
  //     `;
  //     juinTable.appendChild(tr);
  //   });

  //   // Tableau progression
  //   const progressTable = document.getElementById("progressTable");
  //   progressTable.innerHTML = "";
  //   pageData.forEach(row => {
  //     const tr = document.createElement("tr");
  //     tr.innerHTML = `
  //       <td>${row.membre}</td>
  //       <td>${row.date}</td>
  //       <td>
  //         <div class="progress">
  //           <div class="progress-bar ${row.progression >= 70 ? "bg-success" : "bg-info"}" 
  //                style="width: ${row.progression}%;">
  //             ${row.progression}%
  //           </div>
  //         </div>
  //       </td>
  //     `;
  //     progressTable.appendChild(tr);
  //   });

  //   renderPagination();
  // }

  // // Pagination
  // function renderPagination() {
  //   const pagination = document.getElementById("pagination");
  //   pagination.innerHTML = "";

  //   // Previous
  //   pagination.innerHTML += `
  //     <li class="page-item ${currentPage === 1 ? "disabled" : ""}">
  //       <a class="page-link" href="#" onclick="window.changePage(${currentPage - 1})">Previous</a>
  //     </li>
  //   `;

  //   // Numéros de pages
  //   for (let i = 1; i <= totalPages; i++) {
  //     pagination.innerHTML += `
  //       <li class="page-item ${i === currentPage ? "active" : ""}">
  //         <a class="page-link" href="#" onclick="window.changePage(${i})">${i}</a>
  //       </li>
  //     `;
  //   }

  //   // Next
  //   pagination.innerHTML += `
  //     <li class="page-item ${currentPage === totalPages ? "disabled" : ""}">
  //       <a class="page-link" href="#" onclick="window.changePage(${currentPage + 1})">Next</a>
  //     </li>
  //   `;
  // }

  // // Changer de page
  // window.changePage = function(page) {
  //   if (page < 1 || page > totalPages) return;
  //   currentPage = page;
  //   displayTables(currentPage);
  // };

  // // Lancer le chargement
  // loadData();
