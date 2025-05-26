// Quan s’envia el formulari de contacte, mostrem un missatge i reiniciem el formulari
document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault(); // Evita que es recarregui la pàgina
  alert('Gràcies per contactar-nos! Ens posarem en contacte aviat.');
  this.reset(); // Neteja els camps del formulari
});
function toggleMenu() {
  const nav = document.getElementById("nav");
  nav.classList.toggle("open");
}

