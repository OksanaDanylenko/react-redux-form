import {connect} from 'react-redux';
import React from 'react';
import {Formik} from 'formik';
import {FormStyle, FieldStyle, LabelStyle, ButtonStyle, ControlButtonStyle, InvalidFeedbackStyle} from '../assets/styles/styles';
import * as Yup from 'yup';
import {onAddPAssword} from "../actions/MainActions";

const PasswordControl = (props) => {

    const {
        firstName,
        lastName,
        email
    } = props.appStore.uresInfo[0];

    const goBack = () => {
        props.router.push('/');
    };

    return (
        <Formik
            initialValues={{
                password: '',
                confirmPassword: ''
            }}

            validationSchema={Yup.object().shape({
                password: Yup.string()
                    .min(6, 'Should be more than 5 symbols')
                    .required('Required field'),
                confirmPassword:  Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Password doesn\'t match')
                    .required('Required field')
            })}

            onSubmit={(values) => {
                props.onAddPAssword(values);
                console.log('FirstName: ' + firstName);
                console.log('LastName: ' + lastName);
                console.log('Email: ' + email);
                console.log('Password: ' + values.password);
            }}

            render={({errors, touched}) => (
                <FormStyle className="form">
                    <div className="form-group">
                        <LabelStyle className="form-label" htmlFor="password">Password</LabelStyle>
                        <FieldStyle name="password" type="password"
                               className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}/>
                        <InvalidFeedbackStyle name="password" component="div" className="invalid-feedback"/>
                    </div>
                    <div className="form-group">
                        <LabelStyle className="form-label" htmlFor="confirmPassword">Confirm Password</LabelStyle>
                        <FieldStyle name="confirmPassword" type="password"
                               className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')}/>
                        <InvalidFeedbackStyle name="confirmPassword" component="div" className="invalid-feedback"/>
                    </div>
                    <ControlButtonStyle className="form-group control-button">
                        <ButtonStyle type="submit" className="register simple-button">Register</ButtonStyle>
                        <ButtonStyle onClick={goBack} className="simple-button">Back</ButtonStyle>
                    </ControlButtonStyle>
                </FormStyle>
            )}
        />
    )
};

const mapStateToProps = state => ({
    appStore: state
});

const mapDispatchToProps = dispatch => ({
    onAddPAssword: pass => {dispatch(onAddPAssword(pass))}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PasswordControl)