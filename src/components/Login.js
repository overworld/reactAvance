import React, {Component} from 'react';
import {ClientConsumer} from '../providers/clientProvider'
import '../App.css'
import {withRouter} from "react-router-dom";
import Tchat from '../page/tchat';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";



class Login extends Component {


    constructor(){

        super();

    }

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

                        <Link to={`${this.props.match.url}/tchat`}>Accéder à l'Internet</Link>
                        <Route path={`${this.props.match.path}/tchat`} component={Tchat} />
                    </div>
                )}
            </ClientConsumer>
        );
    }
}

export default withRouter(Login);
