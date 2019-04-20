import React from "react";
import PlayArrow from '@material-ui/icons/PlayArrow';
import MicNone from '@material-ui/icons/MicNone';
import {Card, CardContent, CardHeader, Typography} from "@material-ui/core";
import Chart from "./Chart";
import Paper from "@material-ui/core/Paper";
import github from "../assets/images/github.svg"
import {Link} from "react-router-dom";

export default function HomeComponent() {
    return (
        <>
            <div className="section intro">
                <div className="columns">
                    <div id="contribute-section-1" className="column contribute-section">
                        <div>
                            <Typography className="is-size-1" variant="h1">Record</Typography>
                            <Typography variant="h4">Donate your voice</Typography>
                        </div>
                        <Paper className="contribute-icon">
                            <Link to="/record">
                                <MicNone className="image is-96x96"  />
                            </Link>
                        </Paper>
                    </div>
                    <div id="contribute-section-2" className="column contribute-section">
                        <div>
                            <Typography className="is-size-1" variant="h1">Listen</Typography>
                            <Typography variant="h4">Help us validate voices</Typography>
                        </div>
                        <Paper className="contribute-icon">
                            <Link to="/listen">
                                <PlayArrow className="image is-96x96" />
                            </Link>
                        </Paper>
                    </div>
                </div>
            </div>

            <div className="section container">
                <div className="columns">
                    <div className="column is-5 has-text-centered is-middle">
                        <Typography variant="h2">
                            <p>Common Voice Uganda is an extension to Mozilla's initiative to help teach machines how real people speak.</p>
                            <p>Voice is natural, voice is human. That’s why we’re excited about creating usable voice technology for our machines.</p>
                        </Typography>
                    </div>
                    <div className="column is-5 is-offset-2 is-size-5">
                        <p>To create voice systems, developers need an extremely large amount of voice data.</p>

                        <p>Most of the data used by large companies isn’t available to the majority of people. We think that stifles innovation. So we’ve launched Common Voice, a project to help make voice recognition open and accessible to everyone.</p>

                        <p>Now you can donate your voice to help us build an open-source voice database that anyone can use to make innovative apps for devices and the web. Read a sentence to help machines learn how real people speak. Check the work of other contributors to improve the quality. It’s that simple!</p>

                        <p>We've created a platform specific to Uganda- with an eye on expanding to the rest of East Africa to focus on diversity and inclusion in publicly available data sets</p>
                    </div>
                </div>
            </div>

            <div className="section container">
                <div className="columns">
                    <Card className="column is-5">
                        <CardHeader title="Hours Recorded" />
                        <CardContent>
                            <Chart />
                        </CardContent>
                    </Card>
                    <Card className="column is-5 is-offset-2">
                        <CardHeader title="Hours Validated" />
                        <CardContent>
                            <Chart />
                        </CardContent>
                    </Card>
                </div>
            </div>

            <footer className="footer content has-text-centered">
                <div className="columns">
                    <div className="column center">
                        <div>
                            <a href="https://github.com/common-voice-uganda"><img src={github} className="image is-48x48" alt="Github"/></a>
                            <Typography variant="h5">Github</Typography>
                        </div>
                    </div>
                </div>
                <Typography variant="h3">
                    ** This project is in no way affiliated to Mozilla or the Official <a href="https://voice.mozilla.org/en">Common Voice Project</a> **
                </Typography>
            </footer>
        </>
    );
}
