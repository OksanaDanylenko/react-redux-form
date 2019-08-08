import {connect} from 'react-redux';
import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';

class PasswordControl extends React.Component {

    goBack = () => {
        this.props.router.push('/');
    };

    render() {

        return (
            <Formik
                initialValues={{
                    password: '',
                    confirmPassword: ''
                }}

                validate={values => {
                    let errors = {};

                    if (values.password.length < 6) {
                        errors.password = 'Should be more than 5 symbols';
                    }
                    else if (values.confirmPassword !== values.password) {
                        errors.confirmPassword = 'Password doesn\'t match';
                    }

                    return errors;
                }}


                onSubmit={(values) => {
                    this.props.onAddPAssword(values);
                    console.log('FirstName: ' + this.props.appStore.uresInfo[0].firstName);
                    console.log('LastName: ' + this.props.appStore.uresInfo[0].lastName);
                    console.log('Email: ' + this.props.appStore.uresInfo[0].email);
                    console.log('Password: ' + this.props.appStore.passwords[0].password);
                }}

                render={({errors, touched}) => (
                    <Form className="form">
                        <div className="form-group">
                            <label className="form-label" htmlFor="password">Password</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}/>
                            <ErrorMessage name="password" component="div" className="invalid-feedback"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                            <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')}/>
                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback"/>
                        </div>
                        <div className="form-group control-button">
                            <button type="submit" className="register simple-button">Register</button>
                            <button onClick={this.goBack} className="simple-button">Back</button>
                        </div>
                    </Form>
                )}
            />
        )
    }
}

export default connect(
    state => ({
        appStore: state
    }),
    dispatch => ({
        onAddPAssword: (pass) => {

            const payload = {
                password: pass.password
            };

            dispatch({type: 'ADD_PASSWORD', payload});
        }
    })
)(PasswordControl);