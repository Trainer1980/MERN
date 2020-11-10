import React, { useReducer } from 'react';

const initialState = {
        firstName: {
            value: '',
            error: null
        },
        lastName: {
            value: '',
            error: null
        },
        email: {
            value: '',
            error: null
        }
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]: action.payload
    };
}

const FormValidation = (props) => {
    const [ state, dispatch ] = useReducer(reducer, initialState);

    // const handleValidation = () => {
    //     let firstName = state.firstName;
    //     let lastName = state.lastName;
    //     let email = state.email;
    //     // let fieldIsValid = true;

    //     if(/[^a-zA-Z -]/.test(firstName)) {
    //         // fieldIsValid = false;
    //         firstName.error = 'First name contain only letters';
    //     }
    //     if(firstName.length !== 0 && firstName.length < 3) {
    //         // fieldIsValid = false;
    //         firstName.error = 'First name must contain at least 3 characters';
    //     }
    //     if(/[^a-zA-Z -]/.test(lastName)) {
    //         // fieldIsValid = false;
    //         lastName.error = "Last name contain only letters";
    //     }
    //     if(lastName.length < 3) {
    //         // fieldIsValid = false;
    //         lastName.error = "Last name must contain at least 3 characters"
    //     }
    //     if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
    //         // fieldIsValid = false;
    //         email.error = "Please enter a valid email"
    //     }
    // }

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: name,
            payload: value,
            
        });
    };


    return (
        <div>
            {JSON.stringify(state)}
            <form autoComplete="off">
                <div className = "formGroup">
                    <label>
                        <span> First Name:</span>{' '}
                        <input
                            name="firstName"
                            value={state.firstName.value}
                            onChange={handleChange}
                        />
                        { state.firstName.error !== null && (
                            <p className="error"> { state.firstName.error } </p>
                        )}
                    </label>
                </div>
                <div className = "formGroup">
                    <label>
                        <span> Last Name:</span>{' '}
                        <input
                            name="lastName"
                            value={state.lastName.value}
                            onChange={handleChange}
                        />
                        { state.lastName.error !== null && (
                            <p className="error"> { state.lastName.error } </p>
                        )}
                    </label>
                </div>
                <div className = "formGroup">
                    <label>
                        <span>Email:</span>{' '}
                        <input
                            name="email"
                            value={state.email.value}
                            onChange={handleChange}
                        />
                        { state.email.error !== null && (
                            <p className="error"> { state.email.error } </p>
                        )}
                    </label>
                </div>
            </form>
        </div>
    );
}

export default FormValidation;