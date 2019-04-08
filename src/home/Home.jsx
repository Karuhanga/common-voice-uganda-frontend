import React from "react";
import Grid from "@material-ui/core/Grid";
import Action from "./Action";
import microphone from "../../assets/images/microphone.png"
import play from "../../assets/images/play.png"

export default function HomeComponent() {
    return (
        <main className="content">
            <Grid className="grow" container spacing="24">
                <Action actionName="Speak" image={microphone} key="speak" />
                <Action actionName="Listen" image={play} key="listen" />
            </Grid>
        </main>
    );
}
