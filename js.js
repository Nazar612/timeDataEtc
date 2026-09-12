const date = new Date();
console.log(date.getDate()); //Поточний число місяця
console.log(date.getFullYear())// Поточний рік
console.log(date.getHours());//поточна година
console.log(date.getMinutes());//поточна хвилина
console.log(date.getSeconds());//поточна секунда

//Зручно але з мінусами
console.log(date.toLocaleDateString()
);
console.log(date.toLocaleTimeString()
);

const commencerJsp = new Date("2026-09-19T19:00:00");
console.log(commencerJsp - date); 