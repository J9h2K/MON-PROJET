// 🔧 Liste des candidats admissibles
const candidatsAdmissibles = [
    "Jean Dupont",
    "Alice Martin",
    "Mohamed Camara",
    "Fatou Diouf",
    "Pierre Durand"
];

// ✅ Fonction pour vérifier le résultat du candidat
function verifierResultat() {
    const nom = document.getElementById("nom").value.trim();
    const message = document.getElementById("message");

    // Vérification de la saisie
    if (nom === "") {
        message.textContent = "Veuillez entrer votre nom complet.";
        message.style.color = "red";
        return;
    }

    // Vérification de l'admissibilité avec gestion de la casse
    if (candidatsAdmissibles.includes(nom)) {
        message.textContent = `🎉 Félicitations ${nom}, vous êtes admissible !`;
        message.style.color = "green";
    } else {
        // Si le nom n'est pas dans la liste
        message.textContent = "😔 Désolé, vous n'êtes pas admissible.";
        message.style.color = "red";
    }
}
