// Gère le volet déroulant
const openMenuBtn = document.getElementById('open-menu-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const fullScreenMenu = document.getElementById('full-screen-menu');

// Ouvrir le menu
openMenuBtn.addEventListener('click', () => {
  fullScreenMenu.style.display = 'flex';  
  setTimeout(() => { 
    fullScreenMenu.style.opacity = 1; 
  }, 10);
});

// Fermer le menu
closeMenuBtn.addEventListener('click', () => {
  fullScreenMenu.style.opacity = 0; 
  setTimeout(() => {
    fullScreenMenu.style.display = 'none'; 
  }, 300); 
});

// Fermer le menu si on clique en dehors
window.addEventListener('click', (e) => {
  if (e.target === fullScreenMenu) {
    fullScreenMenu.style.opacity = 0;
    setTimeout(() => {
      fullScreenMenu.style.display = 'none';
    }, 300);
  }
});
