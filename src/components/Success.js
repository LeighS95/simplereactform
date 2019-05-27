import React, { Component } from 'react'
import MuiTheme from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        this.props.prevStep();
    }

    render() {
        return (
            <MuiTheme>
                <React.Fragment>
                    <AppBar title="Success" />
                    <h1>Thank you for submitting</h1>
                    <p>Have a nice day!</p>
                </React.Fragment>
            </MuiTheme>
        )
    }
}

export default Success
