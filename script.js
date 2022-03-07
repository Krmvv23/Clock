setInterval(setClock, 1000);


function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() * 6;
    const minutesRatio = currentDate.getMinutes() * 6
    const hoursRatio = currentDate.getHours() * 30
    
    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.getElementById('second');




    setRotation(secondHand,secondsRatio)
    setRotation(minuteHand,minutesRatio)
    setRotation(hourHand,hoursRatio)


};

function setRotation(element,rotationRatio) {
    element.style.transform = `rotate(${rotationRatio}deg)`;
};
