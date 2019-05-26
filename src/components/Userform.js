import React, { Component } from 'react'
import FormUserDetails from '../components/FormUserDetails'

export class Userform extends Component {
state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    job: '',
    city: '',
    country: ''
}

//Proceed to next step
nextStep = () => {
    const { step } = this.state;
    this.setState({
        step: step + 1
    });
}

prevStep = () => {
    const { step } = this.state;
    this.state({
        step: step - 1
    });
}

//Handle Field Change
handleChange = input => e => {
    this.setState({[input]: e.target.value});
}

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, job, city, country } = this.state;

        const values = {firstName, lastName, email, job, city, country }

        switch(step) {
            case 1:
                return (
                    <FormUserDetails 
                        nextStep = {this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 2:
                return <h1>FormPersonalDetails</h1>;
            case 3:
                return <h1>Confirm</h1>;
            case 4:
                return <h1>Success</h1>;
        };

        return (
            <form>
                
            </form>
        )
    }
}

export default Userform
