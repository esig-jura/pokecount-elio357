/**
 * Fichier principal JS pour l’application PokeCount.
 * Auteur, version et date renseignés en commentaire.
 */

"use strict"; // Active le mode strict pour éviter certaines erreurs JavaScript.

// --- Sélection des éléments HTML par leur ID ---
const sauvegardeEl = document.getElementById("sauvegarde-el"); // Liste des captures sauvegardées
const compteurEl = document.getElementById("compteur-el");     // Affichage du compteur
const capturerBtn = document.getElementById("capturer-btn");   // Bouton "CAPTURER"
const sauvegarderBtn = document.getElementById("sauvegarder-btn"); // Bouton "SAUVEGARDER"
const resetBtn = document.getElementById("reset-btn");         // Bouton "RESET"
console.log(resetBtn); // Affiche l’élément resetBtn dans la console (pour debug).

// --- Ajout des écouteurs d’événements sur les boutons ---
capturerBtn.addEventListener("click", capturer);      // Clique sur "CAPTURER" → fonction capturer()
sauvegarderBtn.addEventListener("click", sauvegarder);// Clique sur "SAUVEGARDER" → fonction sauvegarder()
resetBtn.addEventListener("click", reset);            // Clique sur "RESET" → fonction reset()

// --- Initialisation du compteur ---
let compteur = 0; // Nombre de Pokémon capturés en cours

/**
 * Fonction capturer :
 * - Incrémente le compteur
 * - Met à jour l’affichage
 * - Change la couleur selon la valeur
 */
function capturer() {
    compteur += 1; // +1 capture
    compteurEl.textContent = compteur; // Affiche la nouvelle valeur

    // Couleur selon le nombre de captures
    if (compteur < 5) {
        compteurEl.style.color = "green"; // Moins de 5 → vert
    } else if (compteur < 10) {
        compteurEl.style.color = "yellow"; // 5 à 9 → jaune
    } else {
        compteurEl.style.color = "red"; // 10 ou plus → rouge
    }
}

/**
 * Fonction sauvegarder :
 * - Ajoute la capture à la liste (en HTML)
 * - Sauvegarde la liste dans le localStorage
 * - Réinitialise le compteur
 */
function sauvegarder() {
    let compteurStr = `<li>${compteur} Pokémons</li>`; // Format d’une capture
    sauvegardeEl.innerHTML += compteurStr; // Ajoute à la liste affichée
    localStorage.setItem("captures", sauvegardeEl.innerHTML); // Sauvegarde dans le navigateur
    compteur = 0; // Remet à zéro
    compteurEl.textContent = compteur; // Met à jour l’affichage
}

/**
 * Fonction reset :
 * - Remet le compteur à zéro
 * - Vide la liste des captures
 * - Supprime la sauvegarde du navigateur
 */
function reset() {
    compteur = 0;
    compteurEl.textContent = compteur;
    compteurEl.style.color = "black"; // Couleur par défaut
    sauvegardeEl.textContent = ""; // Vide la liste
    localStorage.removeItem("captures"); // Supprime la sauvegarde
}

// --- Au chargement de la page, recharge les captures sauvegardées ---
window.addEventListener("load", () => {
    sauvegardeEl.innerHTML = localStorage.getItem("captures") || ""; // Restaure la liste ou vide si rien
});