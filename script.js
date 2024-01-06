let clockColor = '#ffffff'; // Initial color, set to white

function changeClockColor() {
    clockColor = document.getElementById("colorPicker").value;
    updateClock();
    
    // Hide the color picker container after color selection
    document.getElementById("colorPickerContainer").style.display = "none";
}

function updateClock() {
    const now = new Date();

    let hours = now.getHours() % 12;
    hours = hours === 0 ? 12 : hours;

    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = now.getHours() >= 12 ? 'PM' : 'AM';

    const timeString = `${hours}:${padZero(minutes)}:${padZero(seconds)} ${ampm}`;
    document.getElementById("clock").innerHTML = timeString.split("").map((char, index) => {
        if (char === ' ') {
            return `<span>&nbsp;</span>`;
        }
        const color = index >= 11 && index <= 13 ? 'green' : clockColor;
        const animationClass = index >= 11 && index <= 13 ? 'flip' : ''; // Apply animation only to seconds
        return `<span class="${animationClass}" style="animation-delay: ${index}s; color: ${color}">${char}</span>`;
    }).join("");
}

function padZero(number) {
    return number < 10 ? `0${number}` : `${number}`;
}

// Initial call to display the clock
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);
