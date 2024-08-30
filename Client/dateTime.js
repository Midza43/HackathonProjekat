function updateDate() {
    let now = new Date();
    let year = now.getFullYear();
    let monthIndex = now.getMonth();
    let day = now.getDate();
    let dayName = now.toLocaleDateString('hrv', { weekday: 'long' });


    const months = ["januar", "februar", "Mart", "April", "Maj", "Jun",
        "Jul", "August", "Septembar", "Oktobar", "Novembar", "Decembar"];

    let monthName = months[monthIndex];


    document.getElementById("date").innerHTML = `${dayName}, ${day}. ${monthName}`;
}

updateDate();
function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // format vremena
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
}

// osvjezavanje
updateTime();
setInterval(updateTime, 1000);