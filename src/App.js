import React, {useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {useOvermind} from "./Others/OvermindHelper";
import Home from "./Components/Home";
import Chat from "./Components/Chat";
import Login from "./Components/Login";

const App = () => {
    const {state, actions} = useOvermind();

    return (
        <Router>
        
            <Switch>
            <Route exact path="/" component={Home} />
                <Route path="/chat" component={Chat} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    );

};

export default App;