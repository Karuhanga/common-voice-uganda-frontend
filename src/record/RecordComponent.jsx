import React from "react";
import {ReactMic} from "react-mic";
import {Button, Typography} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import InfoComponent from "./InfoComponent";

export default function (props) {
    const {loading, recording, uploading, click, onRecordingDone, statement, retryLoading, loadingError} = props;
    return (
        <div className="record container">
            <div className="columns">
                <div className="column is-12 has-text-centered">
                    <InfoComponent {...props} />
                    <Card className="has-background-primary has-margin">
                        <ReactMic
                            record={recording}
                            className="sound-wave"
                            onStop={onRecordingDone}
                            // onData={this.onData}
                            strokeColor="#4892b4"
                            backgroundColor="#f3c7d2" />
                    </Card>
                    <div>
                        <Button disabled={loading || uploading || loadingError} onClick={click} size="large" color="secondary" variant="contained">
                            {recording ? "Stop" : "Start"}
                        </Button>
                        <br/>
                        <br/>
                        <Button disabled={uploading || loading || loadingError || recording} onClick={retryLoading} size="large" color="primary" variant="contained">
                            Skip this one
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
