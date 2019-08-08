import {connect} from 'react-redux';
import React from 'react';
import {Formik} from 'formik';
import {FormStyle, FieldStyle, LabelStyle, ButtonStyle, InvalidFeedbackStyle} from '../assets/styles/styles';
import * as Yup from 'yup';
import {onAddUserInfo} from '../actions/MainActions';

const Basic = (props) =>{

        const {
            firstName,
            lastName,
            email
        } = props.appStore.uresInfo[0];

        return (
            <Formik
                initialValues={{
                    firstName: firstName || '',
                    lastName: lastName || '',
                    email: email || ''
                }}

                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .required('Required field'),
                    lastName: Yup.string()
                        .required('Required field'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required field'),
                })}

                onSubmit = {(values) => {
                    props.onAddUserInfo(values);
                    props.router.push('/password');
                }}

                render={({errors, touched}) => (
                    <FormStyle >
                        <div className="form-group">
                            <LabelStyle className="form-label" htmlFor="firstName">First Name</LabelStyle>
                            <FieldStyle name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')}/>
                            <InvalidFeedbackStyle name="firstName" component="div" className="invalid-feedback"/>
                        </div>
                        <div className="form-group">
                            <LabelStyle className="form-label" htmlFor="lastName">Last Name</LabelStyle>
                            <FieldStyle name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')}/>
                            <InvalidFeedbackStyle name="lastName" component="div" className="invalid-feedback"/>
                        </div>
                        <div className="form-group">
                            <LabelStyle className="form-label" htmlFor="email">Email</LabelStyle>
                            <FieldStyle name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}/>
                            <InvalidFeedbackStyle name="email" component="div" className="invalid-feedback"/>
                        </div>
                        <div className="form-group">
                            <ButtonStyle type="submit" className="simple-button">Continue</ButtonStyle>
                        </div>
                    </FormStyle>
                )}
            />
        )
};

const mapStateToProps = state => ({
    appStore: state
});

const mapDispatchToProps = dispatch => ({
     onAddUserInfo: obj => {dispatch(onAddUserInfo(obj))}
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Basic)


