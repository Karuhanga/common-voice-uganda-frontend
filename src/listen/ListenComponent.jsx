import React from "react";
import ReactPlayer from "react-player";
import {Button, CircularProgress} from "@material-ui/core";

export default ({recording, loading, fetching, retry, correct, incorrect}) => {
    return (
        <div className="container listen has-text-centered">
            <div className="columns">
                <div className="column">
                    <div id="player">
                        {recording ? <ReactPlayer height="15vh" controls url={recording.recording} /> : <CircularProgress color="secondary" />}
                    </div>
                    <br/>
                    <Button onClick={correct} disabled={loading || fetching} size="large" variant="contained" color="primary">Correct</Button>
                    <br/>
                    <br/>
                    <Button onClick={incorrect} disabled={loading || fetching} size="large" variant="contained" color="secondary">Incorrect</Button>
                    <br/>
                    <br/>
                    <Button onClick={retry} disabled={loading || fetching} size="large" variant="contained" color="primary">Next</Button>
                    <br/>
                    <br/>
                    {loading ? <CircularProgress color="secondary" /> : ""}
                </div>
            </div>
        </div>
    );
}
