function afficherSelection() {
    const date = document.querySelectorAll('input[name="date"]:checked');
    const checkboxes = document.querySelectorAll('input[name="activity"]:checked');
    const resultat = document.getElementById('resultat');
    
    if (date.length === 0) {
            resultat.textContent = "Aucune date sélectionnée.";
            return;
        }

    if (checkboxes.length === 0) {
        resultat.textContent = "Aucune activité sélectionnée.";
        return;
    }

    const selections1 = Array.from(date).map(cb => cb.value);

    const selections2 = Array.from(checkboxes).map(cb => cb.value);
    resultat.textContent = selections1.join(", ") + ', je veux bien faire : ' + selections2.join(", ");
}