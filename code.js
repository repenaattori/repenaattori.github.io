let key = '';
let qnum = 1;
let index = 0;

document.addEventListener('keyup', updateKey);
let wordDiv = document.getElementById('word');
let qDiv = document.querySelector('h2');

function updateKey(e){
    // let letters = document.querySelectorAll('.letter');
    // letters[index].firstChild.textContent = e.key.toUpperCase();

    // let matches = 0;
    // for (let i = 0; i < letters.length; i++) {
    //     if(questions[qnum].a[i].toUpperCase() == letters[i].textContent.toUpperCase()){
    //         matches++;
    //     }
    // }

    
    // if(matches==questions[qnum].a.length){
    //     letters.forEach(l => l.classList.add('correct'))
    // }

}

setWord();

function setWord(){
    qDiv.textContent = questions[qnum].q;
    for (let i = 0; i < questions[qnum].a.length; i++) {
        let input = document.createElement('input');
        input.classList.add('letter');
        input.addEventListener('click',()=> letterClick(i));
        wordDiv.appendChild(input);        

        //input.addEventListener('input', e => console.log(e));
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

    index = ind;
}


function addCorrectLetter(){

}