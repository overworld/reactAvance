import React, {Component} from 'react';
import {ClientConsumer} from '../providers/clientProvider'


class Header extends Component {
    render() {
        return (
            <header>
                <ClientConsumer>
                    {({isLogged, login, logout}) => (
                        <div>
                            {this.props.children}
                            <span>{isLogged ? 'logged' : 'not logged'}</span>
                           <button onClick={() => isLogged ? logout() : login()}>{isLogged ? 'logout' : 'login'}</button>
                        </div>
                    )}
                </ClientConsumer>
            </header>
        );
    }
}

export default Header;
