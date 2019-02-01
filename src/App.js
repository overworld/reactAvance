import React, {Component} from 'react';
import './App.css';
import {ClientProvider} from './providers/clientProvider'
import Header from './components/header'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from './components/Login'


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <ClientProvider>
                        <Header>
                            <Link to={"/login"}>Ce connecter </Link>
                        </Header>
                        <Route path="/login" component={Login}/>
                    </ClientProvider>
                </div>
            </Router>
        );
    }
}

export default App;
