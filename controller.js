let btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
    let container = document.querySelector('.container');
    container.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        let row = document.createElement('div');
        row.className = 'row';

        for (let j = 0; j < 5; j++) {
            let random = Math.random();

            let image = document.createElement('img');
            if (random < 0.5) {
                image.src = 'img/A/' + (i*5 +j + 1) + '.jpeg';
            }
            else {
                image.src = 'img/B/' + (i*5 +j + 1) + '.jpg';
            }

            row.appendChild(image);
        }
        container.appendChild(row);
    }
});