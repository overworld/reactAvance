import React, {Component} from 'react';
import './App.css';
import {ClientProvider} from './providers/clientProvider'
import {ChatProvider} from './providers/chatProvider'
import Header from './components/header'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from './components/Login'
import Tchat from "./page/tchat";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <ClientProvider>
                        <ChatProvider>

                            <Header>
                                <Link to={"/login"}>Ce connecter </Link>
                            </Header>
                            <Route path="/login" component={Login}/>

                            <Route path={'/tchat'} component={Tchat}/>

                        </ChatProvider>
                    </ClientProvider>
                </div>
            </Router>
        );
    }
}

export default App;
