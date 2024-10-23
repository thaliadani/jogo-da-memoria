const emojis =[
    '👻',
    '👻',
    '🎃',
    '🎃', 
    '😈',
    '😈',
    '🐺',
    '🐺',
    '👽',
    '👽', 
    '💀',
    '💀',
    '🤡',
    '🤡',
    '🧛‍♀️',
    '🧛‍♀️',
    '🧙‍♂️',
    '🧙‍♂️',
    '🧟',
    '🧟',
];

let openCards =[];
let shuffleEmojis = emojis.toSorted(() => (Math.random() > 0.5 ? 2 : -1));

for(const element of shuffleEmojis){
    let box = document.createElement('main');
    box.className = 'item';
    box.innerHTML = element;
    box.onclick = handleClick;
    document.querySelector('.game').appendChild(box);
}

function handleClick(event){
    if(openCards.length < 2){
        this.classList.add('boxOpen');
        openCards.push(this);
    }
    if(openCards.length == 2){
        setTimeout(checkForMatch, 300);
        
    }
}

function checkForMatch(){
    if(openCards[0].innerHTML == openCards[1].innerHTML){
        openCards[0].classList.add('boxMatch');
        openCards[1].classList.add('boxMatch');
    }else{
        openCards[0].classList.remove('boxOpen');
        openCards[1].classList.remove('boxOpen');
    }
    openCards = [];

    if(document.querySelectorAll('.boxMatch').length == emojis.length){
        alert('Parabéns, você ganhou!');
    }
}