function checkAnswers() {
    const correctAnswers = {
        q1: "15/04/2024",
        q2: "01/06/2024",
        q3: "31/01/2006"
    };

    const userAnswers = {
        q1: document.getElementById('q1').value,
        q2: document.getElementById('q2').value,
        q3: document.getElementById('q3').value
    };

    let allCorrect = true;

    for (let key in correctAnswers) {
        if (correctAnswers[key] !== userAnswers[key]) {
            allCorrect = false;
            break;
        }
    }

    const resultElement = document.getElementById('result');
    if (allCorrect) {
        resultElement.innerHTML = 'Aeeeeeeee  <a href="Te amoo/index.html">Clique aqui para ir ao site final</a>.';
        resultElement.style.color = 'green';
    } else {
        resultElement.innerHTML = 'Errou 😒 Bora tentar mais uma vez';
        resultElement.style.color = 'red';
    }
}
