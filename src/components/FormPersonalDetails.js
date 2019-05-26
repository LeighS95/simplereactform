import React, { Component } from 'react'
import MuiTheme from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiTheme>
                <React.Fragment>
                    <AppBar title="Enter Personal Details" />
                    <TextField 
                        hintText = "Enter Job Title"
                        floatingLabelText = "Job"
                        onChange = { handleChange('job') }
                        defaultValue = { values.job }
                    />
                    <TextField 
                        hintText = "Enter City Name"
                        floatingLabelText = "City Name"
                        onChange = { handleChange('city') }
                        defaultValue = { values.city }
                    />
                    <TextField 
                        hintText = "Enter Country"
                        floatingLabelText = "Country"
                        onChange = { handleChange('country') }
                        defaultValue = { values.country }
                    />
                    <RaisedButton 
                        label = "Continue"
                        primary = { true }
                        style = { styles.button }
                        onClick = { this.continue }
                    />
                    <RaisedButton 
                        label = "Back"
                        primary = { false }
                        style = { styles.button }
                        onClick = { this.back }
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

export default FormPersonalDetails