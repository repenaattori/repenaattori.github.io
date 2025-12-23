let key = '';
let qnum = 0;
let selectedBox = 0;
let filledWord = [];

let wordDiv = document.getElementById('word');
let qDiv = document.querySelector('h2');


setWord();

function setWord(){
    filledWord = new Array(questions[qnum].a.length).fill('*') ;    

    qDiv.textContent = questions[qnum].q;
    for (let i = 0; i < questions[qnum].a.length; i++) {
        let input = document.createElement('input');
        input.addEventListener('click',()=> letterClick(i));
        wordDiv.appendChild(input);        
        input.id=i.toString();
        input.addEventListener('input', e => checkLetters(e,i));
        input.setAttribute('maxlength', "1")
    }
}


function letterClick(ind){
    let letters = document.querySelectorAll('.letter');
    for (let i = 0; i < letters.length; i++) {
        if(ind==i){
            letters[i].classList.add('selected');
        }   
        else{
            letters[i].classList.remove('selected')
        }
    }

    selectedBox = ind;
}



function checkLetters(e,i){
    
    filledWord[i] = e.target.value;    
    console.log(filledWord.join(''));
    console.log(questions[qnum].a);
    
    
    if(filledWord.join('') == questions[qnum].a){        
        document.querySelector('h1').classList.remove('hidden');
        document.querySelector('#word').classList.add('hidden');
        
        let div = document.createElement('div');
        div.classList.add('resultletter');
        div.textContent = questions[qnum].letter;

        document.getElementById('letters').appendChild(div);

        setTimeout(resetNext, 3000);
        return
    }
}


function resetNext(){
    qnum++;
    
    wordDiv.textContent = '';
    document.querySelector('h1').classList.add('hidden');
    
    if(qnum == questions.length){
        qDiv.textContent= "Keräsit kaikki kirjaimet. Yhdistä ne veljesi kirjaimiin ja ratkaise lahjojen sijainti!";
        return;
    }

    
    document.querySelector('#word').classList.remove('hidden');
    setWord();
}