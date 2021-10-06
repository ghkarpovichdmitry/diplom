import React, { useContext } from "react";
import { Formik } from 'formik';
import * as Yup from 'yup';
import Title from "../../components/UI/Title/Title";
import Input from "../../components/UI/Input";
import InputError from "../../components/UI/InputError/InputError";
import Button from "../../components/UI/Button/Button";
import { AuthContext } from "../../context";
import { Link } from "react-router-dom";

const LoginForm = () => {
    const { setAuth } = useContext( AuthContext );

    const validationSchema = Yup.object({
        email: Yup
            .string()
            .email('Invalid email address')
            .required('Required'),
        password: Yup
            .string()
            .min(7, 'Must be 7 characters or more')
            .required('Required'),
    });

    return (
        <div className="container login-form-box">
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={ validationSchema }

                onSubmit={( values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log( JSON.stringify( values, null, 2 ) );
                        setSubmitting( false );
                        setAuth( true );
                        localStorage.setItem( 'isAuth', 'true' );
                    }, 400);
                }}
            >
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                }) => (
                    <form onSubmit={ handleSubmit } className="login-form">
                        <Title tag="h1" size="h1" className={ 'align-center' }>Login</Title>

                        <Input
                            type='email'
                            name="email"
                            placeholder='Email'
                            title='Enter your email'
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            value={ values.email }
                        />
                        { errors.email && touched.email && <InputError className={'xxx'}>{ errors.email }</InputError>}

                        <Input
                            type="password"
                            name="password"
                            placeholder='Password'
                            title='Enter your password'
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            value={ values.password }
                        />
                        { errors.password && touched.password && <InputError className={'xxx'}>{ errors.password }</InputError>}

                        <Button type="submit" mod={'fullWidth'} disabled={ isSubmitting }>
                            Submit
                        </Button>

                        <div>
                            <span>Don't have an account? </span> <Link to="/signUp">Register</Link>
                        </div>
                    </form>
                  )}
            </Formik>
        </div>
    )
};

export default LoginForm;