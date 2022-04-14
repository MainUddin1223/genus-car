import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user, error
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('')

    const handleRegister = (event) => {
        event.preventDefault()
        console.log(event.target.value);
        // const email = event.target.email.value;
        // const password = event.target.password.value;
        // const email = emailRef.current.value;
        // const password = passwordRef.current.value
        // createUserWithEmailAndPassword(email, password)

    }
    const navigateLogin = () => {
        navigate('/login')
    }
    if (error) {
        console.error("something error");
    }
    if (user) {
        console.log(user);
    }
    return (
        <div className='container w-50 mx-auto'>
            <h1 className='text-primary text-center mt-2'>Please Register</h1>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Confirm Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Already have an account?? <Link to="/login" onClick={navigateLogin} className="text-primary text-decoration-none">Login</Link> </p>
        </div>
    );
};

export default Register;