/** DOM Definitions */
const resultNumber = document.getElementById('result-number');
const playButton = document.getElementById('playButton');
const numberContainer = document.getElementById('number-container');



const calculateResult = () => {
    return Math.floor(Math.random() * 260) + 1;
};

playButton.addEventListener('click', () => {
    const animationDuration = 2000;
    const intervalTime = 50;
    let elapsed = 0;


    const interval = setInterval(() => {
        resultNumber.innerText = calculateResult();
        const newBorderWidth = Math.random() * 15 + 5; // Random border width between 5px and 20px
        numberContainer.style.borderWidth = `${newBorderWidth}px`;
        elapsed += intervalTime;

        if (elapsed >= animationDuration) {
            clearInterval(interval);
            resultNumber.innerText = calculateResult();
            numberContainer.style.borderWidth = '10px';
        }
    }, intervalTime);
});
