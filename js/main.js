const { createApp } = Vue

createApp({
    data() {
        return {
            activeIndex: 0,
            searchContact: '',
            myMessage: {
                date: '',
                message: '',
                status: 'sent'
            },
            answerMessage: {
                date: '',
                message: 'Ok',
                status: 'received'
            },
            
            contacts: [ 
                // Michele
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        }, 
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        }, 
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                // Fabio
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages:                    [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'                  
                        }, 
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'                          
                        }, 
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'                          
                        }
                    ],
                },
                // Samuele
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'                  
                        }, 
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'                          
                        }, 
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'                          
                        }
                    ],
                },
                // Alessandro B.
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,                  
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'

                        }, 
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },   
                    ],
                },
                // Alessandro l.
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        }, 
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }, 
                    ],
                },
                // Claudia
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        }, 
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        }, 
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                // Federico
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        }, 
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        },
                    ],
                },
                // Davide
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        }, 
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        }, 
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                },
            ]
        }                 
    },

    computed: {
        filteredContacts() {
            const searchTerm = this.searchContact.toLowerCase().trim();
            const filtered = this.contacts.filter(contact => contact.name.toLowerCase().includes(searchTerm));
            return filtered;
        },
        activeContact(){
            return this.contacts[this.activeIndex] 
        },
    },

    methods: {
        contactClick(index) {
            this.activeIndex = index;
        },

        myNewMessage(){
            const currentTime = this.getCurrentTime();
            this.myMessage.date = currentTime;
            this.activeContact.messages.push({...this.myMessage});
            setTimeout(() => {
                this.answerMessage.date = currentTime;
                this.activeContact.messages.push({...this.answerMessage});
            }, 1000)
            this.myMessage.message = '';
        },

        getLastMessage(contact) {
            const lastMessage = contact.messages[contact.messages.length - 1];
            return lastMessage ? lastMessage.message : '';
        },

        getLastMessageDate(contact) {
            const lastMessage = contact.messages[contact.messages.length - 1];
            return lastMessage ? lastMessage.date : '';
        },

        getCurrentTime(){
            const now = new Date();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            return `${hours}:${minutes}`;
        },

        deleteMessage(messageIndex){
            this.activeContact.messages.splice(messageIndex, 1);
        }
     
    }

 

}).mount('#app')



