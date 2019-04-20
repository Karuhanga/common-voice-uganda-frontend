import React from "react";
import ReactPlayer from "react-player";
import {Button, CircularProgress, Typography} from "@material-ui/core";

export default ({recording, loading, fetching, retry, correct, incorrect}) => {
    return (
        <div className="container listen has-text-centered">
            <div className="columns">
                <div className="column">
                    <div id="player">
                        {recording ?
                            <div>
                                <Typography className="is-size-5">{recording.text}</Typography>
                                <br/>
                                <ReactPlayer height="10vh" controls url={recording.recording} />
                            </div> : fetching ?
                            <CircularProgress color="secondary" /> :
                            <div>
                                Couldn't load recording
                                <br/>
                                <br/>
                                <Button onClick={retry} size="large" variant="contained" color="primary">Retry</Button>
                            </div>
                        }
                    </div>
                    <br/>
                    <Button onClick={correct} disabled={loading || fetching || !recording} size="large" variant="contained" color="primary">Correct</Button>
                    <br/>
                    <br/>
                    <Button onClick={incorrect} disabled={loading || fetching || !recording} size="large" variant="contained" color="secondary">Incorrect</Button>
                    <br/>
                    <br/>
                    <Button onClick={retry} disabled={loading || fetching || !recording} size="large" variant="contained" color="primary">Next</Button>
                    <br/>
                    <br/>
                    {loading ? <CircularProgress color="secondary" /> : ""}
                </div>
            </div>
        </div>
    );
}
