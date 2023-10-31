const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const top = e.target.offsetTop;
        const left = e.target.offsetLeft;

        const insideTop = mouseX - left;
        const insideleft = mouseY - top;

        

        const circle = document.createElement('span');
        circle.setAttribute('class', 'circle');
        button.appendChild(circle);

        circle.style.top=insideleft;
        circle.style.left=insideTop;

        setTimeout(() => {
            circle.remove();
        }, 700);

    })
});