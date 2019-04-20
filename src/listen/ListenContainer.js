import React from "react";
import {Component} from "react";
import ListenComponent from "./ListenComponent";
import {URL} from "../config";
import {toast} from "../utils";


export default class ListenContainer extends Component{
    state = {
        recording: null,
        fetching: false,
        loading: false,
    };

    componentDidMount() {
        this.fetchRecording();
    }

    render() {
        return (
            <ListenComponent
                {...this.state}
                retry={() => this.fetchRecording()}
                correct={() => this.correctIncorrect()}
                incorrect={() => this.correctIncorrect(false)}
            />
        )
    }

    fetchRecording() {
        this.setState({
            recording: null,
            fetching: true,
            loading: false,
        });
        fetch(`${URL}/commonvoice/recordings/imfeelinglucky`).then((response) => {
            if (response.ok){
                response.json().then((data) => {
                    this.setState({
                        recording: data,
                        fetching: false,
                        loading: false,
                    });
                })
            }
            else{
                this.setState({
                    recording: null,
                    fetching: false,
                    loading: false,
                });
            }
        }).catch(error => {
            this.setState({
                recording: null,
                fetching: false,
                loading: false,
            });
        })
    }

    correctIncorrect(correct=true) {
        const {recording: {id}} = this.state;

        this.setState({
            fetching: false,
            loading: true,
        });
        toast(`Marking recording as ${correct ? "correct" : "incorrect"}`, true);

        fetch(`${URL}/commonvoice/recordings/${id}`, {
            method: correct ? "POST" : "DELETE"
        }).then((response) => {
            this.setState({
                fetching: false,
                loading: false,
            });
            if (response.ok){
                toast("Done!", true);
                this.fetchRecording();
            }
            else{
                toast("Failed.\nPlease retry");
            }
        }).catch(error=> {
            this.setState({
                fetching: false,
                loading: false,
            });
            toast("Failed.\nPlease retry");
        });
    }
}
