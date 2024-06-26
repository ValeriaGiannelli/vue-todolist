// estrapolo il metodo del framework che ci permette di creare app Vue
const { createApp } = Vue;

// creo l'istanza di un'app VUE e la collogo all'ID contenitore 
createApp ({
    data(){
        return {
            userInput: '',
            toDoList : [
                {
                    text: 'fare spesa',
                    done: false,
                }, 
                {
                    text: 'esercizio',
                    done: true,
                }, 
                {
                    text: 'doccia',
                    done: true,
                }, 
                {
                    text: 'pulire casa',
                    done: false,
                }, 
                {
                    text: 'vedersi con Pippo',
                    done: false,
                }
            ],
            newItem : {
                text: '',
                done: false,
            }
        }
    },
    methods: {
        // togliere l'item dalla lista
        cancelItem(indice){
            this.toDoList.splice(indice, 1);
        },

        // aggiungo l'elemento
        addItem(){
            // alla proprietà dell'elemento assegna il valore che ha scritto la persona
            this.newItem['text'] = this.userInput;
            // inserisci poi nella lista questo nuovo oggetto
            this.toDoList.unshift(this.newItem);
            // imposta il campo di input a vuoto
            this.userInput = ''
        },

        changeClass(indiceElemento){
            // console.log(this.toDoList[indiceElemento].done);
            // se la classe che ha l'elemento è true metti false, altrimenti viceversa
            if(this.toDoList[indiceElemento].done === false){
                this.toDoList[indiceElemento].done = true;
            } else if(this.toDoList[indiceElemento].done === true){
                this.toDoList[indiceElemento].done = false;
            } 
        }

    }

}).mount("#container");