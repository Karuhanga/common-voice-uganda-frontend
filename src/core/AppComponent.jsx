import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from "./Header";
import HomeComponent from "../home/Home";
import RecordContainer from "../record/RecordContainer";

const AppComponent = () => {
    return (
        <div>
            <Header />
            <main className="content">
                <Switch>
                    <Route exact path="/" component={HomeComponent}/>
                    <Route exact path="/record" component={RecordContainer}/>
                </Switch>
            </main>
            <div id="toast-wrapper">
                <div id="toast">Info</div>
            </div>
        </div>

    );
};

export default AppComponent;
