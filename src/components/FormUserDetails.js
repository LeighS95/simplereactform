import React, { Component } from 'react'
import MuiTheme from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiTheme>
                <React.Fragment>
                    <AppBar title="Enter Details" />
                    <TextField 
                        hintText = "Enter First Name"
                        floatingLabelText = "First Name"
                        onChange = { handleChange('firstName') }
                        defaultValue = { values.firstName }
                    />
                    <TextField 
                        hintText = "Enter Last Name"
                        floatingLabelText = "Last Name"
                        onChange = { handleChange('lastName') }
                        defaultValue = { values.lastName }
                    />
                    <TextField 
                        hintText = "Enter Email"
                        floatingLabelText = "Email"
                        onChange = { handleChange('email') }
                        defaultValue = { values.email }
                    />
                    <RaisedButton 
                        label = "Continue"
                        primary = { true }
                        style = { styles.button }
                        onClick = { this.continue }
                    />
                </React.Fragment>
            </MuiTheme>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails
