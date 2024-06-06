// creo una variabile per la la lista ul
const ul = document.querySelector(".listona");

// creo il ciclo per arrivare a 100
for (i =1; i <= 100; i++){
    const li = document.createElement("li");

    // multipli di 3
    if (i == 3 || i%3==0) {
        
    }
    
    // multipli di 5
    if (i == 5 || i%5==0){

    }
    
    // multipli di 3 e 5
    if ((i == 3 || i%3==0) && (i == 5 || i%5==0)) {

    }
}


// && (AND) || (OR)