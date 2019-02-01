import React, {Component} from 'react';

const ClientContext = React.createContext();

export class ClientProvider extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogged: true,
            username: '',
            userPicture: ''
        }

    }

    login = (email, password) => {
        setTimeout(() => {
            this.setState({
                isLogged: true,
                username: 'ethan',
                userPicture: '  https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y\n'
            })
        },10)
    };

    logout = () => {
        setTimeout(() => {
            this.setState({
                isLogged: false,
                username: '',
                userPicture: ' '
            })
        },10)
    };


    render() {

        const {children} = this.props;

        return (
            <ClientContext.Provider
                value={{
                    isLogged : this.state.isLogged,
                    logout: this.logout,
                    login: this.login,
                    userName: this.state.username,
                    userPicture: this.state.userPicture,
                }}
            >
                {children}
            </ClientContext.Provider>
        );
    }

}

export const  ClientConsumer = ClientContext.Consumer;
