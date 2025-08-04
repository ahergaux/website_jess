function afficherSelection() {
    const date = document.querySelectorAll('input[name="activity"]:checked');
    const checkboxes = document.querySelectorAll('input[name="activity"]:checked');
    const resultat = document.getElementById('resultat');
    
    if (checkboxes.length === 0) {
        resultat.textContent = "Aucune activité sélectionnée.";
        return;
    }

    const selections = Array.from(checkboxes).map(cb => cb.value);
    resultat.textContent = date + ', je veux bien faire :' + selections.join(", ");
}