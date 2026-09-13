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

const commencerPromotion = new Date("2026-09-19T19:00:00");
const totalTimeToPromo = commencerPromotion - date;

function startTimer(difference) {
    const totalSeconds = Math.floor(difference / 1000);

    const days = Math.floor(totalSeconds / 86400);
    const ostatok = Math.floor(totalSeconds % 86400)
    const hours = Math.floor(ostatok / 3600);
    const ostatok2 = Math.floor(totalSeconds % 3600)
    const minutes = Math.floor(ostatok2 / 60);
    const secondes = Math.floor(ostatok2 % 60);

    console.log(days + ":" + hours + ":" + minutes + ":" + secondes);
}

setInterval(()=> {
    const date = new Date();
    const totalTimeToPromo = commencerPromotion - date;
    startTimer(totalTimeToPromo)
    // console.log(totalTimeToPromo);
},1000)
