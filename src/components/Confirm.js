import React, { Component } from 'react'
import MuiTheme from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton'

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { firstName, lastName, email, job, city, country } } = this.props;
        return (
            <MuiTheme>
                <React.Fragment>
                    <AppBar title="Confirm Details" />
                    <List>
                        <ListItem
                            primaryText = "First Name"
                            secondaryText = { firstName }
                        />
                        <ListItem
                            primaryText = "Last Name"
                            secondaryText = { lastName }
                        />
                        <ListItem
                            primaryText = "Email"
                            secondaryText = { email }
                        />
                        <ListItem
                            primaryText = "First Name"
                            secondaryText = { job }
                        />
                        <ListItem
                            primaryText = "City"
                            secondaryText = { city }
                        />
                        <ListItem
                            primaryText = "Country"
                            secondaryText = { country }
                        />
                    </List>
                    <RaisedButton 
                        label = "Confirm"
                        primary = { true }
                        style = { styles.button }
                        onClick = { this.continue }
                    />
                    <RaisedButton 
                        label = "Back"
                        primary = { true }
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

export default Confirm
