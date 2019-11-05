const date1 = Date.now();
const date2 = new Date('01/01/2020');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
document.getElementById("numopoo").textContent = `227 / ${diffDays} days left`;
