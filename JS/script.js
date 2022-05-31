const alce = document.querySelector('.alce');
const pipe = document.querySelector('.pipe');

const jump = () => {
    alce.classList.add('jump');

    setTimeout(() => {
        alce.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const alcePosition = +window.getComputedStyle(alce).bottom.replace('px','');

    if (pipePosition <= 120 && pipePosition > 0 && alcePosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        alce.style.animation = 'none';
        alce.style.bottom = `${alcePosition}px`;

        alce.src = './imagens/game-over.png';
        alce.style.width = '100px'
        alce.style.marginLeft = '100px'

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', jump);