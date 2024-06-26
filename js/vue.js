// estrapolo il metodo del framework che ci permette di creare app Vue
const { createApp } = Vue;

// creo l'istanza di un'app VUE e la collogo all'ID contenitore 
createApp ({
    data(){
        return {
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
            ]
        }
    },
    methods: {
        // togliere l'item dalla lista
        cancelItem(indice){
            this.toDoList.splice(indice, 1);
        }
    }

}).mount("#container");