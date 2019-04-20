import {Component} from "react";
import React from "react";
import RecordComponent from "./RecordComponent";
import {toast} from "../utils";

export default class RecordContainer extends Component {
    state = {
        recording: false,
        uploading: false,
        loading: false,
        loadingError: false,
        statement: {
            "id": "",
            "text": ""
        },
    };

    componentDidMount() {
        this.fetchStatement();
    }

    click() {
        const {recording} = this.state;
        this.setState({
            recording: !recording
        });
    }

    render() {
        return (
            <RecordComponent
                {...this.state}
                click={() => this.click()}
                onRecordingDone={(recordedVoice) => this.onRecordingDone(recordedVoice)}
                retryLoading={() => this.fetchStatement()}
            />
        )
    }

    onRecordingDone(recordedVoice) {

        console.log(recordedVoice.blob);
        const {statement} = this.state;

        this.setState({
            uploading: true,
            loading: false,
            recording: false,
            loadingError: false,
        });

        toast("Uploading...", true);

        let formData = new FormData();
        formData.append("common_voice_id", statement.id);
        formData.append("text", statement.text);
        formData.append("recording", recordedVoice.blob);

        fetch("https://common-voice.herokuapp.com/commonvoice/recordings", {
            method: "POST",
            body: formData,
        }).then(response => {
            if(response.ok){
                this.setState({
                    uploading: false
                });
                toast("Successfully uploaded recording.", true);
                this.fetchStatement();
            }
            else {
                toast("Failed to upload recording.\nPlease retry.");
                this.setState({
                    uploading: false,
                    loading: false,
                    recording: false,
                    loadingError: false,
                });
            }
        }).catch(error => {
            toast("Failed to upload recording.\nPlease retry.");
            this.setState({
                uploading: false,
                loading: false,
                recording: false,
                loadingError: false,
            });
        })
    }

    fetchStatement() {
        this.setState({
            loading: true,
            uploading: false,
            recording: false,
            loadingError: false,
        });
        fetch("https://common-voice.herokuapp.com/proxy/https://voice.mozilla.org/api/v1/en/sentences?count=1").then(response => {
                if (response.ok){
                    response.json().then(data => {
                            this.setState({
                                statement: data[0],
                                loading: false,
                                loadingError: false,
                            });
                        }
                    ).catch(error => {
                        this.setState({
                            statement: {
                                "id": "",
                                "text": ""
                            },
                            loading: false,
                            loadingError: true,
                        })
                    })
                }
            }
        ).catch(error => {
            this.setState({
                statement: {
                    "id": "",
                    "text": ""
                },
                loading: false,
                loadingError: true,
            })
        })
    }
}
