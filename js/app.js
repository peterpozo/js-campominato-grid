const eleSquares = document.querySelector('.squares');

for (i=1; i<=100; i++) {
    // eleSquares.innerHTML += `<div class="sq">${i}</div>`;
    const sq = document.createElement('div');
    sq.classList.add('sq');
    eleSquares.append(sq);

    sq.addEventListener('click', function(){
        this.classList.toggle('active');
    })
  }