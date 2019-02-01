import React, {Component} from 'react';
import {ClientConsumer} from '../providers/clientProvider'
import {ChatConsumer} from '../providers/chatProvider'


class Header extends Component {

    getContent(messageSeen) {

        return (
            <div>
                <span> Vous avez {messageSeen} messages non lus</span>
            </div>

        )
    }


    render() {
        return (
            <header>
                <ClientConsumer>
                    {({isLogged, login, logout, username}) => (
                        <div>
                            <ChatConsumer>
                                {({messageSeen}) => (
                                    this.getContent(messageSeen)
                                )}
                            </ChatConsumer>
                            {this.props.children}
                            <span>{isLogged ? ' logged ' : ' not logged '}</span>
                            <button className="logButton" onClick={() => isLogged ? logout() : login()}>{isLogged ? ' logout ' : ' login '}</button>
                        </div>
                    )}
                </ClientConsumer>
            </header>
        );
    }
}

export default Header;
