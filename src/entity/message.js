import {format} from 'date-fns'

export  default class Message{
    constructor(msg,user,date){

        this.formatUser(user);
        this.formatMsg(msg);
        this.formatDate(date);
        this.id = date;
    }

    formatMsg(value){
        this.msg= value;
    }

    formatUser(value){
        this.user = value;
    }

    formatDate(value){
        this.date = format(new Date(value), 'DD/MM/YYYY HH:mm');
        console.log(this.date)
    }

}