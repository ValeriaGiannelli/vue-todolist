// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


// creo una lista della spesa
const myList = ["pane", "tofu", "verdura", "biscotti", "ceci", "lenticchie", "patatine", "birra"];


// per ogni elemento devo stapare un li in pagina

// prendo elemento contenitore della mia lista
const unorderList = document.getElementById("my_list");


// creo un ciclo while per prendere i singoli elementi dell'array:
// creo la variabile
let i = 0; //la setto a zero, perché devo dare una condizione di partenza al ciclo successivo
while(i < myList.length){ // metto la condizione per la quale il ciclo deve continuare
    // creo l'elemento per ogni i
    let listItem = `<li class="item_list"><i class="fa-regular fa-square"></i>${myList[i]}</li>`;

    // inserisco questo elemento nel contenitore della lista
    unorderList.innerHTML += listItem;

    // aumenta l'i di uno (altrimenti loop)
    i++;
}

// al click dell'icona si aggiunge una classe

// prendo tutti gli item della mia lista
let listItem = document.querySelectorAll(".item_list");
console.log(listItem);

// prendo l'elemento di pagina sulla quale deve essere fatta la cosa onclick
// ma deve essere fatta su più elementi
let allTickList = document.querySelectorAll(".fa-regular.fa-square");
console.log(allTickList);

// quando clicco l'icona messa all'indice 0 mi si deve aggiungere una classe allo stesso indice dell'elemento listItem
console.log(allTickList[1]);


// creo un evento di click
for(let j = 0; j < allTickList.length; j++){

    allTickList[j].addEventListener("click",
        function(){
            // listItem[j].classList.toggle("done");

            if(listItem[j].classList.contains("done")) {//se non presente la classe done -> aggiungi
                listItem[j].classList.remove("done");
                console.log(listItem[j]);
            } else{ //se è presente -> la togli
                listItem[j].classList.add("done");
                console.log(listItem[j]);
            }

        }
    )
}




// come lo generalizzo????