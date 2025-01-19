// 🔧 Liste des candidats admissibles
const candidatsAdmissibles = [
    "17JM001",
    "17JM002",
    "17JM003",
    "17JM004",
    "17JM004",
    "17JM004",
    "17JM004",
    "17JM004",
    "17JM004",
    "17JM004",
    "17JM004",
    "17JM004",
    "17JM004",
    "17JM004",
    "17JM004",
    "17JM004",
    "17JM004",
    "17JM004",
    "17JM004",
    "17JM004",
    "17JM004",
    "17JM004",
    "17JM004",
    "17JM004",
    "17JM005"
];

// ✅ Fonction pour vérifier le résultat du candidat
function verifierResultat() {
    const nom = document.getElementById("nom").value.trim();
    const message = document.getElementById("message");

    // Vérification de la saisie
    if (nom === "") {
        message.textContent = "Verifier la structure du matricule et Réssayer.";
        message.style.color = "red";
        return;
    }

    // Vérification de l'admissibilité avec gestion de la casse
    if (candidatsAdmissibles.includes(nom)) {
        message.textContent = `🎉 Félicitations ${nom}, vous êtes admissible !
                                   Rendez-vous à la prochaine Etape !`;
        message.style.color = "green";
    } else {
        // Si le nom n'est pas dans la liste
        message.textContent = "😔 Désolé, vous n'êtes pas admissible.";
        message.style.color = "red";
    }
}
