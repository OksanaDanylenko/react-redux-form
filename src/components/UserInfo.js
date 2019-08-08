import {connect} from 'react-redux';
import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';

class Basic extends React.Component {

    render() {

        return (
            <Formik
                initialValues={{
                    firstName: this.props.appStore.uresInfo[0].firstName || '',
                    lastName: this.props.appStore.uresInfo[0].lastName || '',
                    email: this.props.appStore.uresInfo[0].email || ''
                }}

                validate={values => {
                    let errors = {};
                    if (!values.firstName) {
                        errors.firstName = 'Required field';
                    }

                    if (!values.lastName) {
                        errors.lastName = 'Required field';
                    }

                    if (!values.email) {
                        errors.email = 'Required field';
                    }
                    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }

                    return errors;
                }}

                onSubmit = {(values) => {
                    this.props.onAddUserInfo(values);
                    this.props.router.push('/password');
                }}

                render={({errors, touched}) => (
                    <Form className= "form">
                        <div className="form-group">
                            <label className="form-label" htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')}/>
                            <ErrorMessage name="firstName" component="div" className="invalid-feedback"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')}/>
                            <ErrorMessage name="lastName" component="div" className="invalid-feedback"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}/>
                            <ErrorMessage name="email" component="div" className="invalid-feedback"/>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="simple-button">Continue</button>
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
        onAddUserInfo: (obj) => {

            const payload = {
                id: Date.now().toString(),
                firstName: obj["firstName"],
                lastName: obj["lastName"],
                email: obj["email"]
            };

            dispatch({type: 'ADD_USER', payload});
        },
        onAddPAssword: () => {
            dispatch({type: 'ADD_PASSWORD'});
        }
    })
)(Basic);