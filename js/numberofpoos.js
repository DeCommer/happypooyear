const date1 = new Date(('09/15/2019'));
const date2 = new Date('01/01/2020');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
document.getElementById("numopoo").textContent = `190 / ${diffDays} days left`;
