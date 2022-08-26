// Импортируем 
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

// Создание рандомного цвета
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Создаем в html коде стиль backgroundColor
function updateBodyBGcolor(color) {
    document.body.style.backgroundColor = color;
}

class ColorSwitcher {
    constructor(updateBodyBGcolor) {
    this.intervalID = null;
    this.isActive = false;
    this.updateBodyBGcolor = updateBodyBGcolor;
    stopBtn.disabled = true;
    }

    //Старт для начала рандома цветов и делает кнопку не активной  
    startChangeBGcolor() {
        if (this.isActive) {
        return;
        }
        startBtn.disabled = true;
        stopBtn.disabled = false;

        this.isActive = true;
        this.intervalID = setInterval(
            () => updateBodyBGcolor(getRandomHexColor()),
            1000
        );
    }
    
    //Останавливает рандом цветов и делает кнопку не активной  
    stopChangeBGcolor() {
        startBtn.disabled = false;
        stopBtn.disabled = true;

        clearInterval(this.intervalID);
        this.isActive = false;
    }
}

const colorSwitcher = new ColorSwitcher();

startBtn.addEventListener('click', () => colorSwitcher.startChangeBGcolor());
stopBtn.addEventListener('click', () => colorSwitcher.stopChangeBGcolor());