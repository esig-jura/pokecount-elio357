/**
 * Fichier JavaScript pour l'application PokeCount.
 * @author Steve Fallet <steve.fallet@divtec.ch>
 * @version 1.0 (Version actuelle)
 * @since 2024-01-31 (Date de création)
 */

"use strict";

// Récupération des éléments HTML
let sauvegardeEl = document.getElementById("sauvegarde-el");
let compteurEl = document.getElementById("compteur-el");
const capturerBtn = document.getElementById("capturer-btn");
const sauvegarderBtn = document.getElementById("sauvegarder-btn");

// Gestion des événements
capturerBtn.addEventListener("click", capturer);
sauvegarderBtn.addEventListener("click", sauvegarder);

// Initialisation du compteur
let compteur = 0

/**
 * Fonction qui :
 *   * incrémente le compteur
 *   * affiche la nouvelle valeur dans le HTML
 *   * change la couleur du texte en fonction de la valeur
 */
function capturer() {
    compteur += 1; // Incrémenter le compteur de 1

    compteurEl.textContent = compteur; // Mettre à jour le texte de l'élément <h2>

    // Changer la couleur du texte en fonction de la valeur du compteur
    if (compteur < 5) {
        compteurEl.style.color = "green"; // Couleur verte pour moins de 5 captures
    } else if (compteur < 10) {
        compteurEl.style.color = "yellow"; // Couleur jaune pour 5 à 9 captures
    } else {
        compteurEl.style.color = "red"; // Couleur rouge pour 10 captures ou plus
    }
}

/**
 * Fonction qui :
 *  * Ajoute la dernière capture au texte de sauvegarde
 *  * réinitialise le compteur à 0
 *  * met à jour le compteur dans le HTML
 *
 */
function sauvegarder() {
    let compteurStr = compteur + " Pokémons - ";
    sauvegardeEl.textContent += compteurStr; // Ajouter la valeur actuelle du compteur
    localStorage.setItem("captures", sauvegardeEl.textContent); // Sauvegarder les captures dans le localStorage
    compteur = 0;
    compteurEl.textContent = compteur;
}

// Attendre que la page soit chargée pour exécuter le code
window.addEventListener("load", () => {
    // Charger les captures sauvegardées dans localStorage ou une chaîne vide
    sauvegardeEl.textContent = localStorage.getItem("captures") || "";
});