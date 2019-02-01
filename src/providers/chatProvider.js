import React, {Component} from 'react';
import Message from '../entity/message'
import {withRouter} from "react-router-dom";
const ChatContext = React.createContext();


export class ChatProviderClass extends Component {

    constructor(props) {
        super(props);

        this.socket = window.io.connect('http://localhost:4000');
        this.socket.on('chat message', this.onMessage.bind(this));

        //{msg : 'Hey', time: '01/02/2019 14:00', user: 'ethan'}

        this.state = {
            message : [],
            messageSeen :0,
            connectedUser : [],

        };

        this.props.history.listen((location,done) =>{
            if (location.pathname === '/login/tchat'){
            this.setState({messageSeenCount : 0});
            }
        })

    }

    sendMessage(msg,user){
        console.log('sendmessage' ,msg,user);
        this.socket.emit('chat message', {msg:msg,user:user})
    }

    onMessage(msg,){
        let messageSeenCount = this.state.messageSeen;
        if(this.props.location.pathname === '/login/tchat'){
            messageSeenCount = 0;
        }
        else {
            messageSeenCount++
        }

        this.setState((state)=>{
            let newMessage = state.message.slice();
            newMessage.push(new Message(msg.msg,msg.user,msg.date));

            return {
                message: newMessage,
                messageSeen : messageSeenCount
            }
        })
    }



    render() {

        const {children} = this.props;

        return (
            <ChatContext.Provider
                value={{

                    message : this.state.message,
                    messageSeen:  this.state.messageSeen,
                    connectedUser : this.state.connectedUser,
                    sendMessage : this.sendMessage.bind(this),

                }}
            >
                {children}
            </ChatContext.Provider>
        );
    }

}

export const  ChatConsumer = ChatContext.Consumer;
export const  ChatProvider = withRouter(ChatProviderClass);
