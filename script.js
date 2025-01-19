// 🔧 Liste des candidats admissibles
const candidatsAdmissibles = [
    "17JM010",
    "17JM025",
    "17JM042",
    "17JM035",
    "17JM053",
    "17JM083",
    "17JM059",
    "17JM087",
    "17JM092",
    "17JM063",
    "17JM020",
    "17JM097",
    "17JM075",
    "17JM098",
    "17JM031",
    "17JM094",
    "17JM065",
    "17JM012",
    "17JM089",
    "17JM004",
    "17JM066",
    "17JM051",
    "17JM083",
    "17JM041",
    "17JM009"
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
