let text = document.getElementById('text');
let treeLeft = document.getElementById('tree-left');
let treeRight = document.getElementById('tree-right');
let gateLeft = document.getElementById('gate-left');
let gateRight = document.getElementById('gate-right');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    treeLeft.style.left = value * -1.5 + 'px';
    treeRight.style.left = value * +1.5 + 'px';
    gateLeft.style.left = value * 1 + 'px';
    gateRight.style.left = value * -1 + 'px';
})

// Définir une limite de défilement maximale
const maxScroll = 600;

// Ajouter un événement de défilement à la fenêtre
window.addEventListener("scroll", function() {
	// Obtenir la position de défilement actuelle de la fenêtre
	const currentScroll = window.scrollY;

	// Vérifier si la position de défilement dépasse la limite maximale
	if (currentScroll > maxScroll) {
		// Si oui, ajuster la position de défilement à la limite maximale
		window.scrollTo(0, maxScroll);
		// Ajouter une classe "disable-scroll" à l'élément body pour désactiver le défilement
		document.body.classList.add("disable-scroll");
	} else {
		// Sinon, supprimer la classe "disable-scroll" pour réactiver le défilement
		document.body.classList.remove("disable-scroll");
	}
});