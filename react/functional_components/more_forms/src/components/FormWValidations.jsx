import React, { useState } from  'react';
    
const FormWValidations = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ firstNameError, setFirstNameError ] = useState("");
    const [ lastNameError, setLastNameError ] = useState("");
    const [ emailError, setEmailError ] = useState("");
    const [ passwordError, setPasswordError ] = useState("");
    const [ confirmPasswordError, setConfirmPasswordError ] = useState("");
    
    const handleFirstName = (e) => {
        setFirstName( e.target.value );
        if( e.target.value.length < 2 ) {
            setFirstNameError("First Name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    }
    const handleLastName = (e) => {
        setLastName( e.target.value );
        if( e.target.value.length < 2 ) {
            setLastNameError("Last Name must be at least 2 characters");
        } else {
            setLastNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail( e.target.value );
        if( e.target.value.length < 5 ) {
            setEmailError("Email must be at least 5 characters");
        } else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword( e.target.value );
        if( e.target.value.length < 8 ) {
            setPasswordError("Password must be at least 8 characters");
        } else {
            setPasswordError("");
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword( e.target.value );
        if( e.target.value !== password ) {
            setConfirmPasswordError("Passwords do not match");
        } else {
            setConfirmPasswordError("");
        }
    }
    const createUser = (e) => {
        if( !noErrors ){
            e.preventDefault();
        } else {
            e.preventDefault();
            const newUser = { firstName, lastName, email, password, confirmPassword }
            console.log("welcome", newUser)
            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }
        
    }
    const noErrors = !firstNameError && !lastNameError && !emailError && !passwordError && !confirmPasswordError

    return(
        <form onSubmit = { createUser }>
            <div className = "formGroup">
                <label htmlFor = "firstName">First Name</label>
                <input type = "text" onChange = { handleFirstName } value = { firstName } />
                {
                    firstNameError ?
                    <p style = {{ color:  "red" }} > { firstNameError } </p> : ""
                    
                }
            </div>
            <div className = "formGroup">
                <label htmlFor = "lastName">Last Name</label>
                <input type = "text" onChange = { handleLastName } value = { lastName } />
                {
                    lastNameError ?
                    <p style = {{ color:  "red" }} > { lastNameError } </p> : ""
                }
            </div>
            <div className = "formGroup">
                <label htmlFor = "email">Email</label>
                <input type = "text" onChange = { handleEmail } value = { email } />
                {
                    emailError ?
                    <p style = {{ color:  "red" }} > { emailError } </p> :  ""
                }
            </div>
            <div className = "formGroup">
                <label htmlFor = "password">Password</label>
                <input type = "password" onChange = { handlePassword } value = { password } />
                {
                    passwordError ?
                    <p style = {{ color:  "red" }} > { passwordError } </p> :  ""
                }
                {
                    confirmPasswordError ?
                    <p style = {{ color:  "red" }} > { confirmPasswordError } </p> :  ""
                }
            </div>
            <div className = "formGroup">
                <label htmlFor = "confirmPassword">Confirm Password</label>
                <input type = "password" onChange = { handleConfirmPassword } value = { confirmPassword } />
            </div>
            <input type = "submit" value = "Create User" />
        </form>
    );
};
    
export default FormWValidations;