
let textArea = document.querySelector('#textWrite');
let WordBTN = document.querySelector(".btn1");
let WordBTN2 = document.querySelector(".btn2");
let showCounter = document.querySelector(".showCounter")
let CharacterShow = document.querySelector(".CharacterShow")

WordBTN.addEventListener("click", (e) => {
    e.preventDefault();
    
    if(textArea.value === ""){
        showCounter.textContent = 0;
        CharacterShow.textContent = 0;
    }
    else{
        let word = textArea.value;
        let Result1 = word.split(" ");
        let Result2 = word.split("");
        let Reshow1 = Result1.length;
        let Reshow2 = Result2.length;

        showCounter.textContent = Reshow1;
        CharacterShow.textContent = Reshow2;
    }

    
    
});

WordBTN2.addEventListener("click", (e) =>{
    e.preventDefault();
    textArea.value = "";
    showCounter.textContent = 0;
    CharacterShow.textContent = 0;

})

  