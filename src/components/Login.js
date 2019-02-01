import React, {Component} from 'react';
import {ClientConsumer} from '../providers/clientProvider'
import '../App.css'
import {withRouter} from "react-router-dom";

class Login extends Component {


    onSubmit(login) {
        login();
        this.props.history.push("/");

    }

    render() {
        return (
            <ClientConsumer>
                {({login}) => (
                    <div className={"modal"}>
                        <form onSubmit={() => this.onSubmit(login)}>
                            <label>Nom d'utilisateur: </label>
                            <input type="text" name="username"/>
                            <br/>
                            <label>Mot de passe: </label>
                            <input type="password" name="password"/>
                            <br/>
                            <input type="submit" name="send"/>
                        </form>
                    </div>
                )}
            </ClientConsumer>
        );
    }
}

export default withRouter(Login);
