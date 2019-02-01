import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {ClientConsumer} from '../providers/clientProvider'
import {ChatConsumer} from '../providers/chatProvider'
import {withRouter} from "react-router-dom";


class Tchat extends Component {


    constructor(props) {
        super(props);


    }

    getContent(isLogged, message, sendMessage,messageSeen) {



        if (isLogged) {

            let messageList = message.map((elt) => {
                return (
                    <li key={elt.id}>{elt.date} - {elt.user} : {elt.msg}  </li>
                );
            });


            return (
                <div>
                    <div className="result">
                        <ul>{messageList}</ul>
                    </div>
                    <form onSubmit={(e) => {e.preventDefault();sendMessage(e.target.elements.message.value,"Ethan")
                    }}>
                        <input  type="text" name="message" placeholder="Commencer à écrire !"/>
                        <br/>
                        <input type="submit" name="envoie"/>
                    </form>
                </div>

            )
        } else {
            return (
                <span>Vous devez etre connecté</span>
            )
        }

    }


    render() {
        return (
            <div className="Tchat">
                <ClientConsumer>
                    {({isLogged}) => (
                        <ChatConsumer>
                            {({message, sendMessage,messageSeen}) => (
                                this.getContent(isLogged, message,sendMessage,messageSeen)

                            )}
                        </ChatConsumer>
                    )}
                </ClientConsumer>
            </div>
        );
    }
}

export default Tchat;
